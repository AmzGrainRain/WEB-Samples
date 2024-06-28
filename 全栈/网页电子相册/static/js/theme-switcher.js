class ThemeManager {
  constructor() {
    this.rootEl = document.querySelector('#theme')
    this.theme = localStorage.getItem('theme') || 'light'

    if (this.theme === 'light') {
      this.enableLightMode()
    }
    else {
      this.enableDarkMode()
    }
  }

  isLightMode() {
    return this.theme === 'light'
  }

  isDarkMode() {
    return this.theme === 'dark'
  }

  enableDarkMode() {
    this.rootEl.href = './css/theme/dark.css'
    this.theme = 'dark'
    localStorage.setItem('theme', 'dark')
  }

  enableLightMode() {
    this.rootEl.href = './css/theme/light.css'
    this.theme = 'light'
    localStorage.setItem('theme', 'light')
  }

  switchTheme() {
    if (this.isLightMode()) {
      this.enableDarkMode()
    } else {
      this.enableLightMode()
    }
  }
}


const themeManager = new ThemeManager()
const themeSwitchButton = document.querySelector('#switch-theme')

const updateThemeButtonStyle = () => {
  if (themeManager.isLightMode()) {
    themeSwitchButton.children[0].style.display = 'block'
    themeSwitchButton.children[1].style.display = 'none'
  }
  else {
    themeSwitchButton.children[0].style.display = 'none'
    themeSwitchButton.children[1].style.display = 'block'
  }
}
updateThemeButtonStyle()

themeSwitchButton.addEventListener('click', () => {
  themeManager.switchTheme()
  updateThemeButtonStyle()
})
