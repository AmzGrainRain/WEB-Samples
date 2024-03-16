import { UploadedFile } from 'express-fileupload'

export default abstract class BaseUploader {
  readonly file: UploadedFile
  readonly fileName: string
  filePath: string

  public constructor(file: UploadedFile) {
    this.file = file
    this.fileName = `${Date.now()}-${file.md5}`
    this.filePath = file.tempFilePath
  }

  public abstract scan(): any
  public abstract upload(): any
  public abstract clean(): any
}
