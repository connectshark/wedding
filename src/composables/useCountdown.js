import { onBeforeUnmount, ref } from 'vue'

export default () => {
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  const target = new Date(2025, 10, 15, 11, 0)

  const updateCountdown = () => {
    const now = new Date()
    const diff = target - now
    
    days.value = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
    minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
    seconds.value = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0')
  }

  updateCountdown()
  const clock = setInterval(updateCountdown, 1000)
  onBeforeUnmount(() => {
    clearInterval(clock)
  })
  return {
    days,
    hours,
    minutes,
    seconds
  }
}