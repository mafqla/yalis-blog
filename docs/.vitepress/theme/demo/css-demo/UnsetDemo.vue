<script setup lang="ts"></script>
<template>
  <div class="father">
    <div class="children">子级元素一</div>
    <div class="children unset">子级元素二</div>
  </div>
</template>

<style lang="scss" scoped>
.father {
  width: 200px;
  margin: 50px auto;
  line-height: 32px;
  text-align: center;
  color: red;
  border: 1px solid black;
  padding: 10px;
}

.children {
  margin: 5px;
  color: green;
  border: 1px solid blue;
}

.unset {
  color: unset;
  border: unset;
}
</style>
