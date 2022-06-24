export default {
  // These are app level configs.
  lang: 'en-US',
  title: 'skyseek-notes',
  description: 'Vite & Vue powered static site generator.',
  base: '/',
  themeConfig: {
    siteTitle: '寻觅的前端学习笔记',
    socialLinks: [{ icon: 'github', link: 'https://github.com/mafqla' }],
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
    ],
    lastUpdatedText: 'Updated Date',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present fql',
    },
  },
}
