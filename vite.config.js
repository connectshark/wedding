import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import tailwindcss from '@tailwindcss/vite'
import { writeFileSync } from 'fs'

const fetchStaticData = () => {
  return {
    name: 'json',
    async buildEnd () {
      const fetch_response = await fetch('https://cdn.jsdelivr.net/gh/connectshark/studio-portfolio@latest/brands.json')
      const data = await fetch_response.json()
      writeFileSync('./public/brands.json', JSON.stringify(data))
    }
  }
}

const fetchPhotos = () => {
  return {
    name: 'photos',
    async buildEnd () {
      const fetch_response = await fetch('https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/photos.json')
      const data = await fetch_response.json()
      writeFileSync('./public/photos.json', JSON.stringify(result))
    }
  }
}

const fetchFriendsThreads = () => {
  return {
    name: 'json',
    async buildEnd () {
      const fetch_response = await fetch('https://imgur-server.zeabur.app/notion')
      const data = await fetch_response.json()
      writeFileSync('./public/threads.json', JSON.stringify(data))
    }
  }
}

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VueRouter({
      importMode: (filepath) => filepath.includes(['/photo/', 'index']) ? 'sync' : 'async'
    }),
    VueDevTools(),
    fetchStaticData(),
    fetchFriendsThreads()
  ],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
