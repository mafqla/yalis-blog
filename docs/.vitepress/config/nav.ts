import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '博客',
    link: '/blogs/index',
    activeMatch: '/blogs/'
  },
  {
    text: '知识库',
    items: [
      {
        text: 'HTML',
        link: '/knowledge/FrontEnd/html',
        activeMatch: '/knowledge/FrontEnd/html/'
      },
      {
        text: 'CSS',
        link: '/knowledge/FrontEnd/css/index',
        activeMatch: '/knowledge/FrontEnd/css/'
      },
      {
        text: 'JavaScript',
        link: '/knowledge/FrontEnd/javascript',
        activeMatch: '/knowledge/FrontEnd/javascript/'
      },
      {
        text: 'Vue3',
        link: '/knowledge/FrontEnd/vue3/01-基础/01-basicConcepts',
        activeMatch: '/knowledge/FrontEnd/vue3/'
      },
      {
        text: 'React',
        link: '/knowledge/FrontEnd/react',
        activeMatch: '/knowledge/FrontEnd/react/'
      },
      {
        text: 'Node',
        link: '/knowledge/FrontEnd/node',
        activeMatch: '/knowledge/FrontEnd/node/'
      },
      {
        text: 'TypeScript',
        link: '/knowledge/FrontEnd/typescript/01-get-started-quickly',
        activeMatch: '/knowledge/FrontEnd/typescript/'
      },
      {
        text: 'Webpack',
        link: '/knowledge/FrontEnd/build-tools',
        activeMatch: '/knowledge/FrontEnd/build-tools/'
      },
      {
        text: 'Flutter',
        link: '/knowledge/FrontEnd/flutter',
        activeMatch: '/knowledge/FrontEnd/flutter/'
      },
      {
        text: '小程序',
        link: '/knowledge/FrontEnd/mini-program',
        activeMatch: '/knowledge/FrontEnd/mini-program/'
      },
      {
        text: '后端',
        link: '/knowledge/BackEnd',
        activeMatch: '/knowledge/BackEnd/'
      },
      {
        text: '工具',
        link: '/knowledge/build-tools/project-build/01-code-specification',
        activeMatch: '/knowledge/build-tools/'
      },
      {
        text: '掘金小册',
        link: '/knowledge/courses/index.md',
        activeMatch: '/knowledge/courses/'
      },
      {
        text: '其他',
        link: '/knowledge/other',
        activeMatch: '/knowledge/other/'
      }
    ],
    activeMatch: '/knowledge/'
  },
  {
    text: '导航',
    link: '/nav',
    activeMatch: '/nav'
  },
  {
    text: '标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '热搜',
    link: '/hot',
    activeMatch: '/hot'
  },
  {
    text: '归档',
    link: '/archives',
    activeMatch: '/archives'
  }
]
