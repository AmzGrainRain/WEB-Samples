import { resolve as resolvePath } from 'node:path'
import { remove } from 'fs-extra'
import sharp, { Sharp, format as SharpFormat } from 'sharp'
import { UploadedFile } from 'express-fileupload'
import { ImageFile } from '../../common/types'
import BaseUploader from './BaseUploader'

export default class ImageUploader extends BaseUploader {
  private readonly sharp_: Sharp
  private imageDir: string
  private previewImageDir: string
  private imageProperty: ImageFile | undefined
  public readonly getImageProperty = (): ImageFile | undefined => this.imageProperty

  public constructor(file: UploadedFile) {
    super(file)
    this.sharp_ = sharp(file.tempFilePath)
    this.imageDir = resolvePath(__dirname, '../data/image')
    this.previewImageDir = resolvePath(__dirname, '../cache/image')
  }

  /**
   * 扫描文件属性
   */
  public async scan(): Promise<boolean> {
    try {
      const md = await this.sharp_.metadata()
      if (!md.format || !md.width || !md.height || !md.size) throw new Error('扫描图像属性失败')

      this.imageProperty = {
        name: this.fileName,
        type: md.format,
        path: this.filePath,
        size: this.file.size,
        createAt: Date.now(),
        preview_image_path: '',
        width: md.width,
        height: md.height,
        tags: []
      }

      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  /**
   * 将图片从缓存目录移动到 /data/image/
   */
  public async upload(): Promise<boolean> {
    if (!this.imageProperty) return false
    this.imageProperty.path = `${this.imageDir}/${this.fileName}.${this.imageProperty.type}`

    try {
      await this.file.mv(this.imageProperty.path)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  public async genPreviewImage(): Promise<boolean> {
    if (!this.imageProperty) return false

    try {
      this.sharp_.toFormat(SharpFormat.webp, { quality: 70 })
      await this.sharp_.toFile(`${this.previewImageDir}/${this.fileName}.webp`)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  public async clean(): Promise<boolean> {
    try {
      await remove(this.filePath)
      if (this.imageProperty) await remove(this.imageProperty.path)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }
}
