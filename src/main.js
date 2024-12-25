import { createApp } from 'vue'
import { pinia } from './stores'
import { MotionPlugin } from '@vueuse/motion'

import './index.css'

import App from './App.vue'
import { router } from './router'

createApp(App)
  .use(pinia)
  .use(router)
  .use(MotionPlugin)
  .mount('#app')
