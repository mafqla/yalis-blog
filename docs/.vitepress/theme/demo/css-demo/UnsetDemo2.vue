<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="left">fixed-left</div>
    <div class="right">fixed-right</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 360px;
  height: 600px;
  margin: 0 auto;
  background: #bbb;
}

.left,
.right {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background: deeppink;
  color: #fff;
  font-size: 18px;
  top: 50px;
  left: 0;
}

.right {
  left: unset;
  right: 0;
}
</style>
