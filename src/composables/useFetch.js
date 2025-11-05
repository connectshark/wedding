import { ref } from 'vue'

export default (url) => {
  const loading = ref(false)
  const data = ref(null)
  const error = ref(false)

  const doFetch = async () => {
    loading.value = true
    error.value = false
    data.value = null

    const fetch_response = await fetch(url, {
      headers: {
        accept: 'application/json',
      },
    })
    const response = await fetch_response.json()
    data.value = response
    loading.value = false
  }

  return {
    loading,
    data,
    doFetch,
    error,
  }
}
