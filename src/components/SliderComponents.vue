<template>
  <Splide :options="{ start: startIndex }" aria-label="Our wedding photos">
    <SplideSlide v-for="photo in store.photos" :key="photo">
      <picture>
        <source :srcset="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/4x/${ photo }.webp`" media="(min-width: 1600px)">
        <source :srcset="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/2x/${ photo }.webp`" media="(min-width: 768px)">
        <source :srcset="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/${ photo }.webp`" media="(max-width: 767px)">
        <img loading="lazy" draggable="false"
          :style="`view-transition-name: photo-${photo};`"
          class="h-[80svh] w-3/4 mx-auto object-contain object-center"
          :src="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/${ photo }.webp`"
          :alt="`婚紗照${photo}`"
        >
      </picture>
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { usePhotosStore } from '@/stores/photo'
import { useRoute } from 'vue-router'
const route = useRoute()
const photoID = route.params.id

const store = usePhotosStore()
await store.initPhotos()
const startIndex = store.photos.indexOf(photoID)

</script>