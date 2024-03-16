import { createServer as createHttpServer } from 'http'
// import * as fs from 'fs'
import express from 'express'
import session from 'express-session'
import { Server as socketIO } from 'socket.io'

// App 实例
const app = express()

// 配置服务器静态路由
app.use('/', express.static('./static'))

// 创建 HTTP 服务器
const httpServer = createHttpServer(app)

const sessionMiddleware = session({
  secret: "changeit",
  resave: false,
  saveUninitialized: false
})
app.use(sessionMiddleware)

// app.get("/login", (req, res) => {
//   req.session.authenticated = true
//   res.status(204).end()
// })

// 创建 socket 服务器
const io = new socketIO(httpServer)
// 共享 express-session 数据
// const wrap = middleware => (socket, next) => middleware(socket.request, {}, next)
// io.use(wrap(sessionMiddleware))

// 鉴权
// io.use((socket, next) => {
//   console.log(socket.request.session)
//   const session = socket.request.session
//   if (session && session.authenticated) next()
//   else next(new Error("unauthorized"))
// })

// 记录在线人数
let conn = 0
// 建立连接时触发
io.on('connection', (socket) => {
  conn += 1
  console.log(`与 [ ${ socket.id } ] 建立连接`)
  console.log(`当前在线人数: ${ conn }\n`)

  // 收到客户端发送的消息时
  socket.on('msg', (msg) => {
    // 广播客户端发送的消息
    socket.broadcast.emit('broadcast', JSON.stringify({
      sender: socket.id,
      msg,
      date: Date.now()
    }))
    // 单独给发送者广播一次
    socket.emit('broadcast', JSON.stringify({
      sender: socket.id,
      msg,
      date: Date.now()
    }))
  })

  // 断开连接时触发
  socket.on('disconnect', (reason) => {
    conn -= 1
    console.log(`与 [ ${ socket.id } ] 断开连接，原因: ${ reason }`)
    console.log(`当前在线人数: ${ conn }\n`)
  })
})

/**
 * 不要调用 app.listen() 监听端口，因为 app.listen() 会创建的一个全新的 http 服务器
 * 我们应该调用 httpServer.listen() 来监听端口
 */
httpServer.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000')
})