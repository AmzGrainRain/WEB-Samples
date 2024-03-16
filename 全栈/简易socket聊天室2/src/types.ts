export type User = {
  id: string
  name: string
  email: string
  password: string
  login_count: number
}

export enum STATUS {
  PrarmeterError = '请求参数错误',
  LoginFailed = '账号或密码错误',
  UserAlreadyExists = '用户已存在',
  UserNotExists = '用户不存在',
  OK = 'ok',
  CaptchaFailed = '验证码错误',
  NotLoggedIn = '还没有登录'
}
