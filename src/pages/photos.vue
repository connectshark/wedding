<template>
  <div class="text-center py-16">
    <h1 class="font-title text-5xl">相簿</h1>
    <p class="font-title text-3xl mb-5">Album</p>
    <p class="text-text/80">點擊圖片可看放大圖</p>
  </div>
  <div>
    <div v-if="loading" class=" text-center">
      <i class='bx bx-loader bx-spin' />
    </div>
    <ul v-else class="gap-3 columns-[150px] mb-20 w-11/12 mx-auto">
      <li v-for="photo in photos" class="mb-3">
        <figure class=" rounded-2xl overflow-clip">
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
    document.startViewTransition(() => {
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

<route lang="json">
{
  "meta": {
    "type": "container",
    "title": "婚紗相簿"
  }
}
</route>