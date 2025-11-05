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
    <p class="font-bold text-4xl/loose underline decoration-accent">點圖放大</p>
  </div>
  <div>
    <h2 class=" font-title text-center text-3xl/loose mb-10">婚紗照</h2>
    <ul class="gap-3 columns-2 md:columns-3 xl:columns-4 mb-20 px-3 relative before:absolute before:size-40 before:bg-secondary before:rounded-full before:blur-3xl before:left-1/3 before:top-1/10
      after:absolute after:size-40 after:bg-primary after:rounded-full after:blur-3xl after:right-1/3 after:bottom-1/10">
      <motion.li
        v-for="photo in wedding"
        :key="photo"
        :transition="{ type: 'spring', duration: 1, bounce: .4 }"
        :initial="{ y: 100, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="mb-3 relative z-10"
      >
        <figure class=" rounded-2xl overflow-clip">
          <router-link class="block" :to="`/photo/w/${photo.photo}`">
            <img class="object-contain" draggable="false" :style="{ viewTransitionName: `photo-${photo.photo}` }" loading="lazy" :src="photo.small" alt="photo">
          </router-link>
        </figure>
      </motion.li>
    </ul>
    <h2 class=" font-title text-center text-3xl/loose mb-10">登記照</h2>
    <ul class="gap-3 columns-2 md:columns-3 xl:columns-4 mb-20 px-3 relative before:absolute before:size-40 before:bg-secondary before:rounded-full before:blur-3xl before:left-1/3 before:top-1/10
      after:absolute after:size-40 after:bg-primary after:rounded-full after:blur-3xl after:right-1/3 after:bottom-1/10">
      <motion.li
        v-for="photo in marriage"
        :key="photo"
        :transition="{ type: 'spring', duration: 1, bounce: .4 }"
        :initial="{ y: 100, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="mb-3 relative z-10"
      >
        <figure class=" rounded-2xl overflow-clip">
          <router-link class="block" :to="`/photo/m/${photo.photo}`">
            <img class="object-contain" draggable="false" :style="{ viewTransitionName: `photo-${photo.photo}` }" loading="lazy" :src="photo.small" alt="photo">
          </router-link>
        </figure>
      </motion.li>
    </ul>
    <div class="text-center">
      <p class="mb-10">Coming Soon~</p>
      <p class=" leading-loose">剩餘的照片會<span class="text-primary text-lg font-bold px-1 rounded">陸續開放</span></p>
      <p class="mb-10">所有的照片將於 <span class="font-bold">2025/11/15</span> 公開</p>
      <p>
        <router-link to="/" class="underline"><i class='bx bx-home'></i>回首頁</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import RoseFlowerComponents from '../components/img/RoseFlowerComponents.vue'
import useFetch from '@/composables/useFetch'
import { onMounted, ref } from 'vue'
import { motion } from 'motion-v'
import { onBeforeRouteLeave } from 'vue-router'
import { usePhotosStore } from '@/stores/photo'

const store = usePhotosStore()

const loading = ref(true)

const {
  data: wedding,
  doFetch: fetchWedding
} = useFetch('https://opensheet.elk.sh/1ugNqY_23nVDGBme01MQvLCAEJ26pgB0-55XGDu4crA4/wedding')

const {
  data: marriage,
  doFetch: fetchMarriage
} = useFetch('https://opensheet.elk.sh/1ugNqY_23nVDGBme01MQvLCAEJ26pgB0-55XGDu4crA4/marriage')

onMounted(async () => {
  await Promise.all([
    fetchWedding(),
    fetchMarriage()
  ])
})


onBeforeRouteLeave((to, from, next) => {
  const { id, album } = to.params
  if (!document.startViewTransition) return next()
  if (id && album) {
    const albumsObject = {
      w: wedding.value,
      m: marriage.value
    }
    const photo = albumsObject[album].find(p => p.photo === id)
    store.setTargetPhoto(photo)
  }
  document.startViewTransition(() => next())
})
</script>

<route lang="json">
{
  "meta": {
    "title": "婚紗相簿"
  }
}
</route>