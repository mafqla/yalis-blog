<script setup lang="ts">
import Douyin from '../components/hot/douyin.vue'
</script>
<template>
  <div class="hot">
    <a-list
      :grid-props="{ gutter: [20, 20], sm: 4, md: 12, lg: 12, xl: 6 }"
      :bordered="false"
    >
      <a-list-item>
        <Douyin />
      </a-list-item>
      <a-list-item> </a-list-item>
      <a-list-item> </a-list-item>
      <a-list-item> </a-list-item>
    </a-list>
  </div>
</template>

<style lang="scss" scoped>
.hot {
  width: 100%;
  height: 100%;
}
</style>
