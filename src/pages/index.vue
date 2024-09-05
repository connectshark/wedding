<template>
<div class="backdrop-blur bg-background/50 sticky top-0">
  <div class=" w-5/6 mx-auto py-8">
    <router-link class="p-3 rounded-xl hover:bg-text/10" to="/">若筠&恩騰</router-link>
  </div>
</div>
<section class="py-20">
  <div class="w-5/6 mx-auto">
    <h1 class="text-5xl/loose text-center">Countdown</h1>
    <p class="text-center">距離</p>
    <div class="py-10">
      <ul class=" flex justify-evenly max-w-2xl mx-auto">
        <li class="text-center">
          <div class="text-5xl font-semibold text-accent mb-2">{{ countdown.days }}</div>
          <p class="font-light">Day(s)</p>
        </li>
        <li>
          <div class="text-4xl text-accent font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class=" text-5xl font-semibold text-accent mb-2">{{ countdown.hours }}</div>
          <p class="font-light">Hour(s)</p>
        </li>
        <li>
          <div class="text-4xl text-accent font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class=" text-5xl font-semibold text-accent mb-2">{{ countdown.minutes }}</div>
          <p class="font-light">Minute(s)</p>
        </li>
        <li>
          <div class="text-4xl text-accent font-semibold">:</div>
        </li>
        <li class="text-center">
          <div class=" text-5xl font-semibold text-accent mb-2">{{ countdown.seconds }}</div>
          <p class="font-light">Second(s)</p>
        </li>
      </ul>
    </div>
  </div>
</section>
<section class=" mb-10">
  <div class="w-5/6 mx-auto">
  <h2 class="text-5xl/loose text-center">When & Where</h2>
  <div>
    <a :href="calender" target="_blank" rel="noopener noreferrer">
      <i class='bx bx-calendar-plus bx-md'></i>
    </a>
  </div>
  </div>
</section>
<section class=" mb-10">
  <div class="w-5/6 mx-auto">
  <h2 class="text-center text-3xl/loose font-bold">地點</h2>
  <div class="">
    <iframe class=" mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8136350223413!2d121.54646475183712!3d25.04039790588343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd0af5c2005%3A0xf9c26b5bf5de8f0a!2z6YGg5p2xU09HTyDlj7DljJflv6DlrZ3ppKg!5e0!3m2!1szh-TW!2stw!4v1725001742776!5m2!1szh-TW!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </div>
</section>
<section class="bg-white p-10 rounded-2xl mb-10">
  <div class="w-5/6 mx-auto">
    <h2 class="text-center text-3xl/loose">分享邀請函</h2>
    <div class="">
      <button type="button">
        <i class='bx bx-share-alt bx-md'></i>
      </button>
      <button type="button">
        <i class='bx bxl-facebook bx-md'></i>
      </button>
    </div>
  </div>
</section>
</template>

<script setup>
import { reactive, onBeforeUnmount } from 'vue'
const calender = 'https://www.google.com/calendar/render?action=TEMPLATE&text=OOO%E5%A9%9A%E7%A6%AE&details=%E8%A8%98%E5%BE%97%E5%8F%83%E5%8A%A0OOO%E5%A9%9A%E7%A6%AE&location=%E9%81%A0%E6%9D%B1SOGO%20%E5%8F%B0%E5%8C%97%E5%BF%A0%E5%AD%9D%E9%A4%A8&dates=20241212T033000.000Z%2F20241212T060000.000Z'

const countdown = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const updateCountdown = () => {
  const now = new Date()
  const target = new Date('2024-12-31T23:59:59')
  const diff = target - now

  countdown.days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
  countdown.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
  countdown.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
  countdown.seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0')
}

const clock = setInterval(updateCountdown, 1000)
updateCountdown()

onBeforeUnmount(() => {
  clearInterval(clock)
})
</script>
