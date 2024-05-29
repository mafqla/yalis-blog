import type { DefaultTheme } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

export const themeConfig: DefaultTheme.Config = {
  nav, // 导航栏配置
  sidebar, // 侧边栏配置
  logo: '/logo.png',
  outline: {
    level: 'deep', // 右侧大纲标题层级
    label: '目录' // 右侧大纲标题文本配置
  },
  // 是否在大纲中显示 Badge 文本
  darkModeSwitchLabel: '切换日光/暗黑模式',
  sidebarMenuLabel: '文章',
  returnToTopLabel: '返回顶部',
  lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
  // 文档页脚文本配置
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
  // 编辑链接配置
  editLink: {
    pattern:
      'https://github.com/mafqla/yalis-blog/edit/main/packages/yalispress/docs/:path',
    text: '不妥之处，敬请雅正'
  },
  // 全文搜索配置
  // algolia: {
  //   appId: '94CK9VI16P',
  //   apiKey: '92ab6af8da0e0c4e59b6ee77e72e074b',
  //   indexName: 'yalisky'
  // },
  search: {
    provider: 'local'
  },
  // 导航栏右侧社交链接配置

  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/mafqla'
    }
  ],

  // 自定义扩展: 文章元数据配置
  // @ts-ignore
  articleMetadataConfig: {
    author: 'yalis', // 文章全局默认作者名称
    authorLink: '/about/me', // 点击作者名时默认跳转的链接
    showViewCount: true // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
  },
  // 自定义扩展: 文章版权配置
  copyrightConfig: {
    license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
    licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/'
  },
  // 自定义扩展: 评论配置
  commentConfig: {
    type: 'gitalk',
    showComment: true // 是否显示评论
  },
  // 自定义扩展: 页脚配置
  footerConfig: {
    showFooter: true, // 是否显示页脚
    message: 'Released under the MIT License.', // 页脚文本
    icpRecordCode: false, // ICP备案号
    publicSecurityRecordCode: false, // 联网备案号
    copyright: `Copyright © 2019-${new Date().getFullYear()} yalis` // 版权信息
  },
  sitemap: {
    hostname: 'https://skyseek.top',
    lastmodDateOnly: false
  }
}
