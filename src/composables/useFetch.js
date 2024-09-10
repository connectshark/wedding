import { ref } from 'vue'

export default (url, {
  method = 'GET',
  immediate = true,
  onError = () => {}
}) => {
  const loading = ref(false)
  const data = ref(null)
  const error = ref(false)

  const doFetch = async (body) => {
    loading.value = true
    error.value = false
    data.value = null
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

    const fetch_options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        Authorization: `Client-ID ${CLIENT_ID}`
      }
    }

    if (body) {
      fetch_options.body = body
    }

    const fetch_response = await fetch(url, fetch_options)

    if (fetch_response.ok) {
      const response = await fetch_response.json()
      data.value = response
    } else {
      error.value = true
      onError()
    }

    loading.value = false
  }

  const isImmediate = immediate !== false

  if (isImmediate) {
    doFetch()
  }

  return {
    loading,
    data,
    doFetch,
    error
  }
}