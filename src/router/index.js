import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from) {
    let position = 0
    if (from.meta.type === 'container' && to.meta.type === 'content' || from.meta.type === 'content' && to.meta.type === 'container') {
      position = undefined
    }
    return { top: position }
  }
})

const VITE_SITE_NAME = import.meta.env.VITE_SITE_NAME

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | ${VITE_SITE_NAME}` : VITE_SITE_NAME
})

router.beforeEach((to, from) => {
  if (from.matched.length) {
    const fromMatch = from.matched[from.matched.length - 1]
    let defaultComponent = undefined
    if (fromMatch.meta.type === 'container' && to.meta.type === 'content') {
      const fromMatch = from.matched[0]
      defaultComponent = fromMatch.components.default
    } else if (fromMatch.components?.lightBox) {
      defaultComponent = fromMatch.components.default
      fromMatch.components.default = fromMatch.components.lightBox
      fromMatch.components.lightBox = null
      fromMatch.meta.lightBox = false
    }
    if (defaultComponent && to.meta.type === 'content') {
      const toMatch = to.matched[1]
      toMatch.components.lightBox = toMatch.components.default
      toMatch.components.default = defaultComponent
      to.meta.lightBox = true
    }
  }
  return true
})

export default router

if (import.meta.hot) { 
  handleHotUpdate(router) 
} 