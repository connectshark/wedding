export default (shareData) => {

  const isShare = window.navigator.canShare

  const share = async () => {
    await window.navigator.share(shareData)
  }

  return {
    share,
    isShare
  }
}