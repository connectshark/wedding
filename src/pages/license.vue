<template>
  <article class="w-5/6 mx-auto py-8 text-text/90 max-w-4xl">
    <h1 class="text-2xl font-bold mb-6 text-center">{{ TITLE }}</h1>
    <p class="mb-4">本網站「婚禮邀請函 若筠&恩騰」（以下簡稱本網站內容）內所有的圖片、設計、文字、影片及其他內容均屬本網站所有，受著作權法保護。未經本網站書面同意，任何單位或個人不得擅自進行以下行為：</p>
    <ul class="list-disc pl-6 mb-4">
      <li>轉載、複製、分發、展示、傳播或以其他方式利用本網站內容。</li>
      <li>修改、變更、改作、重製或創作衍生作品。</li>
      <li>任何未經授權的商業用途或公開展示。</li>
    </ul>
    <p class="mb-4">若您需要使用本網站的內容，請務必事先獲得本網站的書面授權。違反以上規定者，將依照相關法律負責，並應支付以下罰款：</p>
    <ul class="list-decimal pl-6 mb-6">
      <li>每次未經授權使用、轉載或修改圖片或其他內容，將處以新台幣【50,000】元的罰款。</li>
      <li>若未經授權使用造成損害，本網站有權追討因使用所帶來的實際損失或按法律規定要求賠償。</li>
    </ul>
    <p class="mb-4">若您有任何關於授權或版權事宜的問題，請前往我們的<router-link class="underline" to="/contact">聯絡我們</router-link>頁面提交表單與我們聯繫。</p>
    <p class="mb-4">本網站保留對違規行為採取法律行動的權利。</p>
  </article>
  <p class=" text-center"><router-link class="underline" to="/">回首頁</router-link></p>
</template>

<script setup>
const TITLE = `版權聲明`
</script>

<route lang="json">
  {
    "meta": {
      "title": "隱私權條款"
    }
  }
</route>