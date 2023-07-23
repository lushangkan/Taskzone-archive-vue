<template id="app" class="flex w-screen h-screen">
  <BottomNavigation/>

  <router-view/>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import { onMounted, ref , type Ref} from "vue";
import * as fun from "@/fun";
import router from "@/router/router";

onMounted(() => {
  console.log('App.vue mounted');

  //生成主题颜色的不同版本
  fun.generateThemeColorVariants();
})
</script>

<style scoped lang="less">

</style>
