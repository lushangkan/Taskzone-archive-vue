<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center gap-2.5">
    <Vue3Lottie :animationData="DottedLineFace" class="h-[90px] w-[90px]"/>
    <div class="text-center text-black text-sm font-thin">{{ $t('page.welcome.tipsLine1') }}<br>{{ $t('page.welcome.tipsLine2') }}</div>

  </div>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import DottedLineFace from '@/assets/emoji/notoemoji/dotted-line-face.json'


</script>

<style scoped lang="less">

</style>