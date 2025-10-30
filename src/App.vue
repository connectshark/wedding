<script setup>
import { useRoute } from 'vue-router'
import { ref, useTemplateRef } from 'vue'
import LogoComponents from './components/logo.vue'
import LogoIcon from './components/icons/LogoIcon.vue'
import SoundComponents from './components/SoundComponents.vue'
import useIntersectionObserver from './composables/useIntersectionObserver'

const route = useRoute()

const brands = [
  {
    name: 'NS工作室',
    url: 'https://studio.justlikeboss.com'
  },
  {
    name: 'Illustration by Storyset',
    url: 'https://storyset.com'
  }
]

const navs = [
  {
    url: '/photos',
    name: '相簿'
  },
  {
    url: '/cover',
    name: '邀請函'
  }
]
const pages = [
  {
    url: '/photos',
    name: '相簿'
  },
  {
    url: '/cover',
    name: '邀請函'
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
const list = useTemplateRef('list')

const vClickOutside = {
  beforeMount(el) {
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
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

const isSticky = ref(false)
const year = new Date().getFullYear()

const headerRef = useTemplateRef('headerRef')
useIntersectionObserver(headerRef, (entries) => {
  entries.forEach(entry => {
    isSticky.value = !entry.isIntersecting
  })
}, { threshold: 0 })
</script>

<template>
  <div>
    <div ref="headerRef" />
    <header :class="{ 'mb-0 pt-1.5 px-3': isSticky, 'mb-3': !isSticky }" class="sticky top-0 z-20 transition-all ease-in-out duration-500 max-w-4xl mx-auto">
      <div :class="{ 'bg-white/50': isSticky }"
        class="backdrop-blur-xs transition-all ease-in-out duration-500 w-11/12 mx-auto p-2 flex items-center justify-between rounded-2xl">
        <router-link class="text-text/80 p-1 rounded-xl active:bg-text/10 md:hover:bg-text/10" to="/">
          <LogoIcon class="size-8 inline-block align-middle" />
          <LogoComponents class="fill-current inline-block align-middle ml-2" />
        </router-link>
        <nav class="flex items-center gap-4">
          <SoundComponents ref="sound" class="p-2 rounded-md cursor-pointer active:bg-text/10 md:hover:bg-text/10" />
          <details class="relative" v-clickOutside>
            <summary class="p-2 rounded-md cursor-pointer active:bg-text/10 md:hover:bg-text/10">
              <i class='bx bx-menu bx-sm'></i>
            </summary>
            <ul ref="list"
              class="absolute right-0 rounded-lg shadow-xl w-48 overflow-hidden bg-background border border-text/10">
              <li v-for="page in navs" class="border-b last:border-b border-text/10">
                <router-link class="p-4 block text-sm/loose bg-background" :to="page.url">{{ page.name }}</router-link>
              </li>
            </ul>
          </details>
        </nav>
      </div>
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive exclude="PhotoDetail">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
  <div class="bg-[url('/curve.svg')] bg-cover bg-center bg-no-repeat py-20"></div>
  <footer class="bg-text/10">
    <div class="w-5/6 mx-auto py-10 grid md:grid-cols-4 gap-8">
      <div class="md:col-span-2">
        <h5 class="mb-4">
          <router-link to="/" class="inline-block text-text/80">
            <LogoIcon class="size-8 inline-block align-middle" />
            <LogoComponents class="fill-current inline-block align-middle ml-2" />
          </router-link>
        </h5>
        <ul>
          <li>
            <a class="p-1 inline-block rounded-sm active:bg-text/10 md:hover:bg-text/10"
              href="mailto:contace@nosegates.com">
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
          <li class="not-last:mb-2" v-for="item in brands">
            <a class="text-sm/loose hover:underline" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}<i class='bx bx-arrow-out-up-right-stroke-square align-middle' /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-5/6 mx-auto py-10 text-center text-text/80">
      <div class="mb-10 flex items-center gap-4 justify-center">
        <div>
          <a title="新郎IG帳號" class="p-2 inline-block rounded md:hover:bg-text/10 active:bg-text/10" href="https://www.instagram.com/nose_gates/" target="_blank" rel="noopener noreferrer"><i class='bxl bx-instagram bx-sm inline-block align-middle' /></a>
          <p>新郎IG</p>
        </div>
      </div>
      <p class="text-sm/loose mb-4">Copyright <i class='bx bx-copyright' /> {{ year }} <a class="underline" href="https://sandra.nosegates.com" target="_blank">婚禮邀請函 若筠&恩騰</a> 版權所有</p>
      <p class="text-sm/loose">本網站由 新娘設計 <a class="underline" href="https://nosegates.com" target="_blank">新郎製作<i class='bx bx-arrow-out-up-right-stroke-square align-middle' /></a></p>
    </div>
  </footer>
</template>