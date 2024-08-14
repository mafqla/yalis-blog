<script setup lang="ts">
</script>
<template>
  <div class="hot">
    <a-list
      :grid-props="{ gutter: [5, 5], xs: 6, md: 12, lg: 10, xl: 6 }"
      :bordered="false"
    >
      <a-list-item>
      </a-list-item>
    </a-list>
  </div>
</template>

<style lang="scss" scoped>
.hot {
  width: 100%;
  height: 100%;
  padding-top: 60px;
}

:depp(.VPDoc:not(.has-sidebar) .content) {
  max-width: none !important;
}
:deep(.VPDoc:not(.has-sidebar) .container) {
  max-width: none !important;
}
</style>
