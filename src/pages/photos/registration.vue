<template>
  <div class="text-center py-16">
    <h1 class="font-title text-4xl mb-10">登記照</h1>
    
    <ul class="gap-3 columns-2 md:columns-3 xl:columns-4 mb-20 px-3">
      <motion.li
        v-for="photo in marriage"
        :key="photo"
        :transition="{ type: 'spring', duration: 1, bounce: .4 }"
        :initial="{ y: 100, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="mb-3 relative z-10"
      >
        <figure class=" rounded-2xl overflow-clip">
          <router-link class="block" :to="`/photo/m/${photo.photo}`">
            <img class="object-contain" draggable="false" :style="{ viewTransitionName: `photo-${photo.photo}` }" loading="lazy" :src="photo.small" alt="photo">
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
import RoseFlowerComponents from '@/components/img/RoseFlowerComponents.vue'
import useFetch from '@/composables/useFetch'
import { onMounted, ref } from 'vue'
import { motion } from 'motion-v'
import { onBeforeRouteLeave } from 'vue-router'
import { usePhotosStore } from '@/stores/photo'

const store = usePhotosStore()
const loading = ref(true)

const {
  data: marriage,
  doFetch: fetchMarriage
} = useFetch('https://opensheet.elk.sh/1ugNqY_23nVDGBme01MQvLCAEJ26pgB0-55XGDu4crA4/marriage')

onMounted(async () => {
  await fetchMarriage()
  loading.value = false
})

onBeforeRouteLeave((to, from, next) => {
  const { id } = to.params
  if (!document.startViewTransition) return next()
  if (id && marriage.value) {
    const photo = marriage.value.find(p => p.photo === id)
    if (photo) store.setTargetPhoto(photo)
  }
  document.startViewTransition(() => next())
})
</script>

<route lang="json">
{
  "meta": {
    "title": "登記照"
  }
}
</route>
