import { Express } from 'express'
import { createStream, RotatingFileStream } from 'rotating-file-stream'
import morgan from 'morgan'

morgan.token('time', (): string => new Date().toLocaleString().replace(' ', '_').replace(':', '-'))

export class Logger {
  private readonly directory: string
  private readonly format: string
  private readonly rfs: RotatingFileStream

  constructor(directory: string, format: string) {
    this.directory = directory
    this.format = format
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
