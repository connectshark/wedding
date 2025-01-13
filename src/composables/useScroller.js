import { onMounted, onUnmounted } from 'vue'

export default (containerRef) => {

  let isIntersecting = false

  const scrollHandler = () => {
    if (!isIntersecting) return
    const containerRect = containerRef.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    
    const elementTop = containerRect.top
    const elementHeight = containerRect.height
    
    const rawProgress = Math.max(0.2, Math.min(0.8, 
      (viewportHeight - elementTop) / (viewportHeight - (-elementHeight))
    ))
    const normalizedProgress = (rawProgress - 0.2) / (0.8 - 0.2)
    const finalProgress = Math.max(0, Math.min(1, normalizedProgress))
    containerRef.value.style.setProperty('--scroll', `-${finalProgress}`)
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isIntersecting = entry.isIntersecting
    })
  }, { threshold: 0.25 })

  onMounted(() => {
    observer.observe(containerRef.value)
    window.addEventListener('scroll', scrollHandler)
  })
  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('scroll', scrollHandler)
  })
}