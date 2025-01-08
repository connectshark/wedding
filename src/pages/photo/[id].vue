<template>
  <div>
    <div class=" w-11/12 mx-auto text-right min-h-[10svh]">
      <button v-if="isLightBox"><i class='bx bx-x bx-md align-middle'></i></button>
    </div>
    <template v-if="photoID">
      <picture class="max-w-3xl mx-auto block">
        <source :srcset="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/photos/${ photoID }.webp`" media="(min-width: 1600px)">
        <source :srcset="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/2x/${ photoID }.webp`" media="(min-width: 768px)">
        <source :srcset="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/${ photoID }.webp`" media="(max-width: 767px)">
        <img loading="lazy" draggable="false"
          :style="`view-transition-name: photo-${photoID};`"
          class="h-[80svh] w-full object-contain object-center"
          :src="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/${ photoID }.webp`"
          :alt="`婚紗照${photoID}`"
        >
      </picture>
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