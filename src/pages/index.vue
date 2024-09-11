<template>
<section class="bg-[url('/hero.jpg')] bg-no-repeat bg-cover bg-center rounded-b-[3rem]">
  <div class=" bg-background/70 min-h-[80svh] text-center grid place-items-center">
    <div>
      <h2 class=" text-4xl/loose">The Day Of</h2>
      <p>THE DETAILS</p>
    </div>
  </div>
</section>
<header class="backdrop-blur bg-background/50 sticky top-0 z-20">
  <div class=" w-5/6 mx-auto py-2 flex">
    <router-link class="p-3 rounded-xl hover:bg-text/10 flex items-center gap-2" to="/">
      <img class="w-8"src="../assets/logo.png" alt="">
      <span>若筠&恩騰</span>
    </router-link>
  </div>
</header>
<section class="py-20">
  <div class="w-5/6 mx-auto">
    <h1 class="text-5xl/loose text-center">Countdown</h1>
    <p class="text-center">距離</p>
    <div>
      <img class=" max-w-96 aspect-square mx-auto" src="../assets/svg/calendar.svg" alt="calendar">
    </div>
    <div class="py-10">
      <ul class=" flex justify-evenly max-w-2xl mx-auto">
        <li class="text-center">
          <div class="text-5xl font-semibold text-accent mb-2">{{ days }}</div>
          <p class="font-light">Day(s)</p>
        </li>
        <li>
          <div class="text-4xl text-accent font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class=" text-5xl font-semibold text-accent mb-2">{{ hours }}</div>
          <p class="font-light">Hour(s)</p>
        </li>
        <li>
          <div class="text-4xl text-accent font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class=" text-5xl font-semibold text-accent mb-2">{{ minutes }}</div>
          <p class="font-light">Minute(s)</p>
        </li>
        <li>
          <div class="text-4xl text-accent font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class=" text-5xl font-semibold text-accent mb-2">{{ seconds }}</div>
          <p class="font-light">Second(s)</p>
        </li>
      </ul>
    </div>
  </div>
</section>
<section class="mb-10">
  <h2 class="text-5xl/loose text-center mb-20">Photos</h2>
  <div class=" w-11/12 grid grid-cols-4 gap-1 max-w-4xl mx-auto photo-section relative mb-10">
    <figure class="shadow z-10 transition-transform cursor-zoom-in photo rounded-3xl overflow-hidden" v-for="photo in photos">
      <img draggable="false" class="aspect-[9/16] object-cover object-center" :src="photo" alt="photo">
    </figure>
  </div>
  <div class=" text-center py-20">
    <router-link to="/photos" class=" underline decoration-primary decoration-4 hover:underline-offset-[-4px]">搶先看照片</router-link>
  </div>
