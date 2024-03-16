import { Server } from 'socket.io'
import { type Server as HTTPServer } from 'node:http'
import { type Request } from 'express'

export class SocketServer {
  private counter: number
  private readonly io: Server

  constructor(httpServer: HTTPServer, sessionMiddleware: any) {
    this.counter = 0
    this.io = new Server(httpServer)

    // sharing the session context from express && authentication
    this.io.engine.use(sessionMiddleware)
    this.io.use((socket, next) => {
      const req = socket.request as Request
      if (req.session.authorized) next()
      else next(new Error('unauthorize'))
    })

    this.io.on('connection', (socket) => {
      const req = socket.request as Request

      this.io.emit('client-join', ++this.counter as any)
      console.log(`[${req.session.uid}] 已连接到服务器`)

      socket.on('disconnect', (reason: string) => {
        this.io.emit('client-leave', --this.counter as any)
        console.log(`[${req.session.uid}] 已断开连接，原因：${reason}`)
      })

      socket.on('new-message', (data: { uid: string, target: string, text: string }) => {
        if (!data?.uid || !data?.target || !data?.text) return
        socket.broadcast.emit('broadcast-message', {
          uid: req.session.uid,
          ts: Date.now(),
          target: data.target,
          text: data.text
        } as any)
        console.log('新的消息')
      })
    })
  }
}