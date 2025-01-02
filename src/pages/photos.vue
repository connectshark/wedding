<template>
  <div class="text-center py-16">
    <h1 class="font-title text-5xl">
      <span class="relative">
        <div :class="{ 'opacity-0 translate-y-5': loading }" class="absolute bottom-2 size-9 right-full -rotate-30 transition duration-500 ease-in-out"><RoseFlowerComponents /></div>
        相簿
        <div :class="{ 'opacity-0 translate-y-5': loading }" class="absolute size-9 left-full bottom-2 rotate-10 transition duration-500 ease-in-out delay-75"><RoseFlowerComponents /></div>
      </span>
    </h1>
    <p class="font-title text-3xl mb-5">Album</p>
    <p class="text-text/80">點擊圖片可看放大圖</p>
  </div>
  <div>
    <Suspense @resolve="loading = false">
      <template #default>
        <PhotosComponents />
      </template>
      <template #fallback>
        <div class=" text-center">
          <i class='bx bx-loader bx-md bx-spin' />
        </div>
      </template>
    </Suspense>
    <div class="text-center">
      <p class="mb-10">剩下的照片將於 2025/11/15 公開</p>
      <p>
        <router-link to="/" class="underline"><i class='bx bx-home'></i>回首頁</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import PhotosComponents from '../components/PhotosComponents.vue'
import RoseFlowerComponents from '../components/img/RoseFlowerComponents.vue'
import { ref } from 'vue'

const loading = ref(true)
</script>

<route lang="json">
{
  "meta": {
    "type": "container",
    "title": "婚紗相簿"
  }
}
</route>