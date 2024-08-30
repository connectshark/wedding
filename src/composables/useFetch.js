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

    const fetch_options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    }

    if (body) {
      fetch_options.body = body
    }

    const fetch_response = await fetch(url)

    if (fetch_response.ok) {
      const response = await fetch_response.json()
      data.value = response
    } else {
      if (fetch_response.status === 401) {
        store.logout()
      }
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