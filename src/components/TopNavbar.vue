<template>
  <div :class="`top-navbar sticky flex flex-col justify-start items-center pt-[16px] z-30 ${datepickerOpen?'z-50':''}`">
    <div
        class="navbar flex flex-row justify-around items-center w-[348px] h-[63px] px-[13px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] bg-gradient-to-br from-[hsl(var(--p--100))] to-[hsl(var(--p-300))] ">
      <div class="navbar-start">
        <button type="button" :class="`btn btn-ghost ${menuOpen?'btn-active':''}`" @click="toggleMenu()">
          <MenuIcon class="w-[24px] h-[24px]" color="hsl(var(--b1))"/>
        </button>
      </div>
      <div class="navbar-center">
        <a class="text-base-100 text-lg font-medium">{{ $t(`page.${router.currentRoute.value.name}.name`) }}</a>
      </div>
      <div class="navbar-end">
        <button v-if="!!(router.currentRoute.value.name === 'welcome' || 'day')" type="button" :class="`btn btn-ghost ${datepickerOpen?'btn-active':''}`" @click="toggleDatepicker()">
          <CalendarDaysIcon class="w-[24px] h-[24px]" color="hsl(var(--b1))"/>
        </button>
      </div>
    </div>
    <Transition name="datepicker">
      <div ref="datepickerRef" v-if="datepickerOpen" class="w-[310px] h-[360px] bg-white rounded-b-[22px] shadow-[0_0_10px_0_rgba(0,0,0,0.08)] flex flex-col justify-center items-center">
        <VueTailwindDatepicker i18n="zh-cn" as-single no-input v-model="datepickerDate" class="datepicker"></VueTailwindDatepicker>
      </div>
    </Transition>
  </div>
  <Transition name="mask">
    <div v-if="menuOpen || datepickerOpen" class="mask" @click="onMaskClick()"/>
  </Transition>
  <Transition name="menu">
    <div v-if="menuOpen"
         class="menu-panel w-[246px] h-[844px] absolute top-0 py-[29px] px-[30.5px] bg-base-100 shadow-[3px_0_15px_0_rgba(0,0,0,0.08)] z-50 flex-col justify-start items-center gap-[25px] flex ">
      <div class="w-full flex-col justify-start items-center gap-[12px] inline-flex">
        <div class="w-full flex flex-row justify-start items-center px-[2px]">
          <button type="button" class="btn btn-circle btn-ghost w-[30px] h-[30px] min-h-[30px]">
            <SettingsIcon class="w-[24px] h-[24px]" color="hsl(var(--n--300))"/>
          </button>
        </div>
        <div class="box">
          <input type="text" placeholder="搜索任务"
                 class="input input-bordered border-[#C6C6C6] w-full h-[40px] rounded-[16px] px-[12px] z-[51] text-stone-300 text-[16.5px] font-light">
        </div>
      </div>
      <div class="w-full flex flex-col justify-start items-center gap-[20px]">
        <button
            class="btn btn-ghost btn-menu-active w-full h-[46px] min-h-[45px] rounded-[16px] flex flex-row justify-start items-center">
          <CalendarCheckIcon class="w-[21px] h-[21px]" color="hsl(var(--n-700))"></CalendarCheckIcon>
          <a class="text-[hsl(var(--n-700))] text-[18px] font-normal">日任务</a>
        </button>
        <button
            class="btn btn-ghost w-full h-[46px] min-h-[45px] rounded-[16px] flex flex-row justify-start items-center">
          <TagsIcon class="w-[21px] h-[21px]" color="hsl(var(--n-700))"></TagsIcon>
          <a class="text-[hsl(var(--n-700))] text-[18px] font-normal">标签</a>
        </button>
      </div>
      <div class="w-full flex flex-row justify-around items-center gap-[8px]">
        <a class="text-center text-[hsl(var(--n-700))] text-[4px] font-light">任务列表</a>
        <div class="w-[119px] h-[0px] border-t border-[hsl(var(--n-1000))]"/>
      </div>
      <!-- TODO 任务列表 -->
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {MenuIcon, CalendarDaysIcon, SettingsIcon, CalendarCheckIcon, TagsIcon, ChevronLeft, ChevronRight} from 'lucide-vue-next';
import * as fun from "@/utils/fun";
import {ref, onMounted, watch} from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import moment from 'moment';
import 'moment/locale/zh-cn';
import {reactive} from "vue";

moment.locale();

const router = useRouter();

const datepickerDate = ref();

const menuOpen = ref(false);
const datepickerOpen = ref(false);
const datepickerRef = ref(null);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function toggleDatepicker() {
  datepickerOpen.value = !datepickerOpen.value;
}

function onMaskClick() {
  if (menuOpen.value) {
    menuOpen.value = false;
  }
  if (datepickerOpen.value) {
    datepickerOpen.value = false;
  }
}

watch(datepickerDate, (newVal, oldVal) => {
  console.log('datepickerDate changed', newVal, oldVal);
});

onMounted(() => {
  window.addEventListener('popstate', () => {
    if (menuOpen.value) {
      menuOpen.value = false;
    }
    if (datepickerOpen.value) {
      datepickerOpen.value = false;
    }
  });
});
</script>

<style scoped lang="less">

</style>