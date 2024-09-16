<template>
<section class="bg-[url('/hero.jpg')] bg-no-repeat bg-cover bg-center rounded-b-[3rem] -mt-12 mb-20">
  <div class=" bg-background/70 min-h-[80svh] text-center grid place-items-center">
    <div>
      <h2 class="font-bold text-4xl/loose">The Day Of</h2>
      <p>THE DETAILS</p>
    </div>
  </div>
</section>
<section class="mb-20">
  <div class="w-5/6 mx-auto">
    <h1 class="text-2xl/loose md:text-4xl/loose text-center">Countdown</h1>
    <p class="text-center">距離</p>
    <div>
      <img loading="lazy" draggable="false" class="max-w-96 aspect-square mx-auto" src="../assets/svg/planner.svg" alt="calendar">
    </div>
    <div class="py-10">
      <ul class=" flex justify-evenly max-w-2xl mx-auto">
        <li class="text-center">
          <div class="text-3xl md:text-5xl font-semibold text-accent mb-2">{{ days }}</div>
          <p class="font-light">Day(s)</p>
        </li>
        <li>
          <div class=" text-2xl md:text-4xl text-accent font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class="text-3xl md:text-5xl font-semibold text-accent mb-2">{{ hours }}</div>
          <p class="font-light">Hour(s)</p>
        </li>
        <li>
          <div class=" text-2xl md:text-4xl text-accent font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class="text-3xl md:text-5xl font-semibold text-accent mb-2">{{ minutes }}</div>
          <p class="font-light">Minute(s)</p>
        </li>
        <li>
          <div class=" text-2xl md:text-4xl text-accent font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class="text-3xl md:text-5xl font-semibold text-accent mb-2">{{ seconds }}</div>
          <p class="font-light">Second(s)</p>
        </li>
      </ul>
    </div>
  </div>
</section>
<section class="mb-20">
  <h2 class="text-2xl/loose md:text-4xl/loose text-center mb-20">Photos</h2>
  <div class="w-11/12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto photo-section relative mb-10">
    <figure v-for="photo in photos" class="shadow z-10 transition-transform rounded-3xl overflow-hidden odd:-translate-y-8 even:translate-y-8 md:hover:scale-110">
      <img loading="lazy" draggable="false" class="aspect-[9/16] object-cover object-center" :src="photo.url" alt="photo">
    </figure>
  </div>
  <div class=" text-center py-20">
    <router-link to="/photos" class=" underline decoration-primary decoration-4 hover:underline-offset-[-4px]">搶先看照片</router-link>
  </div>
</section>
<section class="mb-20">
  <div>
    <h2 class="text-2xl/loose md:text-4xl/loose text-center mb-10">祝福</h2>
    <ul class="bg-secondary/50 p-10 md:p-20 rounded-3xl w-5/6 mx-auto max-w-3xl">
      <li v-for="(avatar, i) in avatars" class="flex items-end odd:justify-end gap-2 group mb-10 last:mb-0 md:w-5/6 md:odd:ml-auto">
        <div class="flex-shrink-0 group-odd:order-1">
          <p class="text-center">羅友人</p>
          <figure class="p-1 rounded-full w-20 bg-gradient-to-tr from-primary to-accent">
            <img loading="lazy" draggable="false" class="rounded-full object-center object-cover" :src="`https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_${i + 1}.png`" alt="avatar">
          </figure>
        </div>
        <div class="pb-10 mb-auto">
          <p class="bg-background shadow p-3 rounded-2xl text-sm md:text-base group-odd:rounded-br-none group-even:rounded-bl-none shadow-accent/30">{{ avatar.text }}</p>
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
    <a :href="calender" target="_blank" rel="noopener noreferrer" class=" inline-block p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80">
      <CalenderIcon/>
    </a>
  </div>
  </div>
</section>
<section class="mb-20">
  <div class="w-5/6 mx-auto">
  <h2 class="text-2xl/loose md:text-4xl/loose text-center mb-10">地點</h2>
  <div class="">
    <iframe class=" max-w-[400px] w-full mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8136350223413!2d121.54646475183712!3d25.04039790588343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd0af5c2005%3A0xf9c26b5bf5de8f0a!2z6YGg5p2xU09HTyDlj7DljJflv6DlrZ3ppKg!5e0!3m2!1szh-TW!2stw!4v1725001742776!5m2!1szh-TW!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </div>
</section>
<section>
  <div class="w-5/6 mx-auto">
    <h2 class="text-2xl/loose md:text-4xl/loose text-center">分享邀請函</h2>
    <p class="text-center mb-10">把這些資訊分享給可能需要知道的人吧！</p>
    <div class=" flex items-center justify-evenly max-w-3xl mx-auto">
      <button v-if="isShare" type="button" class="p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80" @click="share">
        <ShareIcon/>
      </button>
      <a :href="`https://www.facebook.com/sharer.php?u=${ encodeURI(SITE_URL) }`" class="p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80" target="_blank" rel="noopener noreferrer">
        <FacebookIcon/>
      </a>
      <a :href="`https://line.me/R/share?text=${ encodeURI(SITE_URL) + '?openExternalBrowser=1' }`" class="p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80" target="_blank" rel="noopener noreferrer">
        <LineIcon/>
      </a>
      <a class="hidden md:block p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80" :href="`https://www.threads.net/intent/post?url=${ encodeURI(SITE_URL) }&text=若筠與恩騰的婚禮專頁`" target="_blank" rel="noopener noreferrer">
        <ThreadsIcon/>
      </a>
      <a class="md:hidden p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80" :href="`https://www.threads.net/intent/post?url=${ encodeURI(SITE_URL) }&text=${ encodeURI(SITE_URL) }`" target="_blank" rel="noopener noreferrer">
        <ThreadsIcon/>
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

const SITE_URL = 'https://sandra.nosegates.com'

const calender = 'https://www.google.com/calendar/render?action=TEMPLATE&text=OOO%E5%A9%9A%E7%A6%AE&details=%E8%A8%98%E5%BE%97%E5%8F%83%E5%8A%A0OOO%E5%A9%9A%E7%A6%AE&location=%E9%81%A0%E6%9D%B1SOGO%20%E5%8F%B0%E5%8C%97%E5%BF%A0%E5%AD%9D%E9%A4%A8&dates=20241212T033000.000Z%2F20241212T060000.000Z'

const {
  days,
  minutes,
  seconds,
  hours
} = useCountdown('2024-12-31')

const photos = [
  {
    id: '1',
    url: `/1.avif`
  },
  {
    id: '2',
    url: `/2.avif`
  },
  {
    id: '3',
    url: '/3.avif'
  },
  {
    id: '4',
    url: '/4.jpg'
  }
]

const avatars = [
  { text: '永浴愛河永浴愛河永浴愛河永浴愛河' },
  { text: '永浴愛河永浴愛河永浴愛河永浴永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴永浴愛河永浴愛河永浴愛河永浴愛河愛河永浴愛河愛河' },
  { text: '永浴愛河永浴愛河永浴愛河' },
  { text: '永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河' },
  { text: '永浴愛河' },
  { text: '永浴愛河永浴愛河永浴愛河永浴愛河' },
  { text: '永浴愛河' },
  { text: '永浴愛河' },
  { text: '永浴愛河' },
  { text: '永浴愛河永浴愛河永永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河浴愛河永浴愛河永浴愛河' }
]

const {
  share,
  isShare
} = useShare({
  title: '若筠&恩騰',
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