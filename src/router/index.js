import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

const VITE_SITE_NAME = import.meta.env.VITE_SITE_NAME

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | ${VITE_SITE_NAME}` : VITE_SITE_NAME
})

export default router

if (import.meta.hot) { 
  handleHotUpdate(router)
} 