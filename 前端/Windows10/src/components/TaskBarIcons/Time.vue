<script lang="ts" setup>
import { reactive } from 'vue'

/**
 * Data
 */
interface Reactive {
  date: string
  time: string
}
const data = reactive<Reactive>({
  date: 'xxxx-xx-xx xxx',
  time: '00:00 AM'
})
const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const APM = ['AM', 'PM']
/**
 * Methods
 */
const updateTime = () => {
  const t = new Date()
  const Y = t.getFullYear()
  const M = t.getMonth() + 1 < 10 ? `0${t.getMonth() + 1}` : t.getMonth() + 1
  const D = t.getDate() < 10 ? `0${t.getDate()}` : t.getDate()
  let h: number = t.getHours()
  const m = t.getMinutes() < 10 ? `0${t.getMinutes()}` : t.getMinutes()
  let str = APM[0]
  if (h > 12) {
    h -= 12
    str = APM[1]
  }
  data.date = `${Y}年${M}月${D}日`
  data.time = `${h}:${m} ${str}`
}
/**
 * Init
 */
updateTime()
setInterval(() => {
  updateTime()
}, 1000)
</script>

<template>
  <div id="time" class="d-flex h-100" :title="data.date">{{ data.time }}</div>
</template>

<style lang="stylus" scoped>
#time
  justify-content center
  align-items center
  width 62px
  color inherit
  font-size small
  cursor default
  &:hover
    background #fff1
</style>
