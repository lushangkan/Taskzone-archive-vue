<template>
  <OverlayScrollbarsComponent>
    <div class="flex flex-col items-center justify-center w-full">
      <div class="w-[80vw] h-[200vh] bg-warning z-10 ">
      </div>
      <AddTaskBtn/>
    </div>
  </OverlayScrollbarsComponent>
</template>

<script setup lang="ts">
import AddTaskBtn from "@/components/AddTaskBtn.vue";
import {OverlayScrollbarsComponent} from "overlayscrollbars-vue";

</script>

<style scoped lang="less">

</style>