import {
  connect as mongooseConnect,
  connection as mongooseConnection,
  ConnectOptions as MongooseConnectionOptions
} from 'mongoose'

import { BaseSchema, SchemaList } from './BaseSchema'
import UserSchema from './UserSchema'
import ImageSchema from './ImageSchema'
import VideoSchema from './VideoSchema'

export default class MongoFactory {
  public static init(connectionString: string, options: MongooseConnectionOptions): void {
    mongooseConnect(connectionString, options)
    mongooseConnection.on('error', console.error.bind(console, 'MongoDB Error: '))
    mongooseConnection.once('open', () => {
      console.log('Established connection with MongoDB.')
    })
  }

  public static get(model: SchemaList): BaseSchema | undefined {
    try {
      switch (model) {
        case SchemaList.User:
          return UserSchema.getInstance()
        case SchemaList.Image:
          return ImageSchema.getInstance()
        case SchemaList.Video:
          return VideoSchema.getInstance()
        default:
          return undefined
      }
    } catch(err) {
      console.error(err)
      return undefined
    }
  }
}
