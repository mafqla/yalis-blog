<template>
  <div class="one-a">
    <div ref="btn" class="btn">stop</div>
    <div ref="animation" class="animation"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const btn = ref<HTMLElement | null>(null)
const animation = ref<HTMLElement | null>(null)
const state = ref<string>('')

onMounted(() => {
  btn.value = document.querySelector('.btn')
  animation.value = document.querySelector('.animation')
  state.value = animation.value?.style.animationPlayState || ''

  btn.value?.addEventListener('click', function () {
    if (state.value === 'paused') {
      animation.value!.style.animationPlayState = 'running';
      if (btn.value) {
        btn.value.innerText = 'stop';
      }
    } else {
      animation.value!.style.animationPlayState = 'paused';
      if (btn.value) {
        btn.value.innerText = 'play';
      }
    }
    state.value = animation.value?.style.animationPlayState || ''
  })
})
</script>

<style lang="scss" scoped>
.one-a {
  .animation {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    background: deeppink;
    animation: move 2s linear infinite alternate;
  }

  @keyframes move {
    0% {
      transform: translate(-100px, 0);
    }
    100% {
      transform: translate(100px, 0);
    }
  }

  .btn {
    width: 50px;
    margin: 10px auto;
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #ddd;
      color: #333;
    }

    &:active {
      background: #aaa;
    }
  }
}
</style>
