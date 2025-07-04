<script setup>
import useCountdown from '../composables/useCountdown'
import LineIcon from '../components/icons/LineIcon.vue'
import useShare from '../composables/useShare'
import CalenderComponent from '../components/calender.vue'
import useFetch from '../composables/useFetch'
import { useScroll, motion, useTransform } from 'motion-v'
import { useTemplateRef } from 'vue'
import NumberFlow from '@number-flow/vue'

const photos = [
  { id: '1', url: `https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/DSC00205.webp` },
  { id: '2', url: `https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/DSC00296.webp` },
  { id: '3', url: 'https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/DSC00261.webp' },
  { id: '4', url: 'https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/DSC00209.webp' }
]

const SITE_URL = 'https://sandra.nosegates.com'

const calender = `https://www.google.com/calendar/render?action=TEMPLATE&text=若筠與恩騰婚宴❤️&dates=20251115T030000Z/20251115T070000Z&location=川門子時尚餐廳&details=<b>若筠與恩騰婚宴❤️</b>
誠摯的邀請您一同參與我們盛大的婚禮，分享幸福的時光
<ul><li>11:00 戶外證婚</li><li><b>12:00 婚禮開始</b></li></ul>
<ul><li>會場：川門子時尚餐廳</li><li>地址：桃園市蘆竹區南竹路二段156-2號</li><li>宴會廳：水漾聽 1F</li><li>場地電話：03 2124 999</li></ul>&destination_place_id=ChIJBYy1e-cfaDQRFwXQYZdoQNg`

const map = `https://www.google.com/maps/dir/?api=1&destination_place_id=ChIJBYy1e-cfaDQRFwXQYZdoQNg&travelmode=driving&destination=川門子`

const {
  days,
  minutes,
  seconds,
  hours
} = useCountdown('2025-11-15')


const {
  data: messages,
  loading
} = useFetch('https://opensheet.elk.sh/1ugNqY_23nVDGBme01MQvLCAEJ26pgB0-55XGDu4crA4/messages')

const VITE_SITE_NAME = import.meta.env.VITE_SITE_NAME
const {
  share,
  isShare
} = useShare({
  title: VITE_SITE_NAME,
  url: SITE_URL
})

const containerRef = useTemplateRef('container')

const { scrollYProgress } = useScroll({
  target: containerRef,
})

const translateX = useTransform(
  scrollYProgress,
  [0, 1],
  ['0', `-${photos.length - 1}00vw`]
)
</script>

