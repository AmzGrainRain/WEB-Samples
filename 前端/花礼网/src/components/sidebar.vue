<script lang='ts' setup>
import Icons from './common/icons.vue'
import { ref, onMounted, Ref } from 'vue'

const el = ref()
const fixed: Ref<boolean> = ref(false)

onMounted(() => {
  window.addEventListener('scroll', (e) => {
    console.log(`距离顶部：${window.scrollY}`)
    fixed.value = window.scrollY >= 780
  })
})
</script>

<template>
  <ul class='com-sidebar' :class='{ "fixed": fixed }' ref='el'>
    <li class='qrcode'>
      <a href='#'>
        <Icons :size='20' icon='qrcode' />
        <span>APP/微信</span>
      </a>

      <div class='box'>
        <div>
          <img src='../assets/follow_wechat.png' alt='关注微信'>
          <span class='title'>关注公众号有好礼</span>
        </div>
        <div>
          <img src='../assets/app.png' alt='手机app'>
          <span class='title'>下载花礼APP</span>
          <span class='sub-title'>随时随地看商品</span>
        </div>
      </div>
    </li>
    <li>
      <a href='#'>
        <i class='iconfont icon-buy'></i>
        <span>购物车</span>
      </a>
    </li>
    <li>
      <a href='#'>
        <i class='iconfont icon-feedback'></i>
        <span>在线客服</span>
      </a>
    </li>
    <li class='phone'>
      <a href='#'>
        <i class='iconfont icon-tel'></i>
        <span>联系电话</span>
      </a>

      <div class='box'>
        <span>400-889-8188</span>
      </div>
    </li>
    <li>
      <a href='#'>
        <i class='iconfont icon-feedback'></i>
        <span>意见反馈</span>
      </a>
    </li>
    <li>
      <a href='#com-top-banner'>
        <i class='iconfont icon-top'></i>
        <span>回顶部</span>
      </a>
    </li>
  </ul>
</template>

<style lang='stylus' scoped>
ul.com-sidebar
  position absolute
  top 780px
  right 48px
  font-size 12px
  border 1px solid #e9ecf0
  background-color #fff

  li
    border-bottom 1px solid #e9ecf0

    a
      display flex
      justify-content center
      align-items center
      align-content center
      flex-flow column wrap
      width 60px
      height 60px

      &:hover
        color #ff734c

    &:last-child
      border-bottom 0


  li.qrcode
  li.phone
    position relative

    &:hover div.box
      display block

    div.box
      position absolute
      top 0
      right 70px
      display none
      padding 12px
      border 1px solid #e9ecf0
      border-radius 8px
      background-color #fff

  li.qrcode div.box
    padding 12px

    div
      display flex
      justify-content center
      align-items center
      align-content center
      flex-flow column wrap

      &:last-child
        padding-top 8px

      img
        width 104px
        height 104px

      span.title
        font-weight bold

      span.sub-title
        color #71797f

  li.phone div.box
    margin auto
    bottom 0
    width 120px
    height fit-content
    color #71797f
    font-size 14px
    text-align center

ul.fixed
  position fixed
  top 16px
  right 48px
</style>

<style lang='stylus' scoped>
@font-face
  font-family "iconfont"
  font-display swap
  src url('../assets/icons/iconfont.woff2') format('woff2')

.iconfont
  font-family "iconfont" !important
  font-size 20px
  color #71797f
  font-style normal
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.icon-top:before
  content "\e632"

.icon-tel:before
  content "\e64e"

.icon-feedback:before
  content "\e616"

.icon-buy:before
  content "\e63f"

.icon-sevice:before
  content "\e64b"
</style>