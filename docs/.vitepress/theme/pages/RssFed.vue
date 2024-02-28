<script setup lang="ts">
import { onMounted, ref } from 'vue'

const height = ref(0)
const iframeRef = ref()

onMounted(() => {
  updateHeight()
  window.addEventListener('scroll', updateHeight)
})

const updateHeight = () => {
  if (iframeRef.value) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    height.value = scrollTop + document.documentElement.clientHeight
    if (iframeRef.value) {
      iframeRef.value.style.height = `${height.value}px`
    }
  }
}
</script>
<template>
  <div class="rss">
    <iframe
      ref="iframeRef"
      src="https://fed.chanceyu.com/"
      width="100%"
      class="fw-iframe"
      scrolling="no"
      frameborder="0"
      loading="lazy"
      allowtransparency="true"
      allowfullscreen="true"
    />
  </div>
</template>

<style lang="scss" scoped>
.rss {
  width: 100%;
  height: 100%;
  padding: 60px;
}
</style>
