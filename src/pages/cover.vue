<script setup>
import RoseFlowerComponents from '../components/img/RoseFlowerComponents.vue'
import RoseCuateFlowerComponents from '../components/img/RoseCuateFlowerComponents.vue'
import { motion } from 'motion-v'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <div data-name="welcome" @click="goToHome"
    class="perspective-distant fixed inset-0 z-20 flex items-center justify-center backdrop-blur-3xl bg-background/30">
    <motion.div
      :initial="{
        scale: .8,
        rotateY: -50,
        opacity: 0,
        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      }"
      :animate="{
        scale: 1,
        rotateY: 0,
        opacity: 1,
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
      }"
      :transition="{
        type: 'spring',
        duration: 2,
        bounce: 0.5,
      }"
      class="font-title text-3xl text-text/90 text-center bg-[url('/bg.jpg')] max-w-80 w-full h-full max-h-120 flex items-center justify-center rounded-4xl border-6 border-text/30 relative"
    >
      <div class="size-40 red absolute bottom-0 -left-[20%]">
        <RoseFlowerComponents />
      </div>
      <div class="size-40 yel absolute -top-10 -right-[10%]">
        <RoseCuateFlowerComponents />
      </div>
      <div>
        <h1>婚禮邀請函</h1>
        <p class="text-6xl/relaxed">若筠&恩騰</p>
        <p>我們結婚啦</p>
        <p>Welcome to our wedding.</p>
        <p class="group">
          <span
            class="before:absolute before:w-full before:transition-all group-hover:before:h-full before:h-1/2  before:bottom-0 before:left-0 before:-skew-y-10 before:bg-primary relative inline-block"><span class="relative cursor-pointer">Open</span></span>
        </p>
      </div>
    </motion.div>
  </div>
</template>