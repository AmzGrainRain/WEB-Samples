import { Request, Response, NextFunction } from 'express'
import { responseTemplate } from '../common/template'
import { STATUS } from '../common/status'
import ConfigController from '../modules/ConfigController'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const conf = await ConfigController.getInstance().get()
    if (!conf) throw new Error('读取配置文件失败')

    if (req.body.email !== conf.user.email || req.body.password !== conf.user.password)
      throw new Error(STATUS.INCORRECT_EMAIL_OR_PASSWORD)

    next()
  } catch (err) {
    console.error(err)
    res.json(responseTemplate(STATUS.INTERNEL_ERROR))
  }
}
