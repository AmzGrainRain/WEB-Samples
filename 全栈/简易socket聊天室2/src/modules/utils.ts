const getCurrentDateTime = (ts: number = 0): string => {
  const T = ts !== 0 ? new Date(ts) : new Date()
  const M = T.getMonth() + 1 < 10 ? `0${T.getMonth() + 1}` : T.getMonth() + 1
  const D = T.getDate() < 10 ? `0${T.getDate()}` : T.getDate()
  const h = T.getHours() < 10 ? `0${T.getHours()}` : T.getHours()
  const m = T.getMinutes() < 10 ? `0${T.getMinutes()}` : T.getMinutes()
  const s = T.getSeconds() < 10 ? `0${T.getSeconds()}` : T.getSeconds()

  return `${T.getFullYear()}-${M}-${D} ${h}:${m}:${s}`
}

type ResponseTemplate<T> = {
  ts: number
  message: string
  data: T
}
const responseTemplate = <T = void>(message: string, data?: T): ResponseTemplate<T | void> => {
  return {
    ts: Date.now(),
    message: message,
    data
  }
}

export type { ResponseTemplate }
export { getCurrentDateTime, responseTemplate }
