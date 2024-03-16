import { resolve as resolvePath } from 'path'
import express from 'express'
import session from 'express-session'
import compression from 'compression'

import { Logger } from './modules/Logger'
import { PublicAPI } from './routes/public'
import { ImageAPI } from './routes/image'
import { VideoAPI } from './routes/video'
import { AnnotationAPI } from './routes/annotation'
import MongoFactory from './modules/MongoFactory'
import { responseTemplate } from './common/template'
import { STATUS } from './common/status'

declare module 'express-session' {
  interface SessionData {
    uid: string
    authorized: boolean
    captcha: string
  }
}

MongoFactory.init('mongodb://127.0.0.1:27017/IT', { maxPoolSize: 20 })

const app = express()
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
// routes
app.use('/api', PublicAPI)
app.use('/api/image', ImageAPI)
app.use('/api/video', VideoAPI)
app.use('/api/annotation', AnnotationAPI)
app.use('/data/*', (req, res, next) => {
  if (req.session?.authorized) next()
  else res.status(403).end()
})
// error processing
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err)
  if (err instanceof Error) {
    res.json(responseTemplate(err.message))
    return
  }
  res.status(500).end()
})

new Logger(
  './logs',
  '[:time] [:method] [:url :status :response-time ms :total-time ms] -> [:remote-addr]'
).apply(app)

app.listen(3000, () => {
  console.log(`Server running at http://127.0.0.1:3000`)
})
