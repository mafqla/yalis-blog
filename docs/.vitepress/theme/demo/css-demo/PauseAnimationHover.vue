<script setup lang="ts"></script>
<template>
  <div class="btn stop">stop</div>
  <div class="animation"></div>
</template>

<style lang="scss" scoped>
.animation {
  width: 100px;
  height: 100px;
  margin: 50px auto;
  background: deeppink;
  animation: move 2s linear infinite alternate;
}

input {
  display: none;
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

.stop:hover ~ .animation {
  animation-play-state: paused;
}
</style>
