import { Schema, Model, model as createModel } from 'mongoose'
import { BaseSchema } from './BaseSchema'
import { ImageFile } from '../../common/types'

export default class ImageSchema extends BaseSchema<ImageFile> {
  readonly schema: Schema<ImageFile>
  readonly model: Model<ImageFile>

  private constructor() {
    super()
    this.schema = new Schema<ImageFile>({
      name: { type: String, required: true },
      type: { type: String, required: true },
      path: { type: String, required: true },
      size: { type: Number, required: true },
      createAt: { type: Number, default: Date.now },
      preview_image_path: { type: String, require: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
      tags: { type: [String], required: true }
    })
    this.model = createModel<ImageFile>('Image', this.schema)
  }

  public async insertOne(doc: ImageFile): Promise<boolean> {
    await this.model.insertMany(doc)
    return true
  }

  private static instance: ImageSchema | undefined
  public static getInstance(): ImageSchema {
    if (!this.instance) this.instance = new ImageSchema()
    return this.instance
  }
}
