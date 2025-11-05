import { defineStore, acceptHMRUpdate } from 'pinia'
import { reactive, ref } from 'vue'

export const usePhotosStore = defineStore('photo', () => {

  const photo = reactive({
    small: '',
    regular: '',
    full: '',
    photo: ''
  })

  const setTargetPhoto = (photoDetail) => {
    photo.small = photoDetail.small
    photo.regular = photoDetail.regular
    photo.full = photoDetail.full
    photo.photo = photoDetail.photo
  }
  
  return { photo, setTargetPhoto }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePhotosStore, import.meta.hot))
}
