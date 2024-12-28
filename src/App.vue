<script setup>
import { useRoute, useRouter } from 'vue-router'
import useFetch from './composables/useFetch'
import { ref } from 'vue'
import LogoComponents from './components/logo.vue'
import LogoIcon from './components/icons/LogoIcon.vue'
const route = useRoute()
const router = useRouter()

const {
  data: brands
} = useFetch('/brands.json', {})

const navs = [
  {
    url: '/photos',
    name: '相簿'
  }
]
const pages = [
  {
    url: '/photos',
    name: '相簿'
  },
  {
    url: '/privacy-policy',
    name: '隱私權政策'
  },
  {
    url: '/contact',
    name: '聯絡我們'
  },
  {
    url: '/license',
    name: '版權聲明'
  }
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

const isSticky = ref(false)
const scrollHandler = () => {
  isSticky.value = window.scrollY > 0
}
window.addEventListener('scroll', scrollHandler)

</script>

<template>
  <header :class="{ 'mb-0 pt-3 px-3': isSticky, 'mb-3': !isSticky }" class="sticky top-0 z-20 transition-all ease-in-out duration-500">
    <div :class="{ 'bg-linear-to-br from-background/90 to-secondary/20': isSticky }" class="backdrop-blur-sm transition-all ease-in-out duration-500 w-11/12 mx-auto p-2 flex items-center justify-between rounded-2xl">
      <router-link class="text-text/80 p-1 rounded-xl active:bg-text/10 md:hover:bg-text/10" to="/">
        <LogoIcon class="size-8 inline-block align-middle"/>
        <LogoComponents class="fill-current inline-block align-middle ml-2"/>
      </router-link>
      <details class="relative" v-clickOutside>
        <summary class="p-2 rounded-md cursor-pointer active:bg-text/10 md:hover:bg-text/10">
          <i class='bx bx-menu bx-sm'></i>
        </summary>
        <ul ref="list" class="absolute right-0 rounded-lg shadow-xl w-48 overflow-hidden bg-background border border-text/10">
          <li v-for="page in navs" class="border-b last:border-none">
            <router-link class="p-4 block text-sm/loose bg-background" :to="page.url">{{ page.name }}</router-link>
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
  <div class="bg-[url('/curve.svg')] bg-cover bg-center bg-no-repeat py-20"></div>
  <footer class="bg-text/10">
    <div class="w-5/6 mx-auto py-10 grid md:grid-cols-3 gap-8">
      <div>
        <h5 class="mb-4">
          <router-link to="/" class="inline-block text-text/80">
            <LogoIcon class="size-8 inline-block align-middle"/>
            <LogoComponents class="fill-current inline-block align-middle ml-2"/>
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
          <li v-for="page in pages" class="not-last:mb-2">
            <router-link class="text-sm/loose hover:underline" :to="page.url">{{ page.name }}</router-link>
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