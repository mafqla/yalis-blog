/**
 * 格式化时间
 *
 * @param date 待格式化时间
 * @returns 格式化后的时间(YYYY/MM/dd AM hh:mm)
 */
export function formatDate(date: string | number | Date) {
  const formatDate = new Date(date)
  return formatDate.toLocaleString('zh', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })
}

/**
 *
 * @param time  2023-02-11T15:31:35.753Z
 * @returns 几秒前，几分钟前，几小时前，几天前，几月前
 */
export function formatTime(time: string | Date): string {
  //2023-02-11T15:31:35.753Z
  const date = new Date(time)

  //转换为几秒前，几分钟前，几小时前，几天前，几月前
  const now = new Date().getTime()
  const diffValue = now - date.getTime()
  if (diffValue < 0) {
    return ''
  }
  const minuteC = diffValue / 1000 / 60
  const hourC = diffValue / 1000 / 3600
  const dayC = diffValue / 1000 / 3600 / 24
  const monthC = diffValue / 1000 / 3600 / 24 / 30
  const yearC = diffValue / 1000 / 3600 / 24 / 30 / 12

  // 返回刚刚，几秒前，几分钟前，几小时前，几天前，几月前，几年前
  if (monthC >= 1) {
    //大于12个月，显示年月日
    if (yearC >= 1) {
      return formatDate(date)
    }

    return `${Math.floor(monthC)}月前`
  } else if (dayC >= 1) {
    return `${Math.floor(dayC)}天前`
  } else if (hourC >= 1) {
    return `${Math.floor(hourC)}小时前`
  } else if (minuteC >= 1) {
    return `${Math.floor(minuteC)}分钟前`
  } else {
    return '刚刚'
  }
}

/**
 * 获取 URL 路径中的指定参数
 *
 * @param paramName 参数名
 * @returns 参数值
 */
export function getQueryParam(paramName: string) {
  const reg = new RegExp('(^|&)' + paramName + '=([^&]*)(&|$)')
  let value = decodeURIComponent(window.location.search.substr(1)).match(reg)
  if (value != null) {
    return unescape(value[2])
  }
  return null
}

/**
 * 跳转到指定链接
 *
 * @param paramName 参数名
 * @param paramValue 参数值
 */
export function goToLink(url: string, paramName?: string, paramValue?: string) {
  if (paramName) {
    window.location.href = url + '?' + paramName + '=' + paramValue
  } else {
    window.location.href = url
  }
}
