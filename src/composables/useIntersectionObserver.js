import { onMounted, onUnmounted } from 'vue'
export default (containerRef, callbackHandler, options) => {
  const observer = new IntersectionObserver(callbackHandler, options)

  onMounted(() => {
    observer.observe(containerRef.value)
  })
  onUnmounted(() => {
    observer.disconnect()
  })
}