import type { PageInfo, IWordCountResult } from '../types'
import emojiPattern from './emojiPattern'

const cjkPattern =
  '\\p{Script=Han}|\\p{Script=Kana}|\\p{Script=Hira}|\\p{Script=Hangul}'
const PatternString = {
  emoji: emojiPattern,
  cjk: cjkPattern,
  word: `([a-zA-Z\\u4E00-\\u9FFF]+)(-?([a-zA-Z\\u4E00-\\u9FFF]+)?)?`, // 词
  number: '(?:[\\p{Decimal_Number}](?:\\.?[\\p{Decimal_Number}])+)'
}

const wordPattern = new RegExp(
  `${PatternString.emoji}|${PatternString.number}|${PatternString.word}|${PatternString.cjk}`,
  'gu'
)
export const countWords = (text: string) => {
  return text.match(wordPattern)?.length ?? 0
}

const characterPattern = new RegExp(`${PatternString.emoji}|[\\s\\S]`, 'gu')

const characterPatternWithSpace = new RegExp(
  `${PatternString.emoji}|[\\s\\S]`,
  'gu'
)

export const countLines = (text: string) => {
  return text.split('\n').length ?? 0
}

export const countCharacters = (text: string, withSpace: boolean = false) => {
  return (
    text.match(withSpace ? characterPatternWithSpace : characterPattern)
      ?.length ?? 0
  )
}

export const count = (text: string): IWordCountResult => {
  return {
    words: countWords(text),
    lines: countLines(text),
    characters: countCharacters(text),
    charactersWithSpaces: countCharacters(text, true)
  }
}

export function getReadingTime(
  content: string,
  wordPerMinute: number = 200
): PageInfo {
  const count = countWords(content || '')
  const words = count >= 1000 ? `${Math.round(count / 100) / 10}k` : count

  const readingTime = count / wordPerMinute
  const readTime = Math.max(1, Math.round(readingTime))

  return {
    readTime,
    words
  }
}
