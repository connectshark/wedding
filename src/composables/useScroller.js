import { onUnmounted, onMounted, useTemplateRef } from 'vue'
import { scroll, animate } from 'motion'

export default (containerRef, scrollerRef, scrollerHandler) => {
  let stopScrollAnimation

  onMounted(() => {
    stopScrollAnimation = scroll(animate(scrollerRef.value, scrollerHandler), { target: containerRef.value })
  })

  onUnmounted(() => stopScrollAnimation())
}
