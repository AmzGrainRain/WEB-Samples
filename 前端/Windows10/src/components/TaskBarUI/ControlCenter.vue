<script lang="ts" setup>
import { ref } from 'vue'
import { useGlobalStore } from '../../store'

const store = {
  global: useGlobalStore()
}

const data = {
  brightnessBarProgress: 50
}
const brightnessBarRange = ref(null)
const brightnessBarThumb = ref(null)

</script>

<template>
  <div id="control-center-ui" class="position-fixed blur p-ex overflow-hide" :class="{'show': store.global.status.showControlCenterUI}">
    <!-- 右上角标题 -->
    <h2 class="title text-size-m text-right text-weight-normal">管理通知</h2>

    <!-- 通知中心 -->
    <div class="notification-list d-flex p-tb-lg">
      <p class="text-size-sm">没有新的通知</p>
    </div>

    <!-- 磁贴图标 -->
    <ul class="tiles d-flex text-size-m">
      <li>位置</li>
      <li>蓝牙</li>
      <li>护眼模式</li>
      <li>就近分享</li>
      <li>所有设置</li>
      <li>网络</li>
      <li>连接</li>
      <li>专注助手</li>
    </ul>

    <!-- 亮度滑动条 -->
    <div class="brightness-bar d-flex">
      <box-icon name="sun" color="#ffffff"></box-icon>
      <div class="line position-relative m-l-lg">
        <div ref="brightnessBarRange" @drag="" class="range h-100 position-absolute"></div>
        <div ref="brightnessBarThumb" class="thumb position-absolute"></div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#control-center-ui
  top 0
  right 0
  width 400px
  min-width 300px
  height calc(100% - 34px)
  background-color #1f1f1fed
  transition .7s cubic-bezier(0, 1, .3, 1)
  transform translateX(100%)
  h2.title
    color #d5d4ff
    height 16px
  .notification-list
    justify-content center
    align-items center
    height calc(100% - 16px - 130px - 80px)
    p
      opacity 0
  ul.tiles
    height 130px
    flex-wrap wrap
    align-content space-between
    justify-content space-between
    align-items stretch
    li
      width 89px
      height 63px
      box-sizing border-box
      background-color #4c4d4e
      &:hover
        border 1.5px solid #aaa
        background-color #7c7c7d
  div.brightness-bar
    height 80px
    align-content center
    justify-content center
    flex-wrap nowrap
    flex-direction row
    align-items center
    .line
      width 246px
      height 2px
      background-color #7c7c7d
      .range
        top 0
        left 0
        background-color #6b69d6
      .thumb
        top 0
        left 0
        width 8px
        height 22px
        background-color #6b69d6
        border-radius 4px
        transform translateY(-10px)
.show
  transform translateX(0) !important
  .notification-list p
    animation fadeIn .8s .2s forwards

@keyframes fadeIn
  0%
    opacity 0
  100%
    opacity 1
</style>
