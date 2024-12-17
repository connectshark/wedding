<template>
  <div class="text-right w-11/12 mx-auto max-w-3xl">
    <p>邀請對我們而言重要的你</p>
    <p>見證一場儀式，不算盛大，卻足夠用心</p>
  </div>
  <figure class="py-10 max-w-3xl mx-auto">
    <img loading="lazy" draggable="false"class="object-cover object-center shadow-xl w-full" src="https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/DSC00174.webp" alt="首圖">
  </figure>
  <div class="font-title mb-10 text-3xl text-text/80 text-center">
    <h1>婚禮邀請函</h1>
    <p class="text-6xl/relaxed">若筠 & 恩騰</p>
    <p>我們結婚啦</p>
    <p>Welcome to our wedding.</p>
  </div>
  <p class="text-center">愛讓我們相遇，承諾讓我們攜手共進</p>
  <div class="py-10">
    <SoundComponents/>
  </div>
  <figure class="py-10 max-w-3xl mx-auto">
    <img loading="lazy" draggable="false"class="object-contain object-center shadow-xl w-full" src="https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/DSC00186.webp" alt="">
  </figure>
  <div class="pt-20 pb-40 text-center">
    <p>2019 - 2025</p>
    <p>愛情的旅程，感謝有你相伴</p>
  </div>
  <section>
    <div class="w-11/12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto photo-section relative mb-10 *:shadow *:z-10 *:transition-transform *:overflow-hidden">
      <figure v-for="photo in photos" class="odd:-translate-y-8 even:translate-y-8 md:hover:scale-110">
        <img loading="lazy" draggable="false" class="aspect-[9/16] h-full w-full object-cover object-center rounded-md" :src="photo.url" alt="photo">
      </figure>
    </div>
    <div class=" text-center py-20">
      <router-link to="/photos" class="underline decoration-primary decoration-4 hover:underline-offset-[-4px]">搶先看照片</router-link>
    </div>
  </section>
  <section class="mb-20">
    <div class="w-5/6 mx-auto">
      <div class="font-title text-3xl text-center">
        <h2>婚禮時間</h2>
        <p>Time</p>
      </div>
      <div>
        <img loading="lazy" draggable="false" class="max-w-96 aspect-square mx-auto" src="../assets/svg/planner.svg" alt="calendar">
      </div>
      <div class="py-10">
        <ul class=" flex justify-evenly max-w-2xl mx-auto">
          <li class="text-center">
            <div class="text-3xl md:text-5xl font-semibold text-primary mb-2">{{ days }}</div>
            <p>Day(s)</p>
          </li>
          <li>
            <div class=" text-2xl md:text-4xl text-primary font-semibold">:</div>
          </li>
          <li class="text-center">
            <div class="text-3xl md:text-5xl font-semibold text-primary mb-2">{{ hours }}</div>
            <p>Hour(s)</p>
          </li>
          <li>
            <div class=" text-2xl md:text-4xl text-primary font-semibold">:</div>
          </li>
          <li class="text-center">
            <div class="text-3xl md:text-5xl font-semibold text-primary mb-2">{{ minutes }}</div>
            <p>Minute(s)</p>
          </li>
          <li>
            <div class=" text-2xl md:text-4xl text-primary font-semibold">:</div>
          </li>
          <li class="text-center">
            <div class="text-3xl md:text-5xl font-semibold text-primary mb-2">{{ seconds }}</div>
            <p>Second(s)</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="mb-20">
    <div class="w-5/6 mx-auto">
      <div class="font-title text-3xl text-center">
        <h2>婚禮地址</h2>
        <p>Address</p>
      </div>
      <div class="mb-10">
        <iframe class="max-w-[400px] w-full mx-auto aspect-video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.782681954402!2d121.28191951151508!3d25.041448077719046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681fe77bb58c05%3A0xd840689761d00517!2z5bed6ZaA5a2Q5pmC5bCa6aSQ5buz!5e0!3m2!1szh-TW!2stw!4v1731997994027!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
        <p class="flex justify-center">
          <a class="flex items-center gap-2 border border-text text-text rounded-full py-1 px-3 active:bg-text active:text-background transition-colors" :href="map" target="_blank" rel="noopener noreferrer">
            <span>導航到會場</span>
            <i class='bx bxs-navigation'></i>
          </a>
        </p>
      </div>
    </div>
  </section>
  <section class="mb-20">
    <div>
      <h2 class="font-title text-center text-3xl/loose">親友的祝福</h2>
      <div v-if="loading"></div>
      <ul v-else class="bg-secondary/20 p-10 md:p-20 rounded-3xl w-5/6 mx-auto max-w-xl">
        <li v-for="(page, i) in data.results"
          class="flex items-end odd:justify-end gap-2 group mb-10 last:mb-0 md:w-5/6 md:odd:ml-auto">
          <div class="flex-shrink-0 group-odd:order-1">
            <p class="text-center">{{ page.properties.name.title[0].plain_text }}</p>
            <figure class="p-1 rounded-full w-20 bg-gradient-to-tr from-primary to-accent">
              <img loading="lazy" draggable="false" class="rounded-full object-center object-cover aspect-square" :src="`https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_${i + 1}.png`" alt="avatar">
            </figure>
          </div>
          <div class="pb-10 mb-auto">
            <p class="bg-background/80 border border-secondary p-3 rounded-2xl text-sm md:text-base group-odd:rounded-br-none group-even:rounded-bl-none">{{ page.properties.content.rich_text[0].plain_text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="mb-20">
    <div class="w-5/6 mx-auto">
      <h2 class="text-2xl/loose md:text-4xl/loose text-center">When & Where</h2>
      <div>
        <img loading="lazy" draggable="false" class=" max-w-96 aspect-square mx-auto" src="../assets/svg/wedding.svg" alt="wedding">
      </div>
      <div class=" text-center">
        <a :href="calender" target="_blank" rel="noopener noreferrer"
          class=" inline-block p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80">
          <CalenderIcon />
        </a>
      </div>
    </div>
  </section>
  <section>
    <div class="w-5/6 mx-auto">
      <h2 class="text-2xl/loose md:text-4xl/loose text-center">分享邀請函</h2>
      <p class="text-center mb-10">把這些資訊分享給可能需要知道的人吧！</p>
      <div class=" flex items-center justify-evenly max-w-3xl mx-auto">
        <button v-if="isShare" type="button"
          class="flex items-center gap-2 border border-text text-text rounded-full py-1 px-3 hover:bg-text hover:text-background transition-colors" @click="share">
          <ShareIcon class="size-4" />
          <span>分享</span>
        </button>
        <a :href="`https://www.facebook.com/sharer.php?u=${encodeURI(SITE_URL)}&hashtag=%23婚禮邀請函`"
          class="flex items-center gap-2 border border-text text-text rounded-full py-1 px-3 hover:bg-text hover:text-background transition-colors"
          target="_blank" rel="noopener noreferrer">
          <FacebookIcon class="size-4" />
          <span>分享</span>
        </a>
        <a :href="`https://line.me/R/share?text=若筠和恩騰婚禮邀請函 ${encodeURI(SITE_URL) + '?openExternalBrowser=1'}`"
          class="flex items-center gap-2 border border-text text-text rounded-full py-1 px-3 hover:bg-text hover:text-background transition-colors md:hidden"
          target="_blank" rel="noopener noreferrer">
          <LineIcon class="size-4" />
          <span>分享</span>
        </a>
        <a class="hidden md:flex items-center gap-2 border border-text text-text rounded-full py-1 px-3 hover:bg-text hover:text-background transition-colors"
          :href="`https://www.threads.net/intent/post?url=${encodeURI(SITE_URL)}&text=若筠與恩騰的婚禮專頁`" target="_blank"
          rel="noopener noreferrer">
          <ThreadsIcon class="size-4" />
          <span>分享</span>
        </a>
        <a class="md:hidden flex items-center gap-2 border border-text text-text rounded-full py-1 px-3 hover:bg-text hover:text-background transition-colors"
          :href="`https://www.threads.net/intent/post?url=${encodeURI(SITE_URL)}&text=${encodeURI(SITE_URL)}`"
          target="_blank" rel="noopener noreferrer">
          <ThreadsIcon class="size-4" />
          <span>分享</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import useCountdown from '../composables/useCountdown'
import ThreadsIcon from '../components/icons/ThreadsIcon.vue'
import LineIcon from '../components/icons/LineIcon.vue'
import FacebookIcon from '../components/icons/FacebookIcon.vue'
import ShareIcon from '../components/icons/ShareIcon.vue'
import CalenderIcon from '../components/icons/CalenderIcon.vue'
import useShare from '../composables/useShare'
import SoundComponents from '../components/SoundComponents.vue'
import useFetch from '../composables/useFetch'

const SITE_URL = 'https://sandra.nosegates.com'

const calender = 'https://www.google.com/calendar/render?action=TEMPLATE&text=OOO%E5%A9%9A%E7%A6%AE&details=%E8%A8%98%E5%BE%97%E5%8F%83%E5%8A%A0OOO%E5%A9%9A%E7%A6%AE&location=%E9%81%A0%E6%9D%B1SOGO%20%E5%8F%B0%E5%8C%97%E5%BF%A0%E5%AD%9D%E9%A4%A8&dates=20241212T033000.000Z%2F20241212T060000.000Z'

const map = `https://www.google.com/maps/dir/?api=1&destination_place_id=ChIJBYy1e-cfaDQRFwXQYZdoQNg&travelmode=driving&destination=川門子`

const {
  days,
  minutes,
  seconds,
  hours
} = useCountdown('2025-11-15')

const photos = [
  {
    id: '1',
    url: `https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/DSC00205.webp`
  },
  {
    id: '2',
    url: `https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/DSC00296.webp`
  },
  {
    id: '3',
    url: 'https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/DSC00261.webp'
  },
  {
    id: '4',
    url: 'https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/DSC00209.webp'
  }
]

const {
  data,
  loading
} = useFetch('http://localhost:3000/notion', {})

const {
  share,
  isShare
} = useShare({
  title: '若筠&恩騰婚禮邀請函',
  url: SITE_URL
})
</script>

<style scoped>
.photo-section::before,
.photo-section::after {
  --size: 40%;
  content: '';
  position: absolute;
  width: var(--size);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  filter: blur(2.5rem);

}

.photo-section::before {
  right: 10%;
  top: 0%;
  background-color: rgb(var(--accent));
}

.photo-section::after {
  left: 10%;
  bottom: 0%;
  background-color: rgb(var(--primary));
  z-index: 1;
}
</style>