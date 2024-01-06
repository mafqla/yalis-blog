<script setup lang="ts"></script>
<template>
  <div class="father">
    <b class="color unset">设置了 unset，我的 font-weight 会被完全清除</b>
    <br />
    <b class="color revert"
      >设置了 revert，我的 font-weight 将会被还原到浏览器默认样式的 font-weight:
      bold;</b
    >
  </div>
</template>

<style lang="scss" scoped>
.father {
  margin: auto;
  line-height: 2;
}

.unset {
  font-weight: unset;
}

.revert {
  font-weight: revert;
}
</style>
