<template>
  <div>
    <picture v-if="photoID">
      <source :srcset="store.photo.full" media="(min-width: 1600px)">
      <source :srcset="store.photo.regular" media="(min-width: 768px)">
      <source :srcset="store.photo.small" media="(max-width: 767px)">
      <img loading="lazy" draggable="false" :style="`view-transition-name: photo-${photoID};`" class="h-[80svh] w-3/4 mx-auto object-contain object-center" :src="store.photo.small" :alt="`婚紗照${photoID}`"
      >
    </picture>
    <div v-else class=" text-center">
      <p><i class='bx bx-camera-off bx-md'></i></p>
      <p>沒這張照片</p>
    </div>
  </div>
  <p class=" text-center pt-20">
    <router-link to="/photos" class=" underline">回相簿</router-link>
  </p>
</template>

<script setup>
defineOptions({
  name: 'PhotoDetail'
})
import { usePhotosStore } from '@/stores/photo'
import { onMounted } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'

const store = usePhotosStore()

const route = useRoute()
const photoID = route.params.id

onBeforeRouteLeave((to, from, next) => {
  if (!document.startViewTransition) next()
  document.startViewTransition(() => next())
})

onMounted(() => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<route lang="json">
{
  "meta": {
    "title": "Highlight"
  }
}
</route>