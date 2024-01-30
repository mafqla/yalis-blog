import type { PageInfo } from '../types'

export function getWords(content: string): string[] {
  return content.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/gu) || []
}

export function getChinese(content: string): string[] {
  return content.match(/[\u4E00-\u9FD5\u4F7F\u7528]+/gu) || []
}

export function getEnWordCount(content: string): number {
  return getWords(content).filter(word => word.trim() !== '').length
}

export function getCnWordCount(content: string): number {
  return getChinese(content).length
}

export function getWordNumber(content: string): number {
  return getEnWordCount(content) + getCnWordCount(content)
}

export function getReadingTime(
  content: string,
  cnWordPerMinute: number = 350,
  enWordPerMinute: number = 160
): PageInfo {
  const count = getWordNumber(content || '')
  const words = count >= 1000 ? `${Math.round(count / 100) / 10}k` : count

  const enWord = getEnWordCount(content)
  const cnWord = getCnWordCount(content)

  const readingTime = cnWord / cnWordPerMinute + enWord / enWordPerMinute
  const readTime = Math.max(1, Math.round(readingTime))

  return {
    readTime,
    words
  }
}
