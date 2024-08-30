<script setup>
const calender = 'https://www.google.com/calendar/render?action=TEMPLATE&text=OOO%E5%A9%9A%E7%A6%AE&details=%E8%A8%98%E5%BE%97%E5%8F%83%E5%8A%A0OOO%E5%A9%9A%E7%A6%AE&location=%E9%81%A0%E6%9D%B1SOGO%20%E5%8F%B0%E5%8C%97%E5%BF%A0%E5%AD%9D%E9%A4%A8&dates=20241212T033000.000Z%2F20241212T060000.000Z'
</script>

<template>
<section>
  <h1 class=" text-3xl/loose text-center">Hi</h1>
</section>
<section>
  <h2 class=" font-bold text-center text-3xl/loose">時間</h2>
  <div>
    <a :href="calender" target="_blank" rel="noopener noreferrer">
      <i class='bx bx-calendar-plus bx-md'></i>
    </a>
  </div>
</section>
<section>
  <h2 class=" font-bold text-center text-3xl/loose">地點</h2>
  <div class="">
    <iframe class=" mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8136350223413!2d121.54646475183712!3d25.04039790588343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd0af5c2005%3A0xf9c26b5bf5de8f0a!2z6YGg5p2xU09HTyDlj7DljJflv6DlrZ3ppKg!5e0!3m2!1szh-TW!2stw!4v1725001742776!5m2!1szh-TW!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>
</template>
