<script setup>
import { useRoute, useRouter } from 'vue-router'
import useFetch from './composables/useFetch'
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()

const SITE_NAME = '若筠&恩騰'

const {
  data: brands
} = useFetch('/brands.json', {})

const pages = [
  {
    url: '/photos',
    name: '相簿'
  },
]
const list = ref(null)

const vClickOutside = {
  beforeMount (el) {
    el.clickOutsideEvent = (event) => {
      if (list.value.contains(event.target)) {
        el.open = false
        return
      }
      if (!el.open || el.contains(event.target)) return
      el.open = false
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted (el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>

<template>
  <header class="backdrop-blur-sm sticky top-0 z-20 bg-background/40">
    <div class=" w-5/6 mx-auto py-2 flex items-center justify-between">
      <router-link class="p-3 rounded-xl active:bg-text/10 md:hover:bg-text/10 flex items-center gap-2" to="/">
        <img class="size-8 aspect-square" src="./assets/logo.png" alt="logo">
        <span>{{ SITE_NAME }}</span>
      </router-link>
      <details class="relative" v-clickOutside>
        <summary class="p-2 rounded-md cursor-pointer active:bg-text/10 md:hover:bg-text/10">
          <i class='bx bx-menu bx-sm'></i>
        </summary>
        <ul ref="list" class="absolute right-0 rounded-lg shadow-xl w-48 overflow-hidden bg-background border border-text/10">
          <li v-for="page in pages" class="border-b last:border-none">
            <router-link class="p-4 block text-sm/loose" :to="page.url">{{ page.name }}</router-link>
          </li>
        </ul>
      </details>
    </div>
  </header>
  <main>
    <router-view />
  </main>

  <Teleport to="#modal">
    <div v-if="route.meta.lightBox" @click="router.back()" class="fixed z-20 inset-0 bg-text/70 w-full h-full backdrop-blur-sm">
      <router-view name="lightBox"/>
    </div>
  </Teleport>
  <footer class="bg-text/10">
    <div class="bg-background py-10 rounded-b-[3rem]">
    </div>
    <div class="w-5/6 mx-auto pt-20 pb-10 grid md:grid-cols-3 gap-8">
      <div>
        <h5 class="mb-4">
          <router-link to="/" class="flex items-center gap-2 max-w-fit group p-3">
            <img class=" grayscale group-hover:grayscale-0 rounded-full size-8"
              src="./assets/logo.png" alt="logo">
            <span>{{ SITE_NAME }}</span>
          </router-link>
        </h5>
        <ul>
          <li>
            <a class="p-1 inline-block rounded-sm active:bg-text/10 md:hover:bg-text/10" href="mailto:contace@nosegates.com">
              <i class='bx bxl-gmail bx-sm align-middle'></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 class="mb-4 text-text/70"><i class='bx bx-bookmark'></i>分頁</h6>
        <ul>
          <li>
            <router-link class="text-sm/loose hover:underline" to="/photos">相簿</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h6 class="mb-4 text-text/70"><i class='bx bx-cube-alt'></i>品牌</h6>
        <ul>
          <li class="mb-2 last:mb-0" v-for="item in brands">
            <a class="text-sm/loose hover:underline" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}<i class='bx bx-link-external'></i></a>
          </li>
        </ul>
      </div>
      <div class=" md:col-span-3">
        <h6 class="mb-4 text-text/70"><i class='bx bx-pyramid'></i>來源</h6>
        <ul>
          <li>
            <a class="text-sm/loose hover:underline" target="_blank" href="https://storyset.com/people">People illustrations by Storyset<i class='bx bx-link-external'></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-5/6 mx-auto py-10 text-center text-text/80">
      <p class="mb-10 flex items-center gap-4 justify-center">
        <a class="p-2 rounded md:hover:bg-text/10 active:bg-text/10" href="https://www.instagram.com/joyun1191/" target="_blank" rel="noopener noreferrer">
          <i class='bx bxl-instagram bx-md align-middle'></i>
        </a>
      </p>
      <p class="text-sm/loose mb-4">Copyright <i class='bx bx-copyright'/> 2024 <a class=" underline" href="https://studio.justlikeboss.com" target="_blank">NS工作室</a> 版權所有</p>
      <p class="text-sm/loose">本網站由 <a class="underline" href="https://studio.justlikeboss.com" target="_blank">NS工作室</a> 製作</p>
    </div>
  </footer>
</template>