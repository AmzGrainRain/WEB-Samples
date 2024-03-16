import { NavbarController } from './controllers/NavbarController.js'
import { PageSwitcher } from './controllers/PageSwitcher.js'
import { ChatHistoryManager } from './controllers/ChatHistoryManager.js'
import { ChatController } from './controllers/ChatController.js'
import { io } from './libs/socketio.js'
import { request } from './libs/request.js'
import { Message } from './controllers/Message.js'

let socket, userInfo

const init = async () => {
  const res = await (await fetch('/api/info', { method: 'post' })).json()
  if (res.message !== 'ok') {
    alert(res.message)
    return
  }
  NavbarController.setMotd(res.data.email)
  const info = res.data

  const s = io()
  s.on('disconnected', () => {
    NavbarController.setMotd('已断开连接')
  })
  s.on('client-join', (num) => {
    ChatController.setOnlinePerson(num)
  })
  s.on('client-leave', (num) => {
    ChatController.setOnlinePerson(num)
  })
  s.on('broadcast-message', (msg) => {
    const message = new Message(msg.uid, msg.ts, msg.target, msg.text)
    ChatController.append(message)
    ChatHistoryManager.saveToLocal(message)
  })

  ChatHistoryManager.loadFromLocal()

  return { info, s }
}


// 发送消息
const messageInputBox = document.querySelector('main > div.chat input[name=message]')
const sendMessageButton = document.querySelector('main > div.chat input[name=send]')
sendMessageButton.addEventListener('click', () => {
  if (messageInputBox.value.length === 0) return
  const message = new Message(socket.id, Date.now(), '', messageInputBox.value)
  socket.emit('new-message', {
    uid: message.id,
    target: '',
    text: message.text
  })
  ChatController.append(message)
  ChatHistoryManager.saveToLocal(message)
})

// 导航栏注册按钮
const navRegisterButton = document.querySelector('nav input.register')
navRegisterButton.addEventListener('click', () => {
  PageSwitcher.set('register')
})

// 导航登录按钮
const navLoginButton = document.querySelector('nav input.login')
navLoginButton.addEventListener('click', () => {
  PageSwitcher.set('login')
})

// 导航注销登录按钮
const navLogoutButton = document.querySelector('nav input.logout')
navLogoutButton.addEventListener('click', () => {
  fetch('/api/logout', {
    method: 'get'
  })
    .then((ori) => {
      PageSwitcher.set('login')
    })
})

// 注册验证码刷新
const registCaptcha = document.querySelector('main > div.register img')
registCaptcha.addEventListener('click', () => {
  PageSwitcher.refreshRegisterPageCaptcha()
})

// 注册
const registerButton = document.querySelector('main > div.register > input[name=login]')
registerButton.addEventListener('click', () => {
  const emailEl = document.querySelector('body > main > div.register input[name=email]')
  const passwordEl = document.querySelector('body > main > div.register input[name=password]')
  const confirmEl = document.querySelector('body > main > div.register input[name=confirm]')
  const captchaEl = document.querySelector('body > main > div.register input[name=captcha]')

  if (!emailEl.checkValidity()) {
    alert('无效的电子邮件地址')
    return
  }
  if (!passwordEl.checkValidity() || !confirmEl.checkValidity()) {
    alert('密码长度必须大于或等于 8 位')
    return
  }
  if (passwordEl.value !== confirmEl.value) {
    alert('两次输入的密码不一致')
    return
  }
  if (captchaEl.value.length !== 4) {
    alert('验证码格式错误')
    return
  }

  request('/api/register', {
    email: emailEl.value,
    password: passwordEl.value,
    captcha: captchaEl.value
  })
    .then((ori) => ori.json())
    .then((res) => {
      if (res.message !== 'ok') {
        alert(res.message)
        captchaEl.value = ''
        PageSwitcher.refreshRegisterPageCaptcha()
        return
      }
      alert('注册成功')
      location.reload()
    })
})

// 登录验证码刷新
const loginCaptcha = document.querySelector('main > div.login img')
loginCaptcha.addEventListener('click', () => {
  PageSwitcher.refreshLoginPageCaptcha()
})

// 登录
const loginButton = document.querySelector('main > div.login input[name=login]')
loginButton.addEventListener('click', () => {
  const emailEl = document.querySelector('main > div.login input[name=email]')
  const passwordEl = document.querySelector('main > div.login input[name=password]')
  const captchaEl = document.querySelector('main > div.login input[name=captcha]')

  if (!emailEl.checkValidity()) {
    alert('无效的电子邮件地址')
    return
  }
  if (!passwordEl.checkValidity()) {
    alert('密码长度必须大于或等于 8 位')
    return
  }
  if (captchaEl.value.length !== 4) {
    alert('验证码格式错误')
    return
  }

  request('/api/login', {
    email: emailEl.value,
    password: passwordEl.value,
    captcha: captchaEl.value
  })
    .then((ori) => ori.json())
    .then(async (res) => {
      if (res.message !== 'ok') {
        alert(res.message)
        captchaEl.value = ''
        PageSwitcher.refreshLoginPageCaptcha()
        return
      }
      alert('登录成功')
      NavbarController.loggedIn()
      PageSwitcher.set('chat')
      const { info, s } = await init()
      userInfo = info
      socket = s
    })
})

fetch('/api/authorized')
  .then((ori) => ori.json())
  .then(async (res) => {
    if (res.message !== 'ok') {
      NavbarController.notLogin()
      PageSwitcher.set('login')
    } else {
      NavbarController.loggedIn()
      PageSwitcher.set('chat')
      const { info, s } = await init()
      userInfo = info
      socket = s
    }
  })
