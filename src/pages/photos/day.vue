<template>
  <div class="text-center py-16">
    <h1 class="font-title text-5xl mb-10">婚禮當天</h1>
    <ul class="gap-3 columns-2 md:columns-3 xl:columns-4 mb-20 px-3">
      <motion.li
        v-for="photo in photos"
        :key="photo"
        :transition="{ type: 'spring', duration: 1, bounce: .4 }"
        :initial="{ y: 100, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="mb-3 relative z-10"
      >
          <figure class="rounded-2xl overflow-clip">
            <router-link class="block" :to="`/photo/d/${photo}`">
              <img 
                class="object-contain w-full" 
                draggable="false" 
                loading="lazy" 
                :style="{ viewTransitionName: `photo-${photo}` }"
                :src="`https://cdn.jsdelivr.net/gh/connectshark/wedding-day-photos@main/done/1x/${ photo.toString().padStart(3, '0') }.webp`" 
                alt="photo"
              >
            </router-link>
          </figure>
      </motion.li>
    </ul>

    <div class="text-center">
      <p>
        <router-link to="/photos" class="underline hover:text-primary transition-colors"><i class='bx bx-left-arrow-alt'></i> 回相簿列表</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { motion } from 'motion-v'
import { onBeforeRouteLeave } from 'vue-router'
import { usePhotosStore } from '@/stores/photo'

const store = usePhotosStore()

const colCount = ref(2)

const updateColCount = () => {
  if (window.innerWidth >= 1280) { // xl
    colCount.value = 4
  } else if (window.innerWidth >= 768) { // md
    colCount.value = 3
  } else {
    colCount.value = 2
  }
}

const photos = Array.from({ length: 80 }, (_, i) => i + 1)

const cols = computed(() => {
  const columns = Array.from({ length: colCount.value }, () => [])
  photos.forEach((photo, index) => {
    columns[index % colCount.value].push(photo)
  })
  return columns
})

onMounted(() => {
  updateColCount()
  window.addEventListener('resize', updateColCount)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateColCount)
})

onBeforeRouteLeave((to, from, next) => {
  const { id } = to.params
  if (id && document.startViewTransition) {
    const paddedId = id.toString().padStart(3, '0')
    const photoData = {
      photo: id,
      small: `https://cdn.jsdelivr.net/gh/connectshark/wedding-day-photos@main/done/1x/${paddedId}.webp`,
      regular: `https://cdn.jsdelivr.net/gh/connectshark/wedding-day-photos@main/done/1x/${paddedId}.webp`,
      full: `https://cdn.jsdelivr.net/gh/connectshark/wedding-day-photos@main/done/1x/${paddedId}.webp`
    }
    store.setTargetPhoto(photoData)
    document.startViewTransition(() => next())
  } else {
    next()
  }
})
</script>

<route lang="json">
{
  "meta": {
    "title": "婚禮日"
  }
}
</route>
