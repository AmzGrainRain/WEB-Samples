import { extname as getExtName } from 'node:path'
import { UploadedFile } from 'express-fileupload'
import { SupportedImageTypes, SupportedVideoTypes } from '../../common/types'
import BaseUploader from './BaseUploader'
import ImageUploader from './ImageUploader'
import VideoUploader from './VideoUploader'

let imageUploader: ImageUploader | undefined
let videoUploader: VideoUploader | undefined

export default class UploaderFactory {
  public static get(file: UploadedFile): BaseUploader | undefined {
    const fileType = getExtName(file.name)

    try {
      if (SupportedImageTypes.has(fileType)) {
        if (!imageUploader) imageUploader = new ImageUploader(file) // maybe got an error.
        return imageUploader
      }

      if (SupportedVideoTypes.has(fileType)) {
        if (!videoUploader) videoUploader = new VideoUploader(file) // maybe got an error.
        return videoUploader
      }
    } catch(err) {
      console.error(err)
    }

    return undefined
  }
}
