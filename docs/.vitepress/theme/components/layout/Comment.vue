<template>
  <div id="comment-container"></div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onMounted } from 'vue'
import { useData } from 'vitepress'
import md5 from 'blueimp-md5'
import '@arco-design/web-vue/es/message/style/css.js'
import Gitalk from 'gitalk'
import '../../styles/components/gitalk.css'

// 定义属性
const props = defineProps({
  commentConfig: Object
})

const data = reactive({
  type: props.commentConfig?.type ?? 'gitalk'
})
const { type } = toRefs(data)

// 初始化评论组件配置
const { page } = useData()
let gitalk: Gitalk
if (type.value && type.value == 'gitalk') {
  gitalk = new Gitalk({
    clientID: 'ddd7518f38c749c002b7',
    clientSecret: '824d2ce9a695d119a66dbd372fece04e7cee5d4c',
    repo: 'yalis-blog',
    owner: 'mafqla',
    admin: ['mafqla'],
    id: md5(page.value.relativePath),
    language: 'zh-CN',
    distractionFreeMode: false,
    // 默认: https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token
    proxy: 'https://vercel.charles7c.top/github_access_token'
  })
}

// 渲染评论组件
onMounted(() => {
  if (type.value && type.value == 'gitalk') {
    gitalk.render('comment-container')
    // 点赞前检查登录状态
    const commentContainer: HTMLElement | null =
      document.getElementById('comment-container')

    commentContainer?.addEventListener('click', (event: Event) => {
      if (!window.localStorage.getItem('GT_ACCESS_TOKEN')) {
        alert('点赞前，请先登录')
        event.preventDefault()
      }
    })

    // 提交评论后重置输入框高度
    commentContainer?.addEventListener('click', (event: Event) => {
      const gtTextarea: HTMLElement | null = document.querySelector(
        '.gt-header-textarea'
      )
      if (gtTextarea) {
        ;(gtTextarea as HTMLInputElement).style.height = '72px'
      }
    })

    // 点击预览时切换评论按钮可见性
    commentContainer?.addEventListener('click', (event: Event) => {
      const commentButton: HTMLElement | null = document.querySelector(
        '.gt-header-controls .gt-btn-public'
      )
      if (commentButton) {
        commentButton.classList.toggle('hide')
      }
    })
  }
})
</script>

<style scoped></style>
