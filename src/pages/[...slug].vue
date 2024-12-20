<template>
  <section class="text-center py-20">
    <h1 class="title text-transparent font-bold bg-clip-text bg-linear-to-br from-accent to-primary">404</h1>
    <p class="mb-10">沒這頁請回去</p>
    <p><router-link class="underline" to="/">回首頁</router-link></p>
  </section>
</template>

<route lang="json">
{
  "meta": {
    "title": "404"
  }
}
</route>

<style scoped>
.title {
  font-size: clamp(4rem, 20vw, 20rem);
}
</style>