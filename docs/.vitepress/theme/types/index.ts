export interface PageInfo {
  readTime: number | string
  words: number | string
}

export interface IWordCountResult {
  words: number
  lines?: number
  characters?: number
  charactersWithSpaces?: number
}
