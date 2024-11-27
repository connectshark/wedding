<template>
  <div class=" py-16">
    <h1 class="text-2xl/loose md:text-4xl/loose text-center">相簿</h1>
    <p class="text-center text-text/80">點擊圖片可看放大圖</p>
  </div>
  <div>
    <ul class="gap-0 columns-2 md:columns-3 xl:columns-4 mb-20">
      <li v-for="photo in photos">
        <figure>
          <router-link class="block" :to="`/photo/${photo.id}`">
            <img draggable="false" :style="{ viewTransitionName: isStart ? '' : `photo-${photo.id}` }" loading="lazy" :src="photo.url" alt="photo">
          </router-link>
        </figure>
      </li>
    </ul>
    <p class=" text-center">
      <router-link to="/" class=" underline"><i class='bx bx-home'></i>回首頁</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

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


const photos = [
  {
    id: '1',
    url: `/1.avif`
  },
  {
    id: '2',
    url: `/2.avif`
  },
  {
    id: '3',
    url: '/3.avif'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1517456363055-5d162a453d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDExMjB8MHwxfGFsbHx8fHx8fHx8fDE3MzI2MDk1MjF8&ixlib=rb-4.0.3&q=80&w=1080'
  }
]
</script>

<route lang="json">{
  "meta": {
    "type": "container"
  }
}</route>