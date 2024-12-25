<template>
  <div class="text-center py-16">
    <h1 class="font-title text-5xl">相簿</h1>
    <p class="font-title text-3xl mb-5">Album</p>
    <p class="text-text/80">點擊圖片可看放大圖</p>
  </div>
  <div>
    <Suspense>
      <template #default>
        <PhotosComponents />
      </template>
      <template #fallback>
        <div class=" text-center">
          <i class='bx bx-loader bx-md bx-spin' />
        </div>
      </template>
    </Suspense>
    <p class=" text-center mb-10">剩下的照片將於 2025/11/15 公開</p>
    <p class=" text-center">
      <router-link to="/" class="underline"><i class='bx bx-home'></i>回首頁</router-link>
    </p>
  </div>
</template>

<script setup>
import PhotosComponents from '../components/PhotosComponents.vue'

</script>

<route lang="json">
{
  "meta": {
    "type": "container",
    "title": "婚紗相簿"
  }
}
</route>