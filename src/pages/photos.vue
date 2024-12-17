<template>
  <div class=" py-16">
    <h1 class="text-2xl/loose md:text-4xl/loose text-center">相簿</h1>
    <p class="text-center text-text/80">點擊圖片可看放大圖</p>
  </div>
  <div>
    <div v-if="loading"></div>
    <ul v-else class="gap-0 columns-2 md:columns-3 xl:columns-4 mb-20">
      <li v-for="photo in photos">
        <figure>
          <router-link class="block" :to="`/photo/${photo}`">
            <img draggable="false" :style="{ viewTransitionName: isStart ? '' : `photo-${photo}` }" loading="lazy" :src="`https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/${ photo }.webp`" alt="photo">
          </router-link>
        </figure>
      </li>
    </ul>
    <p class=" text-center mb-10">剩下的照片將於 2025/11/15 公開</p>
    <p class=" text-center">
      <router-link to="/" class="underline"><i class='bx bx-home'></i>回首頁</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import useFetch from '../composables/useFetch'

const isStart = ref(false)
onBeforeRouteLeave((to, from, next) => {
  const id = to.params.id
  if (id) {
    document.startViewTransition(async () => {
      isStart.value = true
      next()
    })
  } else {
    isStart.value = false
    next()
  }
})

const {
  data: photos,
  loading
} = useFetch('/photos.json', {
  immediate: true
})

</script>

<route lang="json">{
  "meta": {
    "type": "container"
  }
}</route>