import type { LocationQueryValue } from "vue-router"

function plural(n:number, one:string, few:string, many:string) {
  if (n % 10 === 1 && n % 100 !== 11) return one
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return few
  return many
}

export function timeAgo(dateString:string) {
  const now = new Date()
  const date = new Date(dateString)

  const diffMs = now.getTime() - date.getTime()
  const diffSeconds = Math.floor(diffMs / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffSeconds < 60) {
    return 'только что'
  }

  if (diffMinutes < 60) {
    return `${diffMinutes} ${plural(diffMinutes, 'минута', 'минуты', 'минут')} назад`
  }

  if (diffHours < 24) {
    return `${diffHours} ${plural(diffHours, 'час', 'часа', 'часов')} назад`
  }

  return `${diffDays} ${plural(diffDays, 'день', 'дня', 'дней')} назад`
}

export const queryParamToInt = (value: LocationQueryValue | LocationQueryValue[] | undefined): null | number => {
    if (value === undefined) {
        return null;
    }
    if (Array.isArray(value)) {
        return null;
    }

    const res = value?.toString()
    if (res === undefined) {
        return null;
    }
    const resInt = parseInt(res)
    if (isNaN(resInt)) {
        return null
    }
    return resInt;
}

export const queryParamToString = (value: LocationQueryValue | LocationQueryValue[] | undefined): null | string => {
    if (value === undefined) {
        return null;
    }

    const res = value?.toString()
    if (res === undefined) {
        return null;
    }

    return res;
}