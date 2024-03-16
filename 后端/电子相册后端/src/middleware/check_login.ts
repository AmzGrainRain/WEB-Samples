import { Request, Response, NextFunction } from 'express'
import { responseTemplate } from '../common/template'
import { STATUS } from '../common/status'

export default (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.authorized || !req.session.uid) {
    res.json(responseTemplate(STATUS.UNAUTHORIZED))
    return
  }
  next()
}
