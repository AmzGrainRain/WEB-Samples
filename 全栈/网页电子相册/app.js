const express = require('express')
const session = require('express-session')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const app = express()

const imageRoute = require('./route/image')


/**
 * 一些全局变量
 */
global.staticPath = path.join(__dirname, './static')


/**
 * 配置中间件
 */
app.use(morgan('dev')) // 日志
app.use(compression()) // 启用 gzip 压缩传输
app.use('/', express.static(global.staticPath)) // 静态目录
app.use(express.json()) // x-www-form-urlencoded 表单支持
app.use(express.urlencoded({ extended: false })) // x-www-form-urlencoded 表单支持
app.use(session({
  secret: '!2@3$5%6', // 加密签名
  name: 'id', // 客户端 cookie 名
  resave: false, // 禁止重置会话
  saveUninitialized: false, // 强制保存未初始化的会话
  rolling: true, // 每个请求都会强制 cookie 从而重置 cookie 的有效时间
  cookie: {
    httpOnly: true, // 仅允许服务器修改 cookies
    maxAge: 1000 * 1800, // cookie 有效时间（1000ms * 1800 = 30min）
    secure: false // 仅允许通过 https 传输（更安全）
  }
}))


/**
 * 配置路由
 */
app.use('/api/img', imageRoute)


/**
 * HTTP 服务器
 */
app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000')
})
