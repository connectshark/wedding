<template>
  <div class=" pt-[10svh]" :class="{ 'text-background': isLightBox }">
    <template v-if="photo">
      <img loading="lazy" :style="`view-transition-name: photo-${route.params.id};`" class=" max-h-[80svh] mx-auto"
        :src="photo.url" alt="photo">
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

const photos = [
  {
    id: '1',
    url: `/1.avif`
  },
  {
    id: '2',
    url: `/2.avif`
  },
  {
    id: '3',
    url: '/3.avif'
  },
  {
    id: '4',
    url: '/4.jpg'
  }
]

const photoID = route.params.id

const photo = photos.find(photo => photo.id === photoID)

</script>

<route lang="json">{
  "meta": {
    "type": "content",
    "lightBox": false
  }
}</route>