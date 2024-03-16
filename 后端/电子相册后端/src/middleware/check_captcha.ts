import { Request, Response, NextFunction } from 'express'
import { responseTemplate } from '../common/template'
import { STATUS } from '../common/status'

export default (req: Request, res: Response, next: NextFunction) => {
  const sessionCaptcha: string | undefined = req.session.captcha
  const userCaptcha: string | undefined = req.body.captcha

  if (!sessionCaptcha || !userCaptcha) {
    res.json(responseTemplate(STATUS.BAD_REQUEST))
    return
  }

  req.session.captcha = ''
  if (sessionCaptcha.toLowerCase() === userCaptcha.toLowerCase()) next()
  else res.json(responseTemplate(STATUS.INCORRECT_CAPTCHA))
}
