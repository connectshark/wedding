<template>
  <div>
    <div class=" w-11/12 mx-auto text-right min-h-[10svh]">
      <button v-if="isLightBox"><i class='bx bx-x bx-md align-middle'></i></button>
    </div>
    <template v-if="photoID">
      <div>
        <Suspense>
          <SliderComponents/>
        </Suspense>
      </div>
    </template>
    <div v-else class=" text-center">
      <p><i class='bx bx-camera-off bx-md'></i></p>
      <p>沒這張照片</p>
    </div>
  </div>
  <p v-if="!isLightBox" class=" text-center pt-20">
    <router-link to="/photos" class=" underline">回相簿</router-link>
  </p>
</template>

<script setup>
import SliderComponents from '@/components/SliderComponents.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const isLightBox = route.meta.lightBox
const photoID = route.params.id
</script>

<route lang="json">
{
  "meta": {
    "type": "content",
    "lightBox": false,
    "title": "婚紗照"
  }
}
</route>