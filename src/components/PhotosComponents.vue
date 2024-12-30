<template>
<ul class="gap-3 columns-2 mb-20 w-11/12 mx-auto md:columns-3">
  <li
    v-for="(photo, i) in photos"
    v-motion
    :delay="300"
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: '100'
      },
    }"
    :duration="500"
    class="mb-3">
    <figure class=" rounded-2xl overflow-clip">
      <router-link class="block hover:brightness-70" :to="`/photo/${photo}`">
        <img class=" object-contain" draggable="false" :style="{ viewTransitionName: isStart ? '' : `photo-${photo}` }" loading="lazy" :src="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/${ photo }.webp`" alt="photo">
      </router-link>
    </figure>
  </li>
</ul>
</template>

<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const isStart = ref(false)
const fetch_response = await fetch('/photos.json')
const photos = await fetch_response.json()

onBeforeRouteLeave((to, from, next) => {
  const id = to.params.id
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

await wait(500)
</script>