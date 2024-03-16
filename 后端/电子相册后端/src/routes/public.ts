import SvgCaptcha from 'svg-captcha'

import { Router } from 'express'
import CheckCaptcha from '../middleware/check_captcha'
import CheckLogin from '../middleware/check_login'
import CheckPassword from '../middleware/check_password'

import { responseTemplate } from '../common/template'
import { STATUS } from '../common/status'
import ConfigController from '../modules/ConfigController'

const app = Router()
const printError = console.error.bind(console, '[PUBLIC API] ')

app.get('/authorized', CheckLogin, (_req, res) => {
  res.json(responseTemplate(STATUS.OK))
})

app.get('/captcha', (req, res) => {
  const captcha = SvgCaptcha.create({ size: 6, color: true, noise: 3 })
  req.session.captcha = captcha.text
  res.type('svg').status(200).end(captcha.data)
})

app.post('/login', CheckCaptcha, async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    next(new Error(STATUS.BAD_REQUEST))
    return
  }

  try {
    const cc = ConfigController.getInstance() // maybe got an error.
    const conf = await cc.get()
    if (!conf) {
      printError('读取配置文件失败')
      next(new Error(STATUS.INTERNEL_ERROR))
      return
    }

    if (req.body.email !== conf.user.email || req.body.password !== conf.user.password) {
      res.json(responseTemplate(STATUS.INCORRECT_EMAIL_OR_PASSWORD))
      return
    }

    req.session.authorized = true
    res.json(responseTemplate(STATUS.OK))
  } catch (err) {
    printError(err)
    next(STATUS.INTERNEL_ERROR)
  }
})

app.post('/user/update', CheckCaptcha, CheckPassword, async (req, res, next) => {
  if (!req.body.update || !req.body.newValue) {
    next(STATUS.BAD_REQUEST)
    return
  }

  const key: string = req.body.update
  const value: string = req.body.newValue

  try {
    const cc = ConfigController.getInstance() // maybe got an error.
    const conf = await cc.get()
    if (!conf) {
      printError('读取配置文件失败')
      next(STATUS.INTERNEL_ERROR)
      return
    }

    conf.user[key] = value
    if (!await cc.save(conf)) {
      printError('保存配置文件失败')
      next(STATUS.INTERNEL_ERROR)
      return
    }

    if (key === 'password') req.session.authorized = false
    res.json(responseTemplate(STATUS.OK))
  } catch (err) {
    printError(err)
    next(STATUS.INTERNEL_ERROR)
  }
})

app.post('/user/info', CheckLogin, async (_req, res, next) => {
  try {
    const cc = ConfigController.getInstance() // maybe got an error.
    const conf = await cc.get()
    if (!conf) {
      printError('读取配置文件失败')
      next(new Error(STATUS.INTERNEL_ERROR))
      return
    }

    res.json(
      responseTemplate(STATUS.OK, {
        name: conf.user.name,
        email: conf.user.email,
        avator: conf.user.avator
      })
    )
  } catch (err) {
    printError(err)
    next(new Error(STATUS.INTERNEL_ERROR))
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json(responseTemplate(STATUS.OK))
  })
})

export { app as PublicAPI }
