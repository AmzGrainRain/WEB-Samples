import El from './lib/Elements.js'

window.onload = () => {
  window.El = El
  
  if (El.theme.href.indexOf('light.css') !== -1) El.themeSwitcher.children[0].style.display = 'block'
  else El.themeSwitcher.children[1].style.display = 'block'
  
  // 初始化数据
  Page.value = 0
}