<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vitepress'
import { data as articleData } from '../../../config/posts.data'

//筛选出blogs列表 根据url是否存在/blogs/来判断
const blogs = articleData.filter(item => {
  return item.url.includes('/blogs/')
})
// console.log(blogs)
const total = ref(blogs.length)

const paginationProps = reactive({
  defaultPageSize: 6,
  total: total.value,
  simple: true
})
const router = useRouter()

const goToLink = (link: string) => {
  router.go(link)
}
</script>
<template>
  <div class="blog-list">
    <a-list
      class="list-demo-action-layout"
      :style="{ width: `800px` }"
      :data="blogs"
      :pagination-props="paginationProps"
    >
      <template #item="{ item, index }">
        <a-list-item
          :key="index"
          class="list-demo-item"
          action-layout="vertical"
          @click="goToLink(item.url)"
        >
          <template #actions>
            <ArticleMetadata :article="item" />
          </template>
          <template #extra>
            <div className="image-area">
              <a-image width="400" height="300" :src="item.cover" />
            </div>
          </template>
          <a-list-item-meta :title="item.title" :description="item.description">
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<style lang="scss" scoped>
.blog-list {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 100px;
}

.list-demo-action-layout .image-area {
  width: 183px;
  height: 119px;
  border-radius: 2px;
  overflow: hidden;
}

.list-demo-action-layout .list-demo-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--color-fill-3);
}

.list-demo-action-layout .image-area img {
  width: 100%;
}

.list-demo-action-layout .arco-list-item-action .arco-icon {
  margin: 0 4px;
}
:deep(.arco-list-item-meta) {
  height: 100px;
}
</style>
