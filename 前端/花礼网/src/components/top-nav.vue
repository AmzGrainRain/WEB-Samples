<script lang='ts' setup>
import Icon from './common/icons.vue'
</script>

<template>
  <nav>
    <div>
      <ul class='left'>
        <li>
          <Icon offset-y='1px' icon='favorite' />
          <a href='#'>收藏花礼网（hua.com）</a>
        </li>
        <li class='hover hover-dropdown-box'>
          <Icon offset-y='1px' icon='wechat' />
          <a href='#'>关注微信</a>
          <div class='dropdown-box'>
            <img src='../assets/follow_wechat.png' alt='follow_wechat'>
            <span>扫码关注</span>
            <span>回复“礼物”更多惊喜！</span>
          </div>
        </li>
        <li class='hover hover-dropdown-box'>
          <Icon offset-y='1px' icon='mobile-app' />
          <a href='#'>花礼网app</a>
          <div class='dropdown-box'>
            <img src='../assets/app.png' alt='follow_wechat'>
            <span>扫码关注</span>
          </div>
        </li>
      </ul>
      <ul class='right'>
        <li>
          <a href='#'>你好，请登录</a>
        </li>
        <li>
          <a href='#'>注册</a>
        </li>
        <li>
          <a href='#'>订单查询&nbsp;</a>
        </li>
        <li class='hover hover-arrow hover-dropdown-list'>
          <a href='#'>客户服务</a>
          <span class='arrow'></span>
          <ul>
            <li>
              <a href='#'>在线付款</a>
            </li>
            <li>
              <a href='#'>帮助中心</a>
            </li>
            <li>
              <a href='#'>售后服务</a>
            </li>
            <li>
              <a href='#'>配送范围</a>
            </li>
            <li>
              <a href='#'>留言反馈</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#'>购物车（0）</a>
        </li>
        <li>鲜花礼品网:国内领先鲜花网品牌</li>
      </ul>
    </div>
  </nav>
</template>

<style lang='stylus' scoped>
nav
  font-size 12px
  color #71797f
  background-color #f3f5f7
  box-sizing border-box

  & > div
    display flex
    justify-content space-between
    align-items center
    margin 0 auto
    width 1200px

  ul li
    float left
    position relative
    padding 0 10px
    line-height 40px

    span.arrow
      display inline-block
      width 8px
      height 8px
      background-image url('../assets/icons/top_nav_arrow.png')
      transition .2s

    div.dropdown-box
      display none
      padding 12px
      position absolute
      left 0
      width 140px
      height fit-content
      text-align center
      border 1px solid #E9ECF0
      border-top-color #0000
      background-color #fff
      line-height 20px
      z-index 999

      img
        width 100%

    ul
      display none
      position absolute
      left 0
      color #71797f
      padding-bottom 4px
      background-color #fff
      border 1px solid #e9ecf0
      border-top-color #0000

      li
        line-height 20px


    &.hover:hover
      background-color #fff

    &:hover > a
      color #FF734C

    &.hover-dropdown-box:hover .dropdown-box
      display block

    &.hover-dropdown-list:hover > ul
      display block

    &.hover-arrow:hover span
      transform rotate(180deg)
</style>