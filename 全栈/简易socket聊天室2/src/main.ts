import { resolve as resolvePath } from 'path'
import { createServer as createHttpServer } from 'http'
import express from 'express'
import session from 'express-session'
import compression from 'compression'
import { SocketServer } from './modules/SocketServer'
import { PrefixAPI } from './route/api'
import { Logger } from './modules/Logger'

declare module 'express-session' {
  interface SessionData {
    uid: string
    authorized: boolean
    captcha: string
  }
}

// http
const app = express()
const httpServer = createHttpServer(app)
const sessionMiddleware = session({
  secret: '123',
  name: 'test',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 1800, // 1000ms * 1800 = 30min
    secure: false
  }
})
app.use(sessionMiddleware)
app.use(compression())
app.use('/', express.static(resolvePath(__dirname, '../static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', PrefixAPI)

// logger
const logger = new Logger({
  directory: './logs',
  format: '[:time] [:method] [:url :status :response-time ms :total-time ms] -> [:remote-addr]'
})
logger.apply(app)

// socket server
new SocketServer(httpServer, sessionMiddleware)

httpServer.listen(3000, () => {
  console.log(`Server running at http://127.0.0.1:3000`)
})