<template>
  <section class="py-24 min-h-[70svh]">
    <div class="font-title text-center mb-20">
      <h2 class="tracking-wide text-6xl mb-5">呂若筠&nbsp;&&nbsp;葉恩騰</h2>
      <p class="text-3xl">要<span class="before:absolute before:w-full before:h-1/2 before:bottom-0 before:left-0 before:-skew-y-10 before:bg-primary relative inline-block font-bold"><span class="relative">結婚</span></span>啦！</p>
      <p class="text-xl text-text/90">Welcome to our Wedding!</p>
    </div>

    <figure class="max-w-4xl mx-auto">
      <img draggable="false" class="object-cover w-full shadow-xl"
        src="https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/DSC00174.webp" alt="我們的婚禮">
    </figure>
  </section>

  <section class="mb-20 bg-text/5 py-20 relative before:absolute before:top-0 before:border-r-50 before:border-b-50 before:border-transparent before:border-b-background before:left-1/2 before:-rotate-45 before:-translate-y-1/2 before:-translate-x-1/2 after:absolute after:bottom-0 after:border-r-50 after:border-b-50 after:border-transparent after:border-b-text/5 after:left-1/2 after:-rotate-45 after:translate-y-1/2 after:-translate-x-1/2">
    <div class="font-title text-5xl text-center mb-20">
      <motion.h2
        :transition="{ type: 'spring' }"
        :initial="{ y: -50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="tracking-wide"
      >關於我們</motion.h2>
      <motion.p
        :transition="{ ease: 'easeInOut', duration: .6, delay: .2 }"
        :initial="{ y: 50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="text-xl text-text/70"
      >About Us</motion.p>
    </div>
    <div class="w-11/12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        :initial="{ opacity: 0, y: 50 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1, delay: .2 }"
        :inViewOptions="{ once: true }"
        class="order-2 md:order-1"
      ><div class="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-primary/10">
          <p class="text-xl leading-relaxed mb-4">嗨～當你收到這封邀請函的時候</p>
          <p class="text-xl leading-relaxed">我們的婚禮已經在倒數啦！</p>
          <div class="mt-8 flex gap-4 items-center text-text/70">
            <div class="h-px flex-grow bg-linear-to-r/oklch via-primary to-primary/30"></div>
            <i class='bx bx-heart-circle text-primary text-2xl'></i>
            <div class="h-px flex-grow bg-linear-to-l/oklch via-primary to-primary/30"></div>
          </div>
          <p class="mt-8 text-lg text-text">"Hi~ By the time you get this invitation, the countdown to our wedding will have already begun!"</p>
        </div>
      </motion.div>
      <motion.div
        :initial="{ opacity: 0, y: 50 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1, delay: .2 }"
        :inViewOptions="{ once: true }"
        class="order-1 md:order-2"
      >
        <div>
          <img class="rounded-3xl shadow-2xl object-cover w-full aspect-[3/4]" src="https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@main/1x/DSC00296.webp" alt="我們的故事" loading="lazy" draggable="false" />
        </div>
      </motion.div>
    </div>
  </section>
  <section class="relative py-16">
    <div class="py-12 text-center">
      <h2 class="font-title text-4xl tracking-wider text-balance mb-4">誠摯邀請您見證我們的幸福起點</h2>
      <p class="text-xl mb-10 text-balance">我們將攜手步入人生的新篇章，誠摯邀請您蒞臨現場，共同見證這份愛的誓約</p>
      <div class="flex items-center justify-center">
        <div class="w-16 h-px bg-primary"></div>
        <i class='bx bxs-heart text-primary text-2xl mx-4'></i>
        <div class="w-16 h-px bg-primary"></div>
      </div>
    </div>
  </section>
  <div class="py-20 text-center">
    <p class="font-title text-4xl w-5/6 mx-auto">愛情的旅程，感謝有你們和妳們相伴</p>
  </div>
  <div class="bg-[url('/wave.svg')] bg-cover bg-center bg-no-repeat py-20 xl:py-30" />
  <section class="bg-text py-20">
    <div ref="container" class="h-[400svh] overflow-x-clip mb-30">
      <motion.div :style="{ translateX }" class="sticky top-20 flex items-center">
        <figure class="shrink-0 w-svw h-[75svh]" v-for="img in photos" :key="img.id">
          <img draggable="false" class="mx-auto w-11/12 object-contain object-center h-full" :src="img.url" alt="婚紗照">
        </figure>
      </motion.div>
    </div>

    <motion.h2
      :transition="{ type: 'spring' }"
      :initial="{ y: -50, opacity: 0 }"
      :whileInView="{ y: 0, opacity: 1 }"
      :inViewOptions="{ once: true }"
      class="text-center"
    >
      <router-link to="/photos"
      class="underline text-background decoration-primary decoration-4 hover:underline-offset-[-4px] text-xl">搶先看照片</router-link>
    </motion.h2>
  </section>
  <div class="bg-[url('/wave.svg')] bg-cover bg-center bg-no-repeat py-20 xl:py-30 -scale-100" />

  <section
    class="mb-20 py-20">
      <div class="font-title text-4xl text-center mb-16">
      <motion.h2
        :transition="{ type: 'spring' }"
        :initial="{ y: -50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
      >婚宴資訊</motion.h2>

      <motion.p
        :transition="{ ease: 'easeInOut', duration: .6, delay: .2 }"
        :initial="{ y: 50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="text-xl text-text/70"
      >Information</motion.p>
      </div>
    <div class="flex justify-evenly text-center md:text-lg bg-[url('/bg.jpg')] w-11/12 mx-auto py-20 rounded-4xl max-w-2xl border-3 border-text/20 shadow-lg">
      <div>
        <p>新娘</p>
        <p class="text-lg md:text-2xl mb-12 font-bold">呂若筠</p>
        <p>女方家長</p>
        <p class="text-lg md:text-2xl">呂銘益、楊莉伶</p>
      </div>
      <div>
        <p>新郎</p>
        <p class="text-lg md:text-2xl mb-12 font-bold">葉恩騰</p>
        <p>男方家長</p>
        <p class="text-lg md:text-2xl">葉家豪、蔣曉紅</p>
      </div>
    </div>
  </section>
  <section class="pt-20 mb-20">
    <div class="w-5/6 mx-auto">
      <div class="font-title text-4xl text-center mb-16">
      <motion.h2
        :transition="{ type: 'spring' }"
        :initial="{ y: -50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="text-center"
      >婚宴位置</motion.h2>

      <motion.p
        :transition="{ ease: 'easeInOut', duration: .6, delay: .2 }"
        :initial="{ y: 50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="text-xl text-text/70"
      >Address</motion.p>
      </div>
      <ul class="max-w-80 mx-auto mb-10">
        <li class="flex items-center gap-2 mb-4">
          <div>
            <i class='bx bx-map bx-sm align-middle'></i>
          </div>
          <div>
            <p class="text-text/80">會場</p>
            <p class="text-lg">川門子時尚餐廳</p>
          </div>
        </li>
        <li class="flex items-center gap-2 mb-4">
          <div>
            <i class='bx  bx-address-book bx-sm align-middle' /> 
          </div>
          <div>
            <p class="text-text/80">地址</p>
            <p class="text-lg">桃園市蘆竹區南竹路二段156-2號</p>
          </div>
        </li>
        <li class="flex items-center gap-2 mb-4">
          <div>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M256 96a48 48 0 1 0 0-96a48 48 0 1 0 0 96m-95.2-8c-18.1 0-31.3 12.8-35.6 26.9c-8 26.2-32.4 45.2-61.2 45.2c-10 0-19.4-2.3-27.7-6.3c-7.6-3.7-16.7-3.3-24 1.2c-11.6 7.1-15.4 22.1-8.6 33.9L97.6 352H153L70 207.9c40.5-2.2 75.3-25.9 93.1-59.8c22 26.8 55.4 43.9 92.8 43.9s70.8-17.1 92.8-43.9c17.8 34 52.6 57.7 93.1 59.8L359 352h55.4l93.9-163.1c6.8-11.7 3-26.7-8.6-33.8c-7.3-4.5-16.4-4.9-24-1.2c-8.4 4-17.7 6.3-27.7 6.3c-28.8 0-53.2-19-61.2-45.2c-4.3-14.2-17.5-27-35.6-27c-14.5 0-26.3 8.5-32.4 19.3c-12.4 22-35.9 36.7-62.8 36.7s-50.4-14.8-62.8-36.7C187.1 96.5 175.4 88 160.8 88m-27.6 344h245.6l16.6 32H116.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3h-265c-12 0-22.9 6.7-28.4 17.3l-26.5 51.2c-3 5.8-4.6 12.2-4.6 18.7c0 22.5 18.2 40.8 40.8 40.8h302.5c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7L417 401.3z" />
            </svg>
          </div>
          <div>
            <p class="text-text/80">宴會廳</p>
            <p class="text-lg">水漾聽 1F</p>
          </div>
        </li>
        <li class="flex items-center gap-2">
          <div>
            <i class='bx bxs-phone bx-sm align-middle'></i>
          </div>
          <div>
            <p class="text-text/80">場地電話</p>
            <p class="text-lg">
              <a class="text-text/80 underline" href="tel:032124999">03 2124 999</a>
            </p>
          </div>
        </li>
      </ul>
      <div class="mb-10">
        <iframe class="max-w-[400px] w-full mx-auto aspect-video"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.782681954402!2d121.28191951151508!3d25.041448077719046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681fe77bb58c05%3A0xd840689761d00517!2z5bed6ZaA5a2Q5pmC5bCa6aSQ5buz!5e0!3m2!1szh-TW!2stw!4v1731997994027!5m2!1szh-TW!2stw"
          style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
        <p class="flex justify-center">
          <a class="magic-btn flex" :href="map" target="_blank" rel="noopener noreferrer">
            <i class='bx bx-location-alt-2 align-middle'/> 
            <span>導航到會場</span>
          </a>
        </p>
      </div>
    </div>
  </section>
  <section class="mb-20 bg-text/5 py-20 relative before:absolute before:top-0 before:border-r-50 before:border-b-50 before:border-transparent before:border-b-background before:left-1/2 before:-rotate-45 before:-translate-y-1/2 before:-translate-x-1/2 after:absolute after:bottom-0 after:border-r-50 after:border-b-50 after:border-transparent after:border-b-text/5 after:left-1/2 after:-rotate-45 after:translate-y-1/2 after:-translate-x-1/2">
    <div class="w-5/6 mx-auto">
      <div class="font-title text-4xl text-center mb-16">
        <motion.h2
          :transition="{ type: 'spring' }"
          :initial="{ y: -50, opacity: 0 }"
          :whileInView="{ y: 0, opacity: 1 }"
          :inViewOptions="{ once: true }"
        >婚禮時間</motion.h2>
        <motion.p
          :transition="{ ease: 'easeInOut', duration: .6, delay: .2 }"
          :initial="{ y: 50, opacity: 0 }"
          :whileInView="{ y: 0, opacity: 1 }"
          :inViewOptions="{ once: true }"
          class="text-xl text-text/70"
        >Time</motion.p>
      </div>
      <h3 class="mb-4 text-center text-4xl font-title">2025 . 11 . 15 (六) <span class="before:absolute before:w-full before:h-1/2 before:bottom-0 before:left-0 before:-skew-y-10 before:bg-primary relative inline-block font-bold"><span class="relative">午宴</span></span></h3>
      <div class="text-center mb-10 text-lg">
        <p>11:00 戶外證婚</p>
        <p>12:00 婚禮開始</p>
      </div>
      <div class="text-center bg-background p-10 border-2 border-secondary rounded-3xl w-5/6 mx-auto max-w-sm mb-10">
        <CalenderComponent :date="15" />
      </div>
      <div class="flex justify-center">
        <a title="將這天加入日曆" class="magic-btn flex" :href="encodeURI(calender)" target="_blank" rel="noopener noreferrer">
          <i class='bx  bx-calendar-alt align-middle'/>
          <span>將這天加入日曆</span>
        </a>
      </div>
    </div>
  </section>
  <div class="py-20 mb-20">
    <div class="font-title text-4xl text-center mb-16">
      <motion.h2
        :transition="{ type: 'spring' }"
        :initial="{ y: -50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
      >婚禮表單</motion.h2>
      <motion.p
        :transition="{ ease: 'easeInOut', duration: .6, delay: .2 }"
        :initial="{ y: 50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="text-xl"
      >form</motion.p>
    </div>
    <div class="text-center">
      <div>請所有尚未填寫表單的親朋好友</div>
      <p class="mb-10 text-xl font-bold text-primary">私訊新郎IG帳號獲得表單</p>
      <div class="flex justify-center">

        <a title="私訊獲得表單" class="magic-btn flex" href="https://www.instagram.com/nose_gates/" target="_blank" rel="noopener noreferrer">
          <i class='bxl  bx-instagram bx-sm inline-block align-middle'></i>
          <span>nose_gates</span>
        </a>
      </div>
    </div>
  </div>
  <section class="mb-20">
    <div class="font-title text-4xl text-center mb-16">
      <motion.h2
        :transition="{ type: 'spring' }"
        :initial="{ y: -50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
      >來自親友的祝福</motion.h2>
      <motion.p
        :transition="{ ease: 'easeInOut', duration: .6, delay: .2 }"
        :initial="{ y: 50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="text-xl text-text/70"
      >Best wishes</motion.p>
    </div>
    <div v-if="loading" class="text-center">
      <i class='bx bx-loader bx-spin' />
    </div>
    <ul v-else class="bg-secondary/20 backdrop-blur-3xl p-10 md:p-20 rounded-3xl w-5/6 mx-auto max-w-2xl overflow-clip">
      <motion.li
        v-for="(message, i) in messages"
        :transition="{ type: 'spring' }"
        :initial="{ y: 50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="flex items-end odd:justify-end gap-2 group mb-10 last:mb-0 md:w-5/6 md:odd:ml-auto"
      >
        <div class="shrink-0 group-odd:order-1">
          <p class="text-center">{{ message.name }}</p>
          <figure class="p-0.5 md:p-1 rounded-full w-14 md:w-18 lg:w-20 bg-linear-to-tr from-primary to-accent">
            <img loading="lazy" draggable="false" class="rounded-full object-center object-cover aspect-square" :src="message.avatar" alt="avatar">
          </figure>
        </div>
        <div class="pb-10 mb-auto">
          <p class="bg-background/80 border border-secondary p-3 rounded-2xl text-sm md:text-base lg:text-lg group-odd:rounded-br-none group-even:rounded-bl-none">{{ message.content }}</p>
        </div>
      </motion.li>
    </ul>
  </section>

  <section class="pt-20 mb-20">
    <div class="font-title text-4xl text-center mb-10">
      <motion.h2
        :transition="{ type: 'spring' }"
        :initial="{ y: -50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
      >距離婚禮倒數</motion.h2>
      <motion.p
        :transition="{ ease: 'easeInOut', duration: .6, delay: .2 }"
        :initial="{ y: 50, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :inViewOptions="{ once: true }"
        class="text-xl text-text/70"
      >Countdown</motion.p>
    </div>
    <motion.div
      :transition="{ ease: 'easeInOut', duration: .5, delay: .1 }"
      :initial="{ opacity: 0 }"
      :whileInView="{ opacity: 1 }"
      :inViewOptions="{ once: true }"
      class="py-10"
    >
      <ul class=" flex justify-evenly max-w-sm mx-auto w-11/12">
        <li class="text-center">
          <NumberFlow :value="days" class="text-3xl md:text-5xl text-primary mb-2 font-mono"/>
          <p class="lg:text-xl">天</p>
        </li>
        <li>
          <div class="text-3xl md:text-5xl text-primary font-mono">:</div>
        </li>
        <li class="text-center">
          <NumberFlow :value="hours" class="text-3xl md:text-5xl text-primary mb-2 font-mono"/>
          <p class="lg:text-xl">時</p>
        </li>
        <li>
          <div class="text-3xl md:text-5xl text-primary font-mono">:</div>
        </li>
        <li class="text-center">
          <NumberFlow :value="minutes" class="text-3xl md:text-5xl text-primary mb-2 font-mono"/>
          <p class="lg:text-xl">分</p>
        </li>
        <li>
          <div class="text-3xl md:text-5xl text-primary font-mono">:</div>
        </li>
        <li class="text-center">
          <NumberFlow :value="seconds" class="text-3xl md:text-5xl text-primary mb-2 font-mono"/>
          <p class="lg:text-xl">秒</p>
        </li>
      </ul>
    </motion.div>
  </section>
  <section>
    <div class="w-5/6 mx-auto py-20 max-w-120">
      <div class="font-title text-4xl text-center py-10 relative title-blur before:bg-accent/80 after:bg-secondary/80">
        <div class="relative z-10 font-title text-4xl text-center">
          <motion.h2
            :transition="{ type: 'spring' }"
            :initial="{ y: -50, opacity: 0 }"
            :whileInView="{ y: 0, opacity: 1 }"
            :inViewOptions="{ once: true }"
          >分享邀請函</motion.h2>
          <motion.p
            :transition="{ ease: 'easeInOut', duration: .6, delay: .2 }"
            :initial="{ y: 50, opacity: 0 }"
            :whileInView="{ y: 0, opacity: 1 }"
            :inViewOptions="{ once: true }"
            class="text-xl text-text/70"
          >Share</motion.p>
        </div>
      </div>
      <p class="text-center mb-10">把這個邀請函分享給別人！</p>
      <div class="flex flex-col md:flex-row items-center justify-evenly max-w-3xl mx-auto flex-wrap gap-6 md:gap-3">
        <button v-if="isShare" type="button" class="magic-btn flex" @click="share">
          <i class='bx bx-share'/>
          <span>分享</span>
        </button>
        <a :href="`https://www.facebook.com/sharer.php?u=${encodeURI(SITE_URL)}&hashtag=%23婚禮邀請函`"
          class="magic-btn flex" target="_blank" rel="noopener noreferrer">
          <i class='bxl bx-facebook-circle'/>
          <span>分享</span>
        </a>
        <a :href="`https://line.me/R/share?text=若筠和恩騰婚禮邀請函 ${encodeURI(SITE_URL)}?openExternalBrowser=1`"
          class="magic-btn flex md:hidden" target="_blank" rel="noopener noreferrer">
          <LineIcon class="size-4" />
          <span>分享</span>
        </a>
        <a class="hidden md:flex magic-btn"
          :href="`https://www.threads.net/intent/post?url=${encodeURI(SITE_URL)}&text=若筠與恩騰的婚禮專頁`" target="_blank"
          rel="noopener noreferrer">
          <i class='bxl bx-threads' />
          <span>分享</span>
        </a>

        <a class="md:hidden magic-btn flex"
          :href="`https://www.threads.net/intent/post?url=${encodeURI(SITE_URL)}&text=${encodeURI(SITE_URL)}`"
          target="_blank" rel="noopener noreferrer">
          <i class='bxl bx-threads' />
          <span>分享</span>
        </a>
      </div>
    </div>
  </section>
</template>

<route lang="json">{
  "meta": {
    "title": "婚禮邀請函"
  }
}</route>
