<template>
<article class="w-5/6 mx-auto py-8 text-text/90 max-w-4xl prose prose-h1:text-2xl prose-h1:text-center prose-headings:font-semibold">
  <h1>{{ TITLE }}</h1>
  <p>Hi！我是葉恩騰，一名前端工程師，也是這個網站的作者。更重要的是，我即將成為這場婚禮的新郎！</p>
  <p>首先，非常感謝您點進這個頁面，這代表您對這個網站充滿喜愛與支持，才能一路逛到這裡，讀到這篇文章。您的支持是我持續創作的最大動力，再次由衷地感謝您！</p>
  <p>如果您對我的作品或經歷有興趣，歡迎瀏覽我的個人網站。希望您能在那裡找到更多有趣的內容！</p>
  <ul>
    <li><a href="http://nosegates.com" target="_blank">個人官網<i class='bx  bx-arrow-out-up-right-stroke-square align-middle'/></a></li>
  </ul>
</article>
<p class=" text-center"><router-link class="underline" to="/">回首頁</router-link></p>
</template>

<script setup>
const TITLE = `聯繫我們`
</script>

<route lang="json">
{
  "meta": {
    "title": "聯繫我們"
  }
}
</route>