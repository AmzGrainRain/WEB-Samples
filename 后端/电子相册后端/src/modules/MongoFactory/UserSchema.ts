import { Schema, Model, model as createModel } from 'mongoose'
import { BaseSchema } from './BaseSchema'
import { User } from '../../common/types'

export default class UserSchema extends BaseSchema<User> {
  readonly schema: Schema<User>
  readonly model: Model<User>

  public constructor() {
    super()
    this.schema = new Schema<User>({
      name: { type: String, required: false },
      email: { type: String, required: true },
      password: { type: String, required: true }
    })
    this.model = createModel('User', this.schema)
  }

  public insertOne() {}

  private static instance: UserSchema | undefined
  public static getInstance(): UserSchema {
    if (!this.instance) this.instance = new UserSchema()
    return this.instance
  }
}
