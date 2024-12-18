<template>
  <div class=" pt-[10svh]" :class="{ 'text-background': isLightBox }">
    <template v-if="photoID">
      <picture class="py-10 max-w-3xl mx-auto block">
        <source :srcset="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/photos/${ photoID }.webp`" media="(min-width: 1600px)">
        <source :srcset="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/2x/${ photoID }.webp`" media="(min-width: 768px)">
        <source :srcset="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/${ photoID }.webp`" media="(max-width: 767px)">
        <img loading="lazy" draggable="false" :style="`view-transition-name: photo-${photoID};`" class="max-h-[80svh] mx-auto" :src="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/${ photoID }.webp`" alt="首圖">
      </picture>
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
</script>

<route lang="json">
{
  "meta": {
    "type": "content",
    "lightBox": false,
    "title": "婚紗照"
  }
}
</route>