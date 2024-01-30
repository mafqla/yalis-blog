import type { MarkdownOptions } from 'vitepress'
import { getReadingTime } from '../theme/utils/pageInfo'

export const markdown: MarkdownOptions = {
  // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  theme: {
    light: 'one-dark-pro',
    dark: 'material-theme-palenight'
  },
  // lineNumbers: true, // 启用行号

  // 在所有文档的<h1>标签后添加<ArticleMetadata/>组件
  config: md => {
    md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
      let htmlResult = slf.renderToken(tokens, idx, options)

      if (tokens[idx].tag === 'h1') {
        const content = env.content
        // console.log('content', content)
        const { readTime, words } = getReadingTime(content)
        // console.log('readTime', readTime, 'words', words)
        htmlResult += `\n<ClientOnly><ArticleMetadata v-if="($frontmatter?.aside ?? true) && ($frontmatter?.showArticleMetadata ?? true)" :article="$frontmatter" :readTime="${readTime}" :words="${words}"  /></ClientOnly>`
      }
      return htmlResult
    }
  },
  image: {
    // image lazy loading is disabled by default
    lazyLoading: true
  }
}
