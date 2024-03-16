export enum STATUS {
  OK = '没毛病',
  NOT_FOUND = '资源不存在',
  FORBIDDEN = '拒绝访问',
  UNAUTHORIZED = '您还没有登录',
  BAD_REQUEST = '请求参数错误',
  INCORRECT_CAPTCHA = '错误的验证码',
  INCORRECT_EMAIL_OR_PASSWORD = '账号或密码错误',
  INTERNEL_ERROR = '服务器内部错误',
  UNSUPPORTED_FILE_FORMAT = '不受支持的格式'
}
