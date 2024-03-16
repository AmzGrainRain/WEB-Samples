import { Express } from 'express'
import { createStream, RotatingFileStream } from 'rotating-file-stream'
import morgan from 'morgan'
import { getCurrentDateTime } from './utils'

morgan.token('time', (): string => getCurrentDateTime().replace(' ', '_').replace(':', '-'))

type LoggerOptions = {
  directory: string
  format: string
}

export class Logger {
  private readonly directory: string
  private readonly format: string
  private readonly rfs: RotatingFileStream

  constructor(args: LoggerOptions) {
    this.directory = args.directory
    this.format = args.format
    this.rfs = createStream('access.log', {
      size: '10M',
      interval: '1d',
      compress: 'gzip',
      path: this.directory
    })
  }

  apply(app: Express) {
    app.use(morgan(this.format, { stream: this.rfs }))
  }
}
