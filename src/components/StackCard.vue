<template>
<figure ref="card" class="sticky top-0 origin-top scale-[var(--scaleSetting)] transition-transform duration-500 pb-20" :style="topSetting">
  <img loading="lazy" draggable="false" class="w-5/6 max-w-96 max-h-[75svh] mx-auto object-contain object-center" :src="props.url" alt="photo">
</figure>
</template>

<script setup>
import { useTemplateRef, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  url: {
    type: String
  },
  index: {
    type: Number
  }
})

const scale = 1 - (3 - props.index) * 0.12
const topSetting = computed(() => {
  return {
    top: `${ props.index * 1.5 + 11 }%`
  }
})
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    const topRate = entry.boundingClientRect.top / window.innerHeight
    if (topRate <= 0.3) {
      entry.target.style.setProperty('--scaleSetting', scale)
    } else {
      entry.target.style.setProperty('--scaleSetting', 1)
    }
  })
}, {
  threshold: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
  rootMargin: '-20% 0px 0% 0px'
})
const card = useTemplateRef('card')
onMounted(() => {
  observer.observe(card.value)
})
onUnmounted(() => {
  observer.disconnect()
})

</script>