<script setup lang="ts">
import BlogList from '../components/blogs/BlogList.vue'
import Douyin from '../components/hot/douyin.vue'
</script>
<template>
  <div class="index">
    <div class="content-wrapper">
      <div class="blog-list-wrapper">
        <blog-list />
      </div>
      <Douyin />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.content-wrapper {
  display: flex;
}

.blog-list-wrapper {
  width: 100%;
}
</style>
