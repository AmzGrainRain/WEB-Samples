import { Schema, Model, model as createModel } from 'mongoose'
import { BaseSchema } from './BaseSchema'
import { VideoFile } from '../../common/types'

export default class VideoSchema extends BaseSchema<VideoFile> {
  readonly schema: Schema<VideoFile>
  readonly model: Model<VideoFile>

  public constructor() {
    super()
    this.schema = new Schema<VideoFile>({
      path: { type: String, required: true },
      type: { type: String, required: true },
      size: { type: Number, required: true },
      createAt: { type: Number, default: Date.now },
      cover_image_path: { type: String, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
      duration: { type: Number, required: true },
      tags: { type: [String], required: true }
    })
    this.model = createModel<VideoFile>('Video', this.schema)
  }

  public insertOne() {}

  private static instance: VideoSchema | undefined
  public static getInstance(): VideoSchema {
    if (!this.instance) this.instance = new VideoSchema()
    return this.instance
  }
}
