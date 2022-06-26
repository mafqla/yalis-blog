export default {
  // These are app level configs.
  lang: 'zh-CN',
  title: 'skyseek-notes',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  base: '/front-end-notes/',
  themeConfig: {
    siteTitle: '寻觅的前端学习笔记',
    socialLinks: [{ icon: 'github', link: 'https://github.com/mafqla' }],
    nav: nav(),
    sidebar: {
      '/framework/': sidebarFrameword(),
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present fql',
    },
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'skyseek-notes',
    },
  },
}

function nav() {
  return [
    {
      text: '框架',
      items: [
        {
          text: 'Vue3',
          link: '/framework/vue3/basicConcepts',
          activeMatch: '/framework/vue3/',
        },
      ],
    },
  ]
}

function sidebarFrameword() {
  return [
    {
      items: [
        { text: 'vue3的基础概念', link: '/framework/vue3/basicConcepts' },
        { text: '@vue/cli脚手架', link: '/framework/vue3/vue-cli' },
        {
          text: 'vue基础用法与模板语法',
          link: '/framework/vue3/basicUsageAndTemplateSyntax',
        },
        { text: 'vue基本指令', link: '/framework/vue3/basicinStruction' },
        { text: 'v-blid和v-on', link: '/framework/vue3/v-buildAndv-on' },
      ],
    },
  ]
}
