<template>
  <button type="button" title="add task"
          class="addtaskbtn btn btn-circle border-none fixed w-14 h-14 bottom-8 right-8 bg-primary shadow justify-center items-center inline-flex z-30">
    <PlusIcon color="hsl(var(--b1))"
              class="w-[39px] h-[39px] relative flex-col justify-start items-start flex"></PlusIcon>
  </button>
</template>

<script setup lang="ts">
import {PlusIcon} from 'lucide-vue-next'
import StickyElement from 'vue-sticky-element';

</script>

<style scoped lang="less">

</style>