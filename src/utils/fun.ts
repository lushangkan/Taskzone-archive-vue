import type {Ref} from "vue";
import router from "@/router/router";
import Color from "colorjs.io";

/**
 * 通过路由路径获取名称
 * @param path 路由路径
 * @returns 路由名称, 如果不存在则返回null
 */
export function getRouteName(path: string): string | null {
    for (const route of router.getRoutes()) {
        if (typeof route.name === "string") {
            if (equalIgnoreCase(route.path, path)) {
                return route.name
            }
        }
    }

    return null;
}

/**
 * 通过路由名称获取路径
 * @param name 路由名称
 * @returns 路由路径, 如果不存在则返回null
 */
export function getRoutePath(name: string): string | null {
    for (const route of router.getRoutes()) {
        if (typeof route.name === "string") {
            if (equalIgnoreCase(route.name, name)) {
                return route.path;
            }
        }
    }

    console.error(`Route name ${name} not found!`);

    return null;
}

/**
 * 获取元素的Class列表
 * @param ele 元素
 */
export function getEleClassList(ele: HTMLElement): DOMTokenList {
    if (ele.hasAttribute('class')) {
        const attr = document.createAttribute('class');
        ele.setAttributeNode(attr);
    }
    return ele.classList;
}

/**
 * 判断两个字符串是否相等, 忽略大小写
 * @param str1 字符串1
 * @param str2 字符串2
 */
export function equalIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

/**
  * 获取页面父级名称
 */
export function getPageParentName(): string {
    const url = window.location.pathname;
    const page = url.match(new RegExp('/([^/]*)'))![0];
    if (page === '/') {
        return 'Home';
    }
    return getRouteName(page)!;
}

/**
 * 降低css变量颜色的亮度，并保存在新的css变量中
 * @param colorVar css变量颜色
 * @param newColorVarName 新的css变量名称
 * @param percentage 要降低的亮度百分比
 * @returns 降低亮度后的颜色
 */
export function darken(colorVar: string, newColorVarName: string, percentage: number): Color {
    const root = document.documentElement;
    const oldColor = `hsl(${getComputedStyle(root).getPropertyValue(colorVar)})`;
    const newColor = new Color(oldColor);
    newColor.lch.l -= percentage;
    root.style.setProperty(newColorVarName, newColor.to("hsl").toString().match('(?<=\\()[^\\(\\)]*(?=\\))')![0]);
    return newColor;
}

/**
 * 增加css变量颜色的亮度，并保存在新的css变量中
 * @param colorVar css变量颜色
 * @param newColorVarName 新的css变量名称
 * @param percentage 要增加的亮度百分比
 * @returns 增加亮度后的颜色
 */
export function lighten(colorVar: string, newColorVarName: string, percentage: number): Color {
    const root = document.documentElement;
    const oldColor = `hsl(${getComputedStyle(root).getPropertyValue(colorVar)})`;
    const newColor = new Color(oldColor);
    newColor.lch.l += percentage * 100;
    root.style.setProperty(newColorVarName, newColor.to("hsl").toString().match('(?<=\\()[^\\(\\)]*(?=\\))')![0]);
    return newColor;
}

/**
 * 生成css颜色变量从黑到亮不同亮度的版本，并保存在后缀为100,200,-100,-200...的css变量中, 并返回一个颜色Map
 * @param colorVar css变量颜色
 * @returns 生成的颜色Map
 */
export function generateColorVariants(colorVar: string): Map<number, Color> {
    const colorMap = new Map<number, Color>();
    const root = document.documentElement;
    const oldColor = `hsl(${getComputedStyle(root).getPropertyValue(colorVar)})`;
    const oldColorObj = new Color(oldColor);
    colorMap.set(0, oldColorObj);
    const styleElement = document.createElement('style');

    styleElement.innerText += ':root {';

    for (let i = 1; i <= 10; i++) {
        const newColor = new Color(oldColor);
        newColor.lch.l += i * 2;
        colorMap.set(i * 100, newColor);
        styleElement.innerText += `${colorVar}-${i * 100}: ${newColor.to("hsl").toString().match('(?<=\\()[^\\(\\)]*(?=\\))')![0]};`;
    }
    for (let i = 1; i <= 10; i++) {
        const newColor = new Color(oldColor);
        newColor.lch.l -= i * 2;
        colorMap.set(-i * 100, newColor);
        styleElement.innerText += `${colorVar}-${-i * 100}: ${newColor.to("hsl").toString().match('(?<=\\()[^\\(\\)]*(?=\\))')![0]};`;
    }

    styleElement.innerText += '}';
    document.head.appendChild(styleElement);

    return colorMap;
}

/**
 * 生成主题颜色的各种版本,并保存在css变量
 */
export function generateThemeColorVariants(): void {
    generateColorVariants('--p')
    generateColorVariants('--s')
    generateColorVariants('--a')
    generateColorVariants('--n')
}

/**
 * 添加全屏半透明遮罩
 */
export function addMask(): void {
    const mask = document.createElement('div');
    mask.classList.add('mask');
    document.body.appendChild(mask);
}

/**
 * 删除遮罩
 */
export function removeMask(): void {
    const mask = document.querySelector('.mask');
    if (mask) {
        mask.remove();
    }
}