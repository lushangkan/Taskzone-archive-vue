<template id="app">
  <TopNavbar class="z-30 sticky"/>
  <router-view class="z-10 absolute top-0"/>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { onMounted, ref , type Ref} from "vue";
import * as fun from "@/fun";
import TopNavbar from "@/components/TopNavbar.vue";

onMounted(() => {
  console.log('App.vue mounted');

  //生成主题颜色的不同版本
  fun.generateThemeColorVariants();
})
</script>

<style scoped lang="less">

</style>
