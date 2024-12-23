import axios from 'axios'
import { defalutParams } from './params'

const service = axios.create({
  baseURL: '/douyin', // api的base_url
  timeout: 5000, // 请求超时时间
})
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    }
  },

  error => {
    // console.log('err' + error) // for debug
    // return Promise.reject(error)
  }
)

interface Params {
  channel?: string
  source?: number
  board_type: number
  board_sub_type: number | string
}

function getParams(boardType: number, boardSubType: number | string): Params {
  return {
    channel: 'channel_pc_web',
    source: 6,
    board_type: boardType,
    board_sub_type: boardSubType,
    ...defalutParams
  }
}

const url = '/aweme/v1/web/hot/search/list/'
// 抖音热榜
const hotParams = getParams(0, '')
export const hot = () => {
  return service.get(url, { params: hotParams })
}
// 娱乐榜
const entertainmentParams = getParams(2, 2)
export const entertainment = () => {
  return service.get(url, { params: entertainmentParams })
}

// 社会榜
const societyParams = getParams(2, 4)
export const society = () => {
  return service.get(url, { params: societyParams })
}

// 挑战榜
const challengeParams = getParams(2, 'hotspot_challenge')
export const challenge = () => {
  return service.get(url, { params: challengeParams })
}
