export type ResponseTemplate<T> = {
  ts: number
  message: string
  data: T
}

export const responseTemplate = <T = void>(
  message: string,
  data?: T
): ResponseTemplate<T | void> => {
  return {
    ts: Date.now(),
    message: message,
    data
  }
}
