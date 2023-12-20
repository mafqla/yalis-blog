import dayjs from 'dayjs'
import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
  tags: string[]
  categories: string[]
  author: string
  showArticleMetadata: boolean
  editLink: boolean
  lastUpdated: boolean
  showComment: boolean
  description: string
  cover: string
  isOriginal?: boolean
  isTop?: boolean
  isArticle?: boolean
}

declare const data: Post[]
export { data }

export default createContentLoader('**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .filter(
        ({ frontmatter }) =>
          frontmatter.date &&
          frontmatter.date !== 'Invalid Date' &&
          frontmatter.date.time !== null
      )
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        author: frontmatter.author,
        isOriginal: frontmatter.isOriginal,
        isTop: frontmatter.isTop,
        isArticle: frontmatter.isArticle,
        showArticleMetadata: frontmatter.showArticleMetadata,
        editLink: frontmatter.editLink,
        lastUpdated: frontmatter.lastUpdated,
        showComment: frontmatter.showComment,
        excerpt,
        date: formatDate(frontmatter.date),
        tags: frontmatter.tags,
        categories: frontmatter.categories,
        description: frontmatter.description || '',
        cover: frontmatter.cover || ''
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = dayjs(raw)
  const timestamp = date.unix()

  return {
    time: timestamp,
    string: date.format('YYYY-MM-DD HH:mm')
  }
}
