<script setup>
import HeroSection from './components/HeroSection.vue'
import useFetch from './composables/useFetch'

const {
  data: brands,
  loading
} = useFetch('https://cdn.jsdelivr.net/gh/connectshark/studio-portfolio@latest/brands.json', {})
</script>

<template>
  <HeroSection />
  <header>
  </header>
  <main>
    <router-view />
  </main>
  <div class=" bg-gradient-to-b from-transparent to-slate-50 py-40">
  </div>
  <footer class="bg-slate-50">
    <div class="w-5/6 mx-auto pt-20 pb-10 grid md:grid-cols-3 gap-8">
      <div>
        <h5 class="mb-4">
          <router-link to="/" class="flex items-center gap-2 max-w-fit group">
            <img class=" grayscale group-hover:grayscale-0 rounded-full w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/connectshark/assets@latest/nosegates.jpg" alt="logo">
            <span>Wedding Project</span>
          </router-link>
        </h5>
        <ul>
          <li>
            <a class=" p-1 inline-block rounded hover:bg-black/5" href="mailto:contace@nosegates.com">
              <i class='bx bx-envelope bx-sm align-middle'></i>
            </a>
          </li>
        </ul>
      </div>
      <div class=" md:col-start-3">
        <h6 class="mb-4"><i class='bx bx-cube-alt bx-sm'></i>品牌</h6>
        <div v-if="loading"><i class='bx bx-loader'></i></div>
        <ul v-else>
          <li class=" mb-2 last:mb-0" v-for="item in brands">
            <a class=" hover:underline" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}<i class='bx bx-link-external'></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-5/6 mx-auto py-10">
      <p>Copyright<i class='bx bx-copyright'></i>2024<router-link to="/">Wedding Project</router-link></p>
    </div>
  </footer>
</template>
