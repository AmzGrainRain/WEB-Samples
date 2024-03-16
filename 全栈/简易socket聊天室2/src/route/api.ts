import { Router } from 'express'
import SvgCaptcha from 'svg-captcha'
import { userAlreadyExists, verifyLogin, queryUserInfo, registUser } from '../modules/DBO'
import { responseTemplate } from '../modules/utils'
import { STATUS } from '../types'

const app = Router()

app.get('/authorized', (req, res) => {
  if (!req.session?.authorized || !req.session?.uid) res.json(responseTemplate(STATUS.NotLoggedIn))
  else res.json(responseTemplate(STATUS.OK))
})

// login
app.post('/login', async (req, res) => {
  if (!req.session?.captcha || !req.body?.captcha || !req.body?.email || !req.body?.password) {
    res.json(responseTemplate(STATUS.PrarmeterError))
    return
  }

  if (req.body.captcha.toLowerCase() !== req.session.captcha.toLocaleLowerCase()) {
    req.session.captcha = ''
    res.json(responseTemplate(STATUS.CaptchaFailed))
    return
  }

  const vfres = await verifyLogin(req.body.email, req.body.password)
  if (!vfres) {
    res.json(responseTemplate(STATUS.LoginFailed))
    return
  }

  req.session.authorized = true
  req.session.uid = vfres.email
  res.json(responseTemplate(STATUS.OK))
})

// logout
app.get('/logout', (req, res) => {
  if (!req.session?.authorized || !req.session?.uid) {
    res.json(responseTemplate(STATUS.OK))
    return
  }

  req.session.authorized = false
  req.session.uid = ''
  req.session.captcha = ''
  res.json(responseTemplate(STATUS.OK))
})

// register
app.post('/register', async (req, res) => {
  if (!req.session?.captcha || !req.body?.captcha || !req.body?.email || !req.body?.password) {
    res.json(responseTemplate(STATUS.PrarmeterError))
    return
  }

  if (req.body.captcha.toLocaleLowerCase() !== req.session.captcha.toLocaleLowerCase()) {
    req.session.captcha = ''
    res.json(responseTemplate(STATUS.CaptchaFailed))
    return
  }

  if (await userAlreadyExists(req.body.email)) {
    res.json(responseTemplate(STATUS.UserAlreadyExists))
    return
  }

  registUser(req.body.email, req.body.password).then(() => {
    res.json(responseTemplate(STATUS.OK))
  })
})

// generate captcha
app.get('/captcha/generate', (req, res) => {
  const captcha = SvgCaptcha.create({ ignoreChars: 'il1oO0' })
  req.session.captcha = captcha.text
  res.type('svg').status(200).end(captcha.data)
})

// get user information
app.post('/info', async (req, res) => {
  if (!req.session?.authorized || !req.session?.uid) {
    res.json(responseTemplate(STATUS.PrarmeterError))
    return
  }

  const info = await queryUserInfo(req.session.uid)
  if (!info) {
    res.json(responseTemplate(STATUS.UserNotExists))
    return
  }
  res.json(responseTemplate(STATUS.OK, info))
})

export { app as PrefixAPI }
