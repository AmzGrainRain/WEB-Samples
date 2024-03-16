import { UploadedFile } from 'express-fileupload'
import BaseUploader from './BaseUploader'

// TODO
export default class VideoUploader extends BaseUploader {
  public constructor(file: UploadedFile) {
    super(file)
  }

  public async scan(): Promise<void> {}

  public async upload(): Promise<void> {}

  public clean(): void {}
}
