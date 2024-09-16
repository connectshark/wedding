<template>
  <div class=" py-16">
    <h1 class="text-2xl/loose md:text-4xl/loose text-center">相簿</h1>
    <p class="text-center text-text/80">點擊圖片可看放大圖</p>
  </div>
  <div class=" container mx-auto px-1">
    <ul class="gap-1 columns-2 md:columns-3 xl:columns-4 mb-20">
      <li v-for="photo in photos">
        <figure>
          <router-link class=" block" :to="`/photo/${ photo.id }`">
            <img loading="lazy" :src="photo.url" alt="photo">
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
    url: '/4.jpg'
  }
]
</script>

<route lang="json">{
  "meta": {
    "type": "container"
  }
}</route>