// 侧边栏

import { type DefaultTheme } from 'vitepress'
import fg from 'fast-glob'
import matter from 'gray-matter'

const sync = fg.sync
export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/blogs/': getItemsByDate('blogs'),
  '/knowledge/FrontEnd/vue3': getItems('knowledge/FrontEnd/vue3'),
  '/knowledge/FrontEnd/typescript': getItemsWithoutGroup(
    'knowledge/FrontEnd/typescript'
  ),
  '/knowledge/build-tools': getItems('knowledge/build-tools'),
  '/knowledge/courses': getItems('knowledge/courses'),
  '/knowledge/FrontEnd/css': getItems('knowledge/FrontEnd/css')
}

/**
 * 根据 某分类/YYYY/MM/dd/xxx.md 的目录格式, 获取侧边栏分组及分组下标题
 *
 * /categories/issues/2022/07/20/xxx.md
 *
 * @param path 扫描基础路径
 * @returns {DefaultTheme.SidebarItem[]}
 */
function getItemsByDate(path: string) {
  // 侧边栏年份分组数组
  let yearGroups: DefaultTheme.SidebarItem[] = []
  // 置顶数组
  let topArticleItems: DefaultTheme.SidebarItem[] = []

  // 1.获取所有年份目录
  sync(`docs/${path}/*`, {
    onlyDirectories: true,
    objectMode: true
  }).forEach(({ name }) => {
    let year = name
    // 年份数组
    let articleItems: DefaultTheme.SidebarItem[] = []

    // 2.获取所有月份目录
    sync(`docs/${path}/${year}/*`, {
      onlyDirectories: true,
      objectMode: true
    }).forEach(({ name }) => {
      let month = name

      // 3.获取所有日期目录
      sync(`docs/${path}/${year}/${month}/*`, {
        onlyDirectories: true,
        objectMode: true
      }).forEach(({ name }) => {
        let day = name
        // 4.获取日期目录下的所有文章
        sync(`docs/${path}/${year}/${month}/${day}/*`, {
          onlyFiles: true,
          objectMode: true
        }).forEach((article: { path: any; name: string }) => {
          const articleFile = matter.read(`${article.path}`)
          const { data } = articleFile
          if (data.isTop) {
            // 向置顶分组前追加标题
            topArticleItems.unshift({
              text: data.title,
              link: `/${path}/${year}/${month}/${day}/${article.name.replace(
                '.md',
                ''
              )}`
            })
          }

          // 向年份分组前追加标题
          articleItems.unshift({
            text: data.title,
            link: `/${path}/${year}/${month}/${day}/${article.name.replace(
              '.md',
              ''
            )}`
          })
        })
      })
    })

    // 添加年份分组
    yearGroups.unshift({
      text: `${year}年 (${articleItems.length}篇)`,
      items: articleItems,
      collapsed: true
    })
  })

  if (topArticleItems.length > 0) {
    // 添加置顶分组
    yearGroups.unshift({
      text: `📑 我的置顶 (${topArticleItems.length}篇)`,
      items: topArticleItems,
      collapsed: false
    })

    // 将最近年份分组展开
    yearGroups[1].collapsed = false
  } else {
    // 将最近年份分组展开
    yearGroups[0].collapsed = false
  }

  // 添加序号
  addOrderNumber(yearGroups)
  return yearGroups
}

/**
 * /类别/分组/序号-xxx.md 的目录格式, 获取侧边栏分组及分组下标题
 *
 * knowledge/front-end/vue3/01-MyBatis基础/01-xxx.md
 * 不需要分组 knowledge/front-end/vue3/02-xxx.md
 *
 * @param path 扫描基础路径
 * @returns {DefaultTheme.SidebarItem[]}
 */
function getItems(path: string) {
  // 侧边栏分组数组
  let groups: DefaultTheme.SidebarItem[] = []
  // 侧边栏分组下标题数组
  let items: DefaultTheme.SidebarItem[] = []
  let total = 0
  // 当分组内文章数量少于 2 篇或文章总数显示超过 20 篇时，自动折叠分组
  const groupCollapsedSize = 2
  const titleCollapsedSize = 20

  // 1.获取所有分组目录
  sync(`docs/${path}/*`, {
    onlyDirectories: true,
    objectMode: true
  }).forEach(({ name }) => {
    if (name !== 'images' && name !== 'assets' && name !== 'img') {
      let groupName = name
      //去除name为images的文件夹

      // 2.获取分组下的所有文章
      sync(`docs/${path}/${groupName}/*`, {
        onlyFiles: true,
        objectMode: true
      }).forEach(article => {
        const articleFile = matter.read(`${article.path}`)
        const { data } = articleFile
        //先排序
        // 向前追加标题
        items.push({
          text: data.title || article.name.replace('.md', ''),
          link: `/${path}/${groupName}/${article.name.replace('.md', '')}`
        })
        // 根据文章序号排序
        items.sort((a, b) => {
          const getNumber = (text?: string) =>
            parseInt((text ?? '').split('-')[0], 10)
          return getNumber(a.text) - getNumber(b.text)
        })

        total += 1
      })

      // 3.向前追加到分组
      // 当分组内文章数量少于 A 篇或文章总数显示超过 B 篇时，自动折叠分组
      groups.push({
        text: `${groupName.substring(groupName.indexOf('-') + 1)} (${
          items.length
        }篇)`,
        items: items,
        collapsed:
          items.length < groupCollapsedSize || total > titleCollapsedSize
      })

      // 4.清空侧边栏分组下标题数组
      items = []
    }
  })

  // 添加序号
  addOrderNumber(groups)
  return groups
}

/**
 * 构建侧边栏不需要分组
 */
function getItemsWithoutGroup(path: string) {
  let items: DefaultTheme.SidebarItem[] = []
  sync(`docs/${path}/*`, {
    onlyFiles: true,
    objectMode: true
  }).forEach(article => {
    const articleFile = matter.read(`${article.path}`)
    const { data } = articleFile
    // 向前追加标题
    items.push({
      text: data.title,
      link: `/${path}/${article.name.replace('.md', '')}`
    })
  })

  const groups: DefaultTheme.SidebarItem[] = []

  groups.push({
    text: '',
    items: items,
    collapsed: false
  })
  // 添加序号
  addOrderNumber(groups)
  return groups
}

/**
 * 添加序号
 *
 * @param groups 分组数据
 */
function addOrderNumber(groups: string | any[]) {
  for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < groups[i].items.length; j++) {
      const items = groups[i].items
      const index = j + 1
      let indexStyle = `<div class="text-color-gray mr-[6px]" style="font-weight: 550; display: inline-block;">${index}</div>`

      // 去除已有的序号
      items[j].text = items[j].text.replace(/^\s*\d+\s*-\s*/, '')

      // 添加新的序号
      if (index === 1) {
        indexStyle = `<div class="text-color-red mr-[6px]" style="font-weight: 550; display: inline-block;">${index}</div>`
      } else if (index === 2) {
        indexStyle = `<div class="text-color-orange mr-[6px]" style="font-weight: 550; display: inline-block;">${index}</div>`
      } else if (index === 3) {
        indexStyle = `<div class="text-color-yellow mr-[6px]" style="font-weight: 550; display: inline-block;">${index}</div>`
      }

      items[j].text = `${indexStyle}${items[j].text}`
    }
  }
}
