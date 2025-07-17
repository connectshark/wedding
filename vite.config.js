import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import tailwindcss from '@tailwindcss/vite'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    tailwindcss(),
    VueRouter({
      importMode: (filepath) => {
        const keywords = ['/photo/', 'index'];
        const res = keywords.some(key => filepath.includes(key))
        return res ? 'sync' : 'async'
      },
    }),
    vue(),
    VueDevTools(),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
