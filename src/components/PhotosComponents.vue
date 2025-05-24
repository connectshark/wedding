<template>
  <ul class="gap-3 columns-2 md:columns-3 xl:columns-4 mb-20 px-3 relative before:absolute before:size-40 before:bg-secondary before:rounded-full before:blur-3xl before:left-1/3 before:top-1/10
    after:absolute after:size-40 after:bg-primary after:rounded-full after:blur-3xl after:right-1/3 after:bottom-1/10">
    <li v-for="(photo, i) in store.photos" v-motion :delay="300" :initial="{
      opacity: 0,
      y: 100,
    }" :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: '100'
      },
    }" :duration="500" class="mb-3 relative z-10">
      <figure class=" rounded-2xl overflow-clip">
        <router-link class="block active:brightness-70 hover:brightness-70" :to="`/photo/${photo}`">
          <img class="object-contain" draggable="false" :style="{ viewTransitionName: isStart ? '' : `photo-${photo}` }"
            loading="lazy" :src="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/${photo}.webp`"
            alt="photo">
        </router-link>
      </figure>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { usePhotosStore } from '@/stores/photo'
import { onBeforeRouteLeave } from 'vue-router'

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