<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const SITE_NAME = '若筠&恩騰'

const brands = [
  {
    url: 'https://exchange-rate.justlikeboss.com/',
    name: '匯星'
  },
  {
    url: 'https://blog.justlikeboss.com/',
    name: '小資族FIRE攻略'
  },
  {
    url: 'https://kfc.justlikeboss.com/',
    name: '酷碰獅'
  },
  {
    url: 'https://studio.justlikeboss.com/',
    name: 'NS工作室'
  },
  {
    url: 'https://shopee.nosegates.com/',
    name: '蝦英雄'
  },
  {
    url: 'https://hidden-taiwan.justlikeboss.com',
    name: 'Hidden Taiwan'
  }
]
</script>

<template>
  <header class="backdrop-blur sticky top-0 z-20">
    <div class=" w-5/6 mx-auto py-2 flex">
      <router-link class="p-3 rounded-xl hover:bg-text/10 flex items-center gap-2" to="/">
        <img class="w-8"src="./assets/logo.png" alt="">
        <span>{{ SITE_NAME }}</span>
      </router-link>
      <nav>
        <ul>
          <li><input type="checkbox" id="dark"></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <router-view />
  </main>

  <Teleport to="#modal">
    <div v-if="route.meta.lightBox" @click="router.back()" class="fixed z-20 inset-0 bg-text/70 w-full h-full backdrop-blur">
      <router-view name="lightBox"/>
    </div>
  </Teleport>
  <footer class="bg-text/10">
    <div class="bg-background py-10 rounded-b-[3rem]">
    </div>
    <div class="w-5/6 mx-auto pt-20 pb-10 grid md:grid-cols-3 gap-8">
      <div>
        <h5 class="mb-4">
          <router-link to="/" class="flex items-center gap-2 max-w-fit group">
            <img class=" grayscale group-hover:grayscale-0 rounded-full w-8 h-8"
              src="./assets/logo.png" alt="logo">
            <span>{{ SITE_NAME }}</span>
          </router-link>
        </h5>
        <ul>
          <li>
            <a class="p-1 inline-block rounded hover:bg-text/10" href="mailto:contace@nosegates.com">
              <i class='bx bxl-gmail bx-sm align-middle'></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 class="mb-4 text-text/70"><i class='bx bx-bookmark'></i>分頁</h6>
        <ul>
          <li>
            <router-link class="text-sm/relaxed hover:underline" to="/photos">相簿</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h6 class="mb-4 text-text/70"><i class='bx bx-cube-alt'></i>品牌</h6>
        <ul>
          <li class="mb-2 last:mb-0" v-for="item in brands">
            <a class="text-sm/relaxed hover:underline" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}<i class='bx bx-link-external'></i></a>
          </li>
        </ul>
      </div>
      <div class=" md:col-span-3">
        <h6 class="mb-4 text-text/70"><i class='bx bx-pyramid'></i>來源</h6>
        <ul>
          <li>
            <a class="text-sm/relaxed hover:underline" target="_blank" href="https://storyset.com/people">People illustrations by Storyset<i class='bx bx-link-external'></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-5/6 mx-auto py-10 text-center text-text/80">
      <p class="mb-10 flex items-center gap-4 justify-center">
        <a class="p-1 rounded hover:bg-text/10" href="https://www.instagram.com/joyun1191/" target="_blank" rel="noopener noreferrer">
          <i class='bx bxl-instagram bx-sm align-middle'></i>
        </a>
        <a class="p-1 rounded hover:bg-text/10" href="https://github.com/connectshark/wedding" target="_blank" rel="noopener noreferrer">
          <i class='bx bxl-github bx-sm align-middle'></i>
        </a>
      </p>
      <p class=" text-xs/loose lg:text-sm/loose">Copyright <i class='bx bx-copyright'/> 2024<router-link class=" hover:underline" to="/">{{ SITE_NAME }}</router-link> <a class=" underline" href="https://github.com/connectshark/wedding/blob/main/LICENSE" target="_blank">CC-BY-SA-4.0</a> License.</p>
    </div>
  </footer>
</template>