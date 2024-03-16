import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import home from '../App.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: home
  }
]

export default createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL as string),
  linkActiveClass: 'router-link-active',
  routes
})
