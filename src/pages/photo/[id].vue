<template>
  <div>
    <div class=" w-4/5 mx-auto text-right min-h-[10svh]">
      <button class=" inline-block mt-3 cursor-pointer hover:bg-white bg-white/40 rounded-4xl" v-if="isLightBox" @click="router.back()">
        <i class='bx bx-x bx-md align-middle' />
      </button>
    </div>
    <div v-if="photoID && isLightBox">
      <Suspense>
        <SliderComponents/>
      </Suspense>
    </div>
    <picture v-else-if="photoID">
      <source :srcset="`${ WEDDING_PHOTO_BASE_URL }/4x/${ photoID }.webp`" media="(min-width: 1600px)">
      <source :srcset="`${ WEDDING_PHOTO_BASE_URL }/2x/${ photoID }.webp`" media="(min-width: 768px)">
      <source :srcset="`${ WEDDING_PHOTO_BASE_URL }/1x/${ photoID }.webp`" media="(max-width: 767px)">
      <img loading="lazy" draggable="false" :style="`view-transition-name: photo-${photoID};`" class="h-[80svh] w-3/4 mx-auto object-contain object-center" :src="`${ WEDDING_PHOTO_BASE_URL }/1x/${ photoID }.webp`" :alt="`婚紗照${photoID}`"
      >
    </picture>
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
import SliderComponents from '@/components/SliderComponents.vue';
import { useRoute, useRouter } from 'vue-router'

const WEDDING_PHOTO_BASE_URL = import.meta.env.VITE_WEDDING_PHOTO_BASE_URL

const route = useRoute()
const router = useRouter()
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