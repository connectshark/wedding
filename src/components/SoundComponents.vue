<template>
<button type="button" @click="soundChange" :disabled="disabled">
<Transition mode="out-in" name="pop">
  <svg v-if="playing" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 9.61V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-3c-.55 0-1 .45-1 1v3.61zM5.12 3.56a.996.996 0 1 0-1.41 1.41l8.29 8.3v.28c-.94-.54-2.1-.75-3.33-.32c-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1v-1.58l5.02 5.02a.996.996 0 1 0 1.41-1.41z"/></svg>
  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12.75 12.508l8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a8 8 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.2 2.2 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228c-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644c-.4.22-.743.48-1.001.868s-.366.805-.415 1.259c-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74zM7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5a2.44 2.44 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698"/></svg>
</Transition>
  <audio @loadeddata="onLoad" @play="onPlay" @pause="onPause" ref="sound" class="sr-only" loop>
    <source src="/media/staywithme.mp3" type="audio/mpeg">
    <p>你不支援音樂</p>
  </audio>
</button>
</template>

<script setup>
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'

const sound = useTemplateRef('sound')
const playing = ref(false)
const disabled = ref(true)

const onPlay = () => {
  playing.value = true
}
const onPause = () => {
  playing.value = false
}

const onLoad = () => {
  disabled.value = false
  sound.value.volume = 0.5
}

const soundChange = () => {
  if (sound.value.paused) {
    sound.value.play()
  } else {
    sound.value.pause()
  }
}

let soundState = null

const visibleHandler = () => {
  if (document.hidden) {
    soundState = sound.value.paused
    sound.value.pause()
  } else {
    if (!soundState) {
      sound.value.play()
    }
  }
}
onMounted(() => {
  document.addEventListener('visibilitychange', visibleHandler)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', visibleHandler)
})

defineExpose({
  playSound: () => {
    sound.value.play()
  }
})
</script>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: opacity .1s ease, transform .1s ease;
}

.pop-enter-from,
.pop-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>