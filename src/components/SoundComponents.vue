<template>
  <div>
    <audio ref="sound" class="mx-auto" autoplay loop controls>
      <source src="/media/staywithme.mp3" type="audio/mpeg">
      <p>你不支援音樂</p>
    </audio>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'


const sound = ref('')

onMounted(() => {
  sound.value.play()
})
</script>