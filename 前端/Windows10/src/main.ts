import { createApp, toRaw } from 'vue'
import App from './App.vue'
import { createPinia, PiniaPluginContext } from 'pinia'


import './style.styl'
import 'boxicons'

// Pinia 初始化 & Pinia 数据持久化
const store = createPinia()

const piniaPlugin = () => {
  return (ctx: PiniaPluginContext) => {
    const { store } = ctx
    const key = `LightSP-${store.$id}`
    const data = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
    store.$subscribe(() => {
      localStorage.setItem(key, JSON.stringify(toRaw(store.$state)))
    })
    return { ...data }
  }
}
store.use(piniaPlugin())

createApp(App).use(store).mount('main')
