import { Router } from 'express'

import CheckLogin from '../middleware/check_login'

import { STATUS } from '../common/status'

import MongoFactory from '../modules/MongoFactory'
import { SchemaList } from '../modules/MongoFactory/BaseSchema'
import { responseTemplate } from '../common/template'
import { ImageFile } from '../common/types'

const app = Router()
const printError = console.error.bind(console, '[ANNOTATION API] ')

app.post('/add', CheckLogin, async (req, res, next) => {
  const id: string | null = req.body.id
  const tags: string[] | null = req.body.tag

  if (!id || !tags || tags.length === 0) {
    next(new Error(STATUS.BAD_REQUEST))
    return
  }

  const schema = MongoFactory.get(SchemaList.Image)
  if (!schema) {
    next(new Error(STATUS.INTERNEL_ERROR))
    return
  }

  try {
    const model = schema.getModel()
    const doc = await model.findByIdAndUpdate<ImageFile>(
      id,
      { $push: { tags: { $each: tags } } },
      { new: true, useFindAndModify: false }
    )

    if (!doc) {
      printError('无法更新数据')
      next(new Error(STATUS.INTERNEL_ERROR))
      return
    }

    res.json(responseTemplate(STATUS.OK, doc.tags))
  } catch (err) {
    printError(err)
    next(err)
  }
})

app.post('/remove', async (req, res, next) => {
  const id: string | null = req.body.id
  const tags: string[] | null = req.body.tags

  if (!id || !tags || tags.length === 0) {
    next(new Error(STATUS.BAD_REQUEST))
    return
  }

  const schema = MongoFactory.get(SchemaList.Image)
  if (!schema) {
    next(new Error(STATUS.INTERNEL_ERROR))
    return
  }

  try {
    const model = schema.getModel()
    const doc = await model.findByIdAndUpdate<ImageFile>(
      id,
      { $pullAll: { tags } },
      { new: true, useFindAndModify: false }
    )

    if (!doc) {
      printError('无法更新数据')
      next(new Error(STATUS.INTERNEL_ERROR))
      return
    }

    res.json(responseTemplate(STATUS.OK, doc.tags))
  } catch (err) {
    printError(err)
    next(err)
  }
})

app.post('/clear', async (req, res, next) => {
  const id: string | null = req.body.id

  if (!id) {
    next(new Error(STATUS.BAD_REQUEST))
    return
  }

  const schema = MongoFactory.get(SchemaList.Image)
  if (!schema) {
    next(new Error(STATUS.INTERNEL_ERROR))
    return
  }

  try {
    const model = schema.getModel()
    const doc = await model.findByIdAndUpdate<ImageFile>(
      id,
      { $set: { tags: [] } },
      { new: true, useFindAndModify: false }
    )

    if (!doc) {
      printError('无法更新数据')
      next(new Error(STATUS.INTERNEL_ERROR))
      return
    }

    res.json(responseTemplate(STATUS.OK, doc))
  } catch (err) {
    printError(err)
    next(err)
  }
})

export { app as AnnotationAPI }
