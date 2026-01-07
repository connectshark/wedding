<template>
  <div v-if="loading" class=" text-center pt-20">
    <p>Loading...</p>
  </div>
  <div v-else>
    <picture v-if="id">
      <source :srcset="store.photo.full" media="(min-width: 1600px)">
      <source :srcset="store.photo.regular" media="(min-width: 768px)">
      <source :srcset="store.photo.small" media="(max-width: 767px)">
      <img loading="lazy" draggable="false" :style="`view-transition-name: photo-${id};`" class="w-full h-[80svh] mx-auto object-contain object-center" :src="store.photo.small" :alt="`婚紗照${id}`"
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
import { usePhotosStore } from '@/stores/photo'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import useFetch from '@/composables/useFetch'

defineOptions({
  name: 'PhotoDetail'
})

const store = usePhotosStore()
const route = useRoute()
const { id, album } = route.params

onBeforeRouteLeave((to, from, next) => {
  if (!document.startViewTransition) return next()
  document.startViewTransition(() => next())
})

const {
  data: wedding,
  loading: weddingLoading,
  doFetch: fetchWedding
} = useFetch(`https://opensheet.elk.sh/1ugNqY_23nVDGBme01MQvLCAEJ26pgB0-55XGDu4crA4/wedding`)
const {
  data: marriage,
  loading: marriageLoading,
  doFetch: fetchMarriage
} = useFetch(`https://opensheet.elk.sh/1ugNqY_23nVDGBme01MQvLCAEJ26pgB0-55XGDu4crA4/marriage`)

const day = ref([])

const albumsToFetch = {
  w: fetchWedding,
  m: fetchMarriage,
  d: async () => {
    day.value = Array.from({ length: 80 }, (_, i) => {
      const id = (i + 1).toString()
      const paddedId = id.padStart(3, '0')
      return {
        photo: id,
        small: `https://cdn.jsdelivr.net/gh/connectshark/wedding-day-photos@main/done/1x/${paddedId}.webp`,
        regular: `https://cdn.jsdelivr.net/gh/connectshark/wedding-day-photos@main/done/1x/${paddedId}.webp`,
        full: `https://cdn.jsdelivr.net/gh/connectshark/wedding-day-photos@main/done/1x/${paddedId}.webp`
      }
    })
  }
}
const albumsObject = {
  w: wedding,
  m: marriage,
  d: day
}

const loading = ref(false)

onMounted(async () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  if (store.photo.photo) return
  loading.value = true
  await albumsToFetch[album]()
  const photo = albumsObject[album].value.find(photo => photo.photo === id)
  store.setTargetPhoto(photo)
  loading.value = false
})
</script>

<route lang="json">
{
  "meta": {
    "title": "Highlight"
  }
}
</route>