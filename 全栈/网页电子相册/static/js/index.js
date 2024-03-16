import './onload.js'
import './utils/ClickEvents.js'

import reactive from './lib/Reactive.js'
import { reqImages } from './lib/Request.js'

import MainContentTemplate from './utils/MainContentTemplate.js'


/**
 * 模式数据
 */
window.Mode = reactive('all', (target, key, newValue) => {
  // 请求数据
  reqImages(window.Page.value, newValue).then((res) => {
    if (res.length !== 0) {
      // 应用修改
      target[key] = newValue
      // 更新页码显示
      El.pageNumber.innerHTML = `第 ${Page.value + 1} 页`
      // 更新导航栏
      El.navHome.classList.remove('active')
      El.navFavorite.classList.remove('active')
      if (newValue === 'all') El.navHome.classList.add('active')
      else El.navFavorite.classList.add('active')
      // 更新内容
      let html = ''
      res.forEach((e) => {
        html += MainContentTemplate(e)
      })
      El.mainContent.innerHTML = html
    } else alert('到底啦！')
  })
})


/**
 * 页码数据
 */
window.Page = reactive(false, (target, key, newValue) => {
  if (newValue < 0) return false

  // 请求数据
  reqImages(newValue, window.Mode.value).then((res) => {
    if (res.length !== 0) {
      // 应用修改
      target[key] = newValue
      // 更新页码显示
      El.pageNumber.innerHTML = `第 ${newValue + 1} 页`
      // 更新内容
      let html = ''
      res.forEach((e) => {
        html += MainContentTemplate(e)
      })
      El.mainContent.innerHTML = html
    } else alert('到底啦！')
  })
})
