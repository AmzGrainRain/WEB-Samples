import { remove } from 'fs-extra'
import { Router } from 'express'
import CheckLogin from '../middleware/check_login'
import FileUploader from '../middleware/file_uploader'
import { UploadedFile } from 'express-fileupload'
// common
import { responseTemplate } from '../common/template'
import { STATUS } from '../common/status'
import { ImageFile } from '../common/types'
// uploader
import UploaderFactory from '../modules/Uploader'
import ImageUploader from '../modules/Uploader/ImageUploader'
// factory
import { SchemaList } from '../modules/MongoFactory/BaseSchema'
import ImageSchema from '../modules/MongoFactory/ImageSchema'
import MongoFactory from '../modules/MongoFactory'

const app = Router()
const printError = console.error.bind(console, '[IMAGE API] ')

app.post('/upload', CheckLogin, FileUploader, async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    next(new Error(STATUS.BAD_REQUEST))
    return
  }

  const uploader = UploaderFactory.get(req.files.upload as UploadedFile)
  if (!uploader || !(uploader instanceof ImageUploader)) {
    next(new Error(STATUS.UNSUPPORTED_FILE_FORMAT))
    return
  }

  if (!(await uploader.scan())) {
    next(new Error(STATUS.INTERNEL_ERROR))
    return
  }

  if (!(await uploader.upload())) {
    printError('无法从缓存取出图片')
    next(new Error(STATUS.INTERNEL_ERROR))
    return
  }

  await uploader.genPreviewImage()

  const imageSchema = MongoFactory.get(SchemaList.Image)
  if (!imageSchema || !(imageSchema instanceof ImageSchema)) {
    uploader.clean()
    printError('无法获得数据库对象')
    next(new Error(STATUS.INTERNEL_ERROR))
    return
  }

  const image = uploader.getImageProperty() as ImageFile
  imageSchema
    .insertOne({
      name: image.name,
      type: image.type,
      path: image.path,
      size: image.size,
      createAt: image.createAt,
      preview_image_path: '',
      width: image.width,
      height: image.height,
      tags: []
    })
    .then(() => res.json(responseTemplate(STATUS.OK, image)))
    .catch(rea => {
      uploader.clean()
      printError(rea)
      res.json(responseTemplate(STATUS.INTERNEL_ERROR))
    })
})

app.post('/delete', CheckLogin, async (req, res, next) => {
  if (!req.body.id) {
    next(new Error(STATUS.BAD_REQUEST))
    return
  }

  const imageSchema = MongoFactory.get(SchemaList.Image)
  if (!imageSchema || !(imageSchema instanceof ImageSchema)) {
    printError('无法获得数据库对象')
    next(new Error(STATUS.INTERNEL_ERROR))
    return
  }

  const model = imageSchema.getModel()
  const image = await model.findById(req.body.id).exec()
  if (!image) {
    next(new Error(STATUS.NOT_FOUND))
    return
  }

  try {
    await remove(image.path)
    await remove(image.preview_image_path)
    await model.findByIdAndDelete(req.body.id).exec()
    res.json(responseTemplate(STATUS.OK))
  } catch (err) {
    printError(err)
    next(STATUS.INTERNEL_ERROR)
  }
})

export { app as ImageAPI }
