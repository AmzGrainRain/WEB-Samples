import { Schema, Model } from 'mongoose'

export enum SchemaList {
  User,
  Image,
  Video
}

export abstract class BaseSchema<T = any> {
  abstract readonly schema: Schema<T>
  abstract readonly model: Model<T>

  public readonly getSchema = (): Schema<T> => this.schema
  public readonly getModel = (): Model<T> => this.model
  public abstract insertOne(doc: T): any
}
