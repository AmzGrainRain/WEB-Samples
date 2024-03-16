import { SuperSelector } from '../libs/SuperSelector.js'

class NavbarController {
  static registerButton = new SuperSelector('nav input.register').element
  static loginButton = new SuperSelector('nav input.login').element
  static logoutButton = new SuperSelector('nav input.logout').element
  static motd = document.querySelector('nav h1.motd')

  /**
   * 将导航栏设置为未登录状态
   */
  static notLogin() {
    NavbarController.registerButton.show()
    NavbarController.loginButton.show()
    NavbarController.logoutButton.hide()
  }

  /**
   * 将导航栏设置为已登录状态
   */
  static loggedIn() {
    NavbarController.registerButton.hide()
    NavbarController.loginButton.hide()
    NavbarController.logoutButton.show()
  }

  /**
   * 更新导航栏的 MOTD 文字
   */
  static setMotd(str) {
    NavbarController.motd.innerHTML = str
  }
}

export { NavbarController }
