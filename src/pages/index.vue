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
    <p class="text-6xl/relaxed">若筠&恩騰</p>
    <p>我們結婚啦</p>
    <p>Welcome to our wedding.</p>
  </div>
  <p class="text-center">愛讓我們相遇，承諾讓我們攜手共進</p>
  <div>
    <div class="font-title text-3xl text-center py-10 text-text/80">
      <h2>婚禮表單</h2>
      <p>form</p>
    </div>
    <div class="text-center">
      <div>願意參與我們婚禮的親朋好友們請一定要填寫表單</div>
    </div>
  </div>
  <figure class="py-10 max-w-3xl mx-auto">
    <img loading="lazy" draggable="false"class="object-contain object-center shadow-xl w-full" src="https://cdn.jsdelivr.net/gh/connectshark/wedding-photos@latest/1x/DSC00186.webp" alt="">
  </figure>
  <div class="py-20 text-center">
    <p class=" text-2xl/loose">2019 - 2025</p>
    <p>愛情的旅程，感謝有你們和妳們相伴</p>
  </div>
  <section class="bg-accent/20 rounded-4xl py-20">
    <div class="sm:gap-3 max-w-5xl mb-10 sm:snap-none sm:py-10 snap-x w-5/6 mx-auto overflow-x-auto flex gap-6 rounded *:shrink-0 *:snap-center *:rounded *:overflow-clip *:shadow">
      <figure class="w-3/5 sm:w-auto sm:shrink sm:odd:translate-y-5 sm:even:-translate-y-5" v-for="photo in photos">
        <img loading="lazy" draggable="false" class="w-full object-contain object-center" :src="photo.url" alt="photo">
      </figure>
    </div>
    <div class="text-center">
      <router-link to="/photos" class="underline decoration-primary decoration-4 hover:underline-offset-[-4px] text-lg">搶先看照片</router-link>
    </div>
  </section>
  <section class="mb-20">
    <div class="w-5/6 mx-auto">
      <div class="font-title text-3xl text-center py-10 text-text/80">
        <h2>婚禮位置</h2>
        <p>Address</p>
      </div>
      <ul class="max-w-80 mx-auto mb-10">
        <li class="flex items-center gap-2 mb-4">
          <div>
            <i class='bx bxs-map bx-sm align-middle'></i>
          </div>
          <div>
            <p class="text-text/80">會場</p>
            <p class="text-lg">川門子時尚餐廳</p>
          </div>
        </li>
        <li class="flex items-center gap-2 mb-4">
          <div>
            <i class='bx bx-map-alt bx-sm align-middle'></i>
          </div>
          <div>
            <p class="text-text/80">地址</p>
            <p class="text-lg">桃園市蘆竹區南竹路二段156-2號</p>
          </div>
        </li>
        <li class="flex items-center gap-2 mb-4">
          <div>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M256 96a48 48 0 1 0 0-96a48 48 0 1 0 0 96m-95.2-8c-18.1 0-31.3 12.8-35.6 26.9c-8 26.2-32.4 45.2-61.2 45.2c-10 0-19.4-2.3-27.7-6.3c-7.6-3.7-16.7-3.3-24 1.2c-11.6 7.1-15.4 22.1-8.6 33.9L97.6 352H153L70 207.9c40.5-2.2 75.3-25.9 93.1-59.8c22 26.8 55.4 43.9 92.8 43.9s70.8-17.1 92.8-43.9c17.8 34 52.6 57.7 93.1 59.8L359 352h55.4l93.9-163.1c6.8-11.7 3-26.7-8.6-33.8c-7.3-4.5-16.4-4.9-24-1.2c-8.4 4-17.7 6.3-27.7 6.3c-28.8 0-53.2-19-61.2-45.2c-4.3-14.2-17.5-27-35.6-27c-14.5 0-26.3 8.5-32.4 19.3c-12.4 22-35.9 36.7-62.8 36.7s-50.4-14.8-62.8-36.7C187.1 96.5 175.4 88 160.8 88m-27.6 344h245.6l16.6 32H116.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3h-265c-12 0-22.9 6.7-28.4 17.3l-26.5 51.2c-3 5.8-4.6 12.2-4.6 18.7c0 22.5 18.2 40.8 40.8 40.8h302.5c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7L417 401.3z"/></svg>
          </div>
          <div>
            <p class="text-text/80">宴會廳</p>
            <p class="text-lg">水漾聽</p>
          </div>
        </li>
        <li class="flex items-center gap-2">
          <div>
            <i class='bx bxs-phone bx-sm align-middle'></i>
          </div>
          <div>
            <p class="text-text/80">市話</p>
            <p class="text-lg">
              <a class="text-text/80" href="tel:032124999">03 2124 999</a>
            </p>
          </div>
        </li>
      </ul>
      <div class="mb-10">
        <iframe class="max-w-[400px] w-full mx-auto aspect-video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.782681954402!2d121.28191951151508!3d25.041448077719046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681fe77bb58c05%3A0xd840689761d00517!2z5bed6ZaA5a2Q5pmC5bCa6aSQ5buz!5e0!3m2!1szh-TW!2stw!4v1731997994027!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
        <p class="flex justify-center">
          <a class="flex items-center gap-2 border border-text text-text rounded-full py-1 px-3 hover:bg-text hover:text-background transition-colors" :href="map" target="_blank" rel="noopener noreferrer">
            <i class='bx bxs-navigation' />
            <span>導航到會場</span>
          </a>
        </p>
      </div>
    </div>
  </section>
  <section class="mb-20">
    <div class="w-5/6 mx-auto">
      <div class="font-title text-3xl text-center py-10 text-text/80">
        <h2>婚禮時間</h2>
        <p>Time</p>
      </div>
      <h3 class="mb-10 text-center text-4xl font-title">2025 . 11 . 15 (六) <span v-motion-pop-visible-once :duration="500" :delay="200" class="before:absolute before:w-full before:h-1/2 before:bottom-0 before:left-0 before:-skew-y-10 before:bg-primary relative inline-block"><span class="relative">午宴</span></span></h3>
      <div class="text-center py-10 bg-white p-10 border-2 border-secondary rounded-3xl w-5/6 mx-auto max-w-md mb-10">
        <CalenderComponent :date="15"/>
      </div>
      <div class="flex justify-center">
        <a title="點擊將這天加入日曆" class="flex items-center gap-2 cursor-pointer border border-text text-text rounded-full py-1 px-3 hover:bg-text hover:text-background transition-colors" :href="encodeURI(calender)" target="_blank" rel="noopener noreferrer">
          <CalenderIcon/>
          <span>點擊將這天加入日曆</span>
        </a>
      </div>
    </div>
  </section>
  <section class="mb-20">
    <div>
      <div class="font-title text-3xl text-center py-10 text-text/80">
        <h2>來自親友的祝福</h2>
        <p>Best wishes</p>
      </div>
      <div v-if="loading" class=" text-center">
        <i class='bx bx-loader bx-spin' />
      </div>
      <ul v-else class="bg-secondary/20 p-10 md:p-20 rounded-3xl w-5/6 mx-auto max-w-xl overflow-clip">
        <li
          v-for="(page, i) in data.results"
          v-motion-slide-visible-once-bottom
          :delay="100"
          :duration="500"
          class="flex items-end odd:justify-end gap-2 group mb-10 last:mb-0 md:w-5/6 md:odd:ml-auto">
          <div class="shrink-0 group-odd:order-1">
            <p class="text-center">{{ page.properties.name.title[0].plain_text }}</p>
            <figure class="p-1 rounded-full w-20 bg-linear-to-tr from-primary to-accent">
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
  <section class="mb-20 overflow-clip">
    <div class="font-title text-3xl text-center py-10 text-text/80">
      <h2>距離婚禮剩下時間</h2>
      <p>Countdown</p>
    </div>
    <div
      v-motion-pop-visible-once
      :delay="100"
      class="py-10">
      <ul class=" flex justify-evenly max-w-lg mx-auto w-11/12">
        <li class="text-center">
          <div class="text-3xl md:text-5xl font-semibold text-primary mb-2">{{ days }}</div>
          <p>天</p>
        </li>
        <li>
          <div class=" text-2xl md:text-4xl text-primary font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class="text-3xl md:text-5xl font-semibold text-primary mb-2">{{ hours }}</div>
          <p>時</p>
        </li>
        <li>
          <div class=" text-2xl md:text-4xl text-primary font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class="text-3xl md:text-5xl font-semibold text-primary mb-2">{{ minutes }}</div>
          <p>分</p>
        </li>
        <li>
          <div class=" text-2xl md:text-4xl text-primary font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class="text-3xl md:text-5xl font-semibold text-primary mb-2">{{ seconds }}</div>
          <p>秒</p>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <div class="w-5/6 mx-auto py-20 max-w-120">
    <div class="font-title text-3xl text-text/80 text-center py-10 relative title-blur before:bg-accent/80 after:bg-secondary/80">
      <div class="relative">
        <h2>分享婚禮邀請函</h2>
        <p>Share</p>
      </div>
    </div>
      <p class="text-center mb-10">把這些資訊分享給可能需要知道的人吧！</p>
      <div class="flex items-center justify-evenly max-w-3xl mx-auto flex-wrap gap-3">
        <button
          v-if="isShare" type="button"
          class="flex items-center gap-2 cursor-pointer border border-text text-text rounded-full py-1 px-3 hover:bg-text hover:text-background transition-colors"
          @click="share"><ShareIcon class="size-4" />
          <span>分享</span>
        </button>
        <a :href="`https://www.facebook.com/sharer.php?u=${encodeURI(SITE_URL)}&hashtag=%23婚禮邀請函`"
          class="flex items-center gap-2 border border-text text-text rounded-full py-1 px-3 hover:bg-text hover:text-background transition-colors"
          target="_blank" rel="noopener noreferrer">
          <FacebookIcon class="size-4" />
          <span>分享</span>
        </a>
        <a :href="`https://line.me/R/share?text=若筠和恩騰婚禮邀請函 ${ encodeURI(SITE_URL) }?openExternalBrowser=1`"
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
import CalenderComponent from '../components/calender.vue'
import useFetch from '../composables/useFetch'

const SITE_URL = 'https://sandra.nosegates.com'

const calender = 'https://www.google.com/calendar/render?action=TEMPLATE&text=若筠與恩騰婚宴❤️&dates=20251115T040000Z/20251115T070000Z&location=川門子時尚餐廳&details=誠摯的邀請您一同參與我們盛大的婚禮，分享幸福的時光&destination_place_id=ChIJBYy1e-cfaDQRFwXQYZdoQNg'

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
} = useFetch('/threads.json', {})

const VITE_SITE_NAME = import.meta.env.VITE_SITE_NAME
const {
  share,
  isShare
} = useShare({
  title: VITE_SITE_NAME,
  url: SITE_URL
})
</script>

<route lang="json">
{
  "meta": {
    "title": "婚禮邀請函"
  }
}
</route>
