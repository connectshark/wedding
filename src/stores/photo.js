import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const usePhotosStore = defineStore('photo', () => {
  const photos = ref([])
  const isCompleted = ref(false)
  const initPhotos = async () => {
    if (isCompleted.value) return
    const response = await fetch('https://opensheet.elk.sh/1ugNqY_23nVDGBme01MQvLCAEJ26pgB0-55XGDu4crA4/wedding')
    const data = await response.json()
    photos.value = data.map(item => item.photo)
    isCompleted.value = true
  }
  
  return { photos, initPhotos }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePhotosStore, import.meta.hot))
}
