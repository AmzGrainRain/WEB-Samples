<script lang='ts' setup>
import Icons from './common/icons.vue'
import Split from './common/split.vue'
import { Data as DataType } from '../types/footer'

defineProps<{ readonly data: DataType }>()
</script>

<template>
  <footer>
    <div class='container'>
      <ul class='nav'>
        <li v-for='(item, i) in data.links' :key='i'>
          <a class='hover' :href='item.url'>{{ item.text }}</a>
        </li>
      </ul>

      <Split height='20px' />

      <div class='cert'>
        <p>
          <a href='#'>中国花卉协会会员</a>
          <a href='#'>中国电子商务协会会员</a>
          <span>ICP经营许可证：</span>
          <a href='#'>粤B2-20050744</a>
          <a href='#'>粤ICP备09171662号</a>
          <Icons offset-y='5px' :size='20' icon='beian' />
          <span>粤公网安备44030502000373号 Copyright © 2005-2020</span>
        </p>
        <p>
          <span>花礼网&nbsp;</span>
          <a href='#'>www.hua.com</a>
          <span>&nbsp;中国领先的鲜花礼品网，品牌鲜花网服务，鲜花速递专家！</span>
        </p>
      </div>

      <Split height='5px' />

      <div class='icons'>
        <Icons margin='0 8px 0 0' :customSize='true' :width='149' :height='40' icon='slogan' />
        <Icons margin='0 8px 0 0' :customSize='true' :width='123' :height='40' icon='top100' />
        <Icons margin='0 8px 0 0' :customSize='true' :width='33' :height='40' icon='icp' />
        <img src='../assets/govIcon.gif' alt=''>
      </div>
      <ul class='friend-link'>
        <li style='font-weight: bold'>友链</li>
        <li v-for='(item, i) in data.friendLinks' :key='i'>
          <a class='hover' :href='item.url'>{{ item.text }}</a>
        </li>
      </ul>

    </div>
  </footer>
</template>

<style lang='stylus' scoped>
footer
  background-color #232628

  div.container
    padding 40px 0 46px
    margin 0 auto
    width 1200px
    color #fff

    ul.nav
      overflow hidden

      li
        padding 0 32px
        float left
        font-size 16px
        border-right 1px solid #fff

        &:first-child
          padding-left 0

        &:last-child
          padding-right 0
          border-right 0

    div.cert
      font-size 12px
      line-height 20px
      color #71797f

    div.icons img
      width 30px
      height 40px

      a
        margin-right 4px

        &:hover
          color #ff734c

    ul.friend-link
      margin-top 5px
      font-size 12px
      color #71797f
      overflow hidden

      li
        float left
        margin-right 4px
</style>