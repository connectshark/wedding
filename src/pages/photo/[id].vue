<template>
  <div class=" pt-[10svh]" :class="{ 'text-background': isLightBox }">
    <template v-if="photo">
      <img loading="lazy" draggable="false" :style="`view-transition-name: photo-${photoID};`" class="max-h-[80svh] mx-auto"
        :src="photo" alt="photo">
      <div class=" text-center">長按圖片可下載</div>
    </template>
    <div v-else class=" text-center">
      <p><i class='bx bx-camera-off bx-md'></i></p>
      <p>沒這張照片</p>
    </div>
  </div>
  <p v-if="!isLightBox" class=" text-center pt-20">
    <router-link to="/photos" class=" underline">回相簿</router-link>
  </p>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const isLightBox = route.meta.lightBox

const photoID = route.params.id

const photo = `https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/${ photoID }.webp`

</script>

<route lang="json">{
  "meta": {
    "type": "content",
    "lightBox": false
  }
}</route>