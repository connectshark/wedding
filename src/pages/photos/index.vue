<template>
  <div class="text-center py-16">
    <h1 class="font-title text-5xl mb-10">
      <span class="relative">
        <div class="absolute bottom-2 size-9 right-full -rotate-30 transition duration-500 ease-in-out"><RoseFlowerComponents /></div>
        相簿
        <div class="absolute size-9 left-full bottom-2 rotate-10 transition duration-500 ease-in-out delay-75"><RoseFlowerComponents /></div>
      </span>
    </h1>
    <p class="font-title text-3xl mb-16">Albums</p>

    <div class="max-w-4xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <router-link v-for="item in photos" :key="item.title" :to="item.route" class="rounded-3xl shadow-md hover:shadow-xl aspect-square md:aspect-3/5 bg-center bg-no-repeat bg-cover overflow-hidden" :style="`background-image: url(${item.cover})`">
        <div class="h-full bg-white/40 backdrop-blur-3xl flex flex-col justify-center transition-all duration-300 ease-in-out hover:backdrop-blur-none">
          <h2 class="text-3xl font-bold">{{ item.title }}</h2>
          <p class="text-sm">{{ item.description }}</p>
        </div>
      </router-link>
    </div>
    <div class="text-center mt-20">
      <p>
        <router-link to="/" class="underline hover:text-primary transition-colors"><i class='bx bx-home'></i> 回首頁</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import RoseFlowerComponents from '@/components/img/RoseFlowerComponents.vue'

const photos = [
  {
    title: '婚禮照',
    route: '/photos/wedding',
    cover: 'https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/DSC00186.webp',
    description: 'Wedding Photos'
  },
  {
    title: '登記照',
    route: '/photos/registration',
    cover: 'https://cdn.jsdelivr.net/gh/connectshark/registration-photos@main/1x/wedding-1.webp',
    description: 'Registration Photos'
  },
  {
    title: '婚禮當日',
    route: '/photos/day',
    cover: 'https://cdn.jsdelivr.net/gh/connectshark/wedding-day-photos@main/done/1x/001.webp',
    description: 'The Big Day'
  }
]

</script>

<route lang="json">
{
  "meta": {
    "title": "相簿首頁"
  }
}
</route>