</section>
<section class="mb-10">
  <div class="w-5/6 mx-auto max-w-3xl p-10 rounded-3xl bg-accent/10">
    <h2 class="text-5xl/loose text-center mb-20">祝福</h2>
    <ul>
      <li v-for="(avatar, i) in avatars" class="flex items-end odd:justify-end gap-2 group mb-10 last:mb-0">
        <div class="flex-shrink-0 group-odd:order-1">
          <p class="text-center">羅友人</p>
          <figure class="p-1 rounded-full w-20 bg-gradient-to-tr from-primary to-accent">
            <img loading="lazy" draggable="false" class="rounded-full" :src="`https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_${i + 1}.png`" alt="avatar">
          </figure>
        </div>
        <div class="pb-10 mb-auto">
          <p class=" bg-white shadow p-3 rounded-2xl text-xl group-odd:rounded-br-none group-even:rounded-bl-none shadow-text/30">{{ avatar.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</section>
<section class=" mb-10">
  <div class="w-5/6 mx-auto">
  <h2 class="text-5xl/loose text-center">When & Where</h2>
  <div>
    <img class=" max-w-96 aspect-square mx-auto" src="../assets/svg/wedding.svg" alt="wedding">
  </div>
  <div>
    <a :href="calender" target="_blank" rel="noopener noreferrer" class=" inline-block p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80">
      <CalenderIcon/>
    </a>
  </div>
  </div>
</section>
<section class=" mb-10">
  <div class="w-5/6 mx-auto">
  <h2 class="text-center text-3xl/loose">地點</h2>
  <div class="">
    <iframe class=" max-w-[400px] w-full mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8136350223413!2d121.54646475183712!3d25.04039790588343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd0af5c2005%3A0xf9c26b5bf5de8f0a!2z6YGg5p2xU09HTyDlj7DljJflv6DlrZ3ppKg!5e0!3m2!1szh-TW!2stw!4v1725001742776!5m2!1szh-TW!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </div>
</section>
<section class="bg-white p-10 rounded-2xl mb-10">
  <div class="w-5/6 mx-auto">
    <h2 class="text-center text-3xl/loose">分享邀請函</h2>
    <p class="text-center mb-10">把這些資訊分享給可能需要知道的人吧！</p>
    <div class=" flex items-center justify-evenly">
      <button type="button" class="p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80">
        <ShareIcon/>
      </button>
      <a href="https://www.facebook.com/sharer.php?u=https://sandra.nosegates.com" class="p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80" target="_blank" rel="noopener noreferrer">
        <FacebookIcon/>
      </a>
      <a href="https://line.me/R/share?text=https://sandra.nosegates.com?openExternalBrowser=1" class="p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80" target="_blank" rel="noopener noreferrer">
        <LineIcon/>
      </a>
      <a href="https://www.threads.net/intent/post?url=https://sandra.nosegates.com&text=https://sandra.nosegates.com" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-primary/50 shadow hover:bg-primary/80">
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
const calender = 'https://www.google.com/calendar/render?action=TEMPLATE&text=OOO%E5%A9%9A%E7%A6%AE&details=%E8%A8%98%E5%BE%97%E5%8F%83%E5%8A%A0OOO%E5%A9%9A%E7%A6%AE&location=%E9%81%A0%E6%9D%B1SOGO%20%E5%8F%B0%E5%8C%97%E5%BF%A0%E5%AD%9D%E9%A4%A8&dates=20241212T033000.000Z%2F20241212T060000.000Z'

const {
  days,
  minutes,
  seconds,
  hours
} = useCountdown('2024-12-31')

const photos = [`/1.avif`, `/2.avif`, '/3.avif', '/4.jpg']

const avatars = [
  { text: '永浴愛河永浴愛河永浴愛河永浴愛河' },
  { text: '永浴愛河永浴愛河永浴愛河永浴永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴永浴愛河永浴愛河永浴愛河永浴愛河愛河永浴愛河愛河' },
  { text: '永浴愛河永浴愛河永浴愛河' },
  { text: '永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河' },
  { text: '永浴愛河' },
  { text: '永浴愛河永浴愛河永浴愛河永浴愛河' },
  { text: '永浴愛河' },
  { text: '永浴愛河' },
  { text: '永浴愛河永浴愛河永永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河永浴愛河浴愛河永浴愛河永浴愛河' }
]
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
  left: 10%;
  top: -20%;
  background-color: rgb(var(--accent));
}
.photo-section::after {
  right: 10%;
  bottom: -20%;
  background-color: rgb(var(--primary));
  z-index: 1;
}
.photo:nth-child(1) {
  transform: translate(0, -1.5rem) rotate(5deg);
}
.photo:nth-child(2) {
  transform: translate(0, 0.5rem) rotate(5deg);
}
.photo:nth-child(3) {
  transform: translate(0, -0.5rem) rotate(5deg);
}
.photo:nth-child(4) {
  transform: translate(0, 1.5rem) rotate(5deg);
}
@media (width >= 768px) {
  .photo:nth-child(1) {
    transform: translate(0, 1.5rem);
  }
  .photo:nth-child(2) {
    transform: translate(0, -1rem);
  }
  .photo:nth-child(3) {
    transform: translate(0, 2rem);
  }
  .photo:nth-child(4) {
    transform: translate(0, -1.5rem);
  }
}
</style>