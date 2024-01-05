<script setup lang="ts">
import {} from 'vue'
defineProps({
  one: {
    type: Boolean,
    default: false,
    required: false
  },
  two: {
    type: Boolean,
    default: false,
    required: false
  },
  three: {
    type: Boolean,
    default: false,
    required: false
  },
  four: {
    type: Boolean,
    default: false,
    required: false
  },
  five: {
    type: Boolean,
    default: false,
    required: false
  },
  six: {
    type: Boolean,
    default: false,
    required: false
  }
})
</script>
<template>
  <div class="GradientChange">
    <div class="one" v-if="one"></div>
    <div class="two" v-if="two"></div>
    <div class="three" v-if="three"></div>
    <div class="four" v-if="four"></div>
    <div class="five" v-if="five">
      <div class="A"></div>
      <div class="B"></div>
    </div>
    <div class="six" v-if="six">confirm</div>
  </div>
</template>

<style lang="scss" scoped>
.one {
  position: relative;
  width: 300px;
  height: 100px;
  margin: 20px auto;
  background: linear-gradient(90deg, #ffc700 0%, #e91e1e 100%);
  animation: gradientChange 2s infinite;
}

@keyframes gradientChange {
  100% {
    // 渐变中的颜色发生了变化
    background: linear-gradient(90deg, #e91e1e 0%, #6f27b0 100%);
  }
}
.two {
  position: relative;
  width: 300px;
  height: 100px;
  margin: 20px auto;
  background: linear-gradient(90deg, #ffc700 0%, #e91e1e 100%);
  animation: bgSize 2s infinite;
}

@keyframes bgSize {
  0% {
    background-size: 300% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
}

.three {
  position: relative;
  overflow: hidden;
  width: 180px;
  height: 180px;
  margin: 40px auto;

  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg, #ffc700 0%, #e91e1e 50%, #6f27b0 100%);
    background-size: 100% 100%;
    animation: bgposition 8s infinite linear alternate;
    z-index: -1;
  }
}

@keyframes bgposition {
  0% {
    transform: translate(30%, 30%);
  }
  25% {
    transform: translate(30%, -30%);
  }
  50% {
    transform: translate(-30%, -30%);
  }
  75% {
    transform: translate(-30%, 30%);
  }
  100% {
    transform: translate(30%, 30%);
  }
}

.four {
  width: 100px;
  height: 100px;
  margin: auto;
  background: linear-gradient(30deg, #ffcc00, deeppink, #9c27b0);
  animation: hueRotate 20s infinite alternate;
}

@keyframes hueRotate {
  100% {
    filter: hue-rotate(360deg);
  }
}

.five {
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: space-around;
}
@property --colorA {
  syntax: '<color>';
  inherits: false;
  initial-value: fuchsia;
}

@property --colorB {
  syntax: '<color>';
  inherits: false;
  initial-value: teal;
}

@property --colorC {
  syntax: '<color>';
  inherits: false;
  initial-value: #f79188;
}

@property --colorD {
  syntax: '<color>';
  inherits: false;
  initial-value: yellow;
}

@property --colorE {
  syntax: '<color>';
  inherits: false;
  initial-value: orange;
}

@property --colorF {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}

.A {
  width: 100px;
  height: 100px;
  background: linear-gradient(
    45deg,
    var(--colorA),
    var(--colorB),
    var(--colorC),
    var(--colorD),
    var(--colorE),
    var(--colorF)
  );
  transition: --colorA 5000ms, --colorB 5000ms, --colorC 5000ms, --colorD 5000ms,
    --colorE 5000ms, --colorF 5000ms;

  &:hover {
    --colorA: red;
    --colorB: orange;
    --colorC: yellow;
    --colorD: green;
    --colorE: teal;
    --colorF: fuchsia;
  }
}

.B {
  width: 100px;
  height: 100px;
  background: linear-gradient(
    45deg,
    var(--colorA),
    var(--colorC),
    var(--colorF)
  );
  animation: change 10s infinite linear;
}

@keyframes change {
  20% {
    --colorA: red;
    --colorC: #a93ee0;
    --colorF: fuchsia;
  }
  40% {
    --colorA: #ff3c41;
    --colorC: #e228a0;
    --colorF: #2e4c96;
  }
  60% {
    --colorA: orange;
    --colorC: green;
    --colorF: teal;
  }
  80% {
    --colorA: #ae63e4;
    --colorC: #0ebeff;
    --colorF: #efc371;
  }
}

.six {
  margin: 50px auto;
  width: 200px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  background: linear-gradient(#024e8a 0%, #2d80c1 50%, #83c7fd 100%);
  background-size: 100% 150%;
  background-position: 0 0;
  transition: 0.3s;

  &:hover {
    background-position: 0 75%;
  }
}
</style>
