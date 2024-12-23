<template>
<article class="w-5/6 mx-auto py-8 text-text/90 max-w-4xl prose prose-h1:text-2xl prose-h1:text-center prose-headings:font-semibold">
  <h1>{{ TITLE }}</h1>
  <p>Hi！，是一名前端工程師，同時也是這場婚禮的新郎。</p>
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