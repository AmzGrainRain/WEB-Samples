import { NavbarController } from './NavbarController.js'
import { SuperSelector } from '../libs/SuperSelector.js'

class PageSwitcher {
  static navDOM = document.querySelector('nav')
  static pages = {
    login: new SuperSelector('main > div.login').element,
    regist: new SuperSelector('main > div.register').element,
    chat: new SuperSelector('main > div.chat').element
  }

  static maskAll() {
    this.pages.login.mask('flex')
    this.pages.regist.mask('flex')
    this.pages.chat.mask('flex')
  }

  static refreshLoginPageCaptcha() {
    const captchaImgEl = document.querySelector('main > div.login img')
    captchaImgEl.setAttribute('src', `/api/captcha/generate?ts=${Date.now().toString()}`)
  }

  static refreshRegisterPageCaptcha() {
    const captchaImgEl = document.querySelector('main > div.register img')
    captchaImgEl.setAttribute('src', `/api/captcha/generate?ts=${Date.now().toString()}`)
  }

  static set(pageName) {
    this.maskAll()
    switch (pageName) {
      case 'login':
        NavbarController.notLogin()
        PageSwitcher.refreshLoginPageCaptcha()
        this.pages.login.unmask()
        break
      case 'register':
        NavbarController.notLogin()
        PageSwitcher.refreshRegisterPageCaptcha()
        this.pages.regist.unmask()
        break
      case 'chat':
        NavbarController.loggedIn()
        this.pages.chat.unmask()
        break
      default:
        NavbarController.notLogin()
        PageSwitcher.refreshLoginPageCaptcha()
        this.pages.login.unmask()
        break
    }
  }
}

export { PageSwitcher }
