<template>
  <h2 class=" font-title text-center text-3xl/loose mb-10">婚紗照</h2>
  <ul class="gap-3 columns-2 md:columns-3 xl:columns-4 mb-20 px-3 relative before:absolute before:size-40 before:bg-secondary before:rounded-full before:blur-3xl before:left-1/3 before:top-1/10
    after:absolute after:size-40 after:bg-primary after:rounded-full after:blur-3xl after:right-1/3 after:bottom-1/10">
    <motion.li
      v-for="photo in store.photos"
      :key="photo"
      :transition="{ type: 'spring', duration: 1, bounce: .4 }"
      :initial="{ y: 100, opacity: 0 }"
      :whileInView="{ y: 0, opacity: 1 }"
      :inViewOptions="{ once: true }"
      class="mb-3 relative z-10"
    >
      <figure class=" rounded-2xl overflow-clip">
        <router-link class="block" :to="`/photo/${photo}`">
          <img class="object-contain" draggable="false" :style="{ viewTransitionName: isStart ? '' : `photo-${photo}` }"
            loading="lazy" :src="`${ WEDDING_PHOTO_BASE_URL }/1x/${photo}.webp`"
            alt="photo">
        </router-link>
      </figure>
    </motion.li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { usePhotosStore } from '@/stores/photo'
import { onBeforeRouteLeave } from 'vue-router'
import { motion } from 'motion-v'

const WEDDING_PHOTO_BASE_URL = import.meta.env.VITE_WEDDING_PHOTO_BASE_URL

const isStart = ref(false)
const store = usePhotosStore()
await store.initPhotos()

onBeforeRouteLeave((to, from, next) => {
  const id = to.params.id
  if (!document.startViewTransition) next()
  if (id) {
    document.startViewTransition(() => {
      isStart.value = true
      next()
    })
  } else {
    isStart.value = false
    next()
  }
})
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

await wait(200)
</script>