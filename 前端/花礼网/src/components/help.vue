<script lang='ts' setup>
import Icons from './common/icons.vue'
import { assumeFile } from '../utils'
import { Data as DataType } from '../types/help'

defineProps<{ readonly data: DataType }>()
</script>

<template>
  <div class='com-help'>
    <div class='server'>
      <h4>客户服务</h4>
      <ul>
        <li v-for='(item, i) in data.services' :key='i'>
          <a class='hover' :href='item.url'>{{ item.text }}</a>
        </li>
      </ul>
    </div>
    <div class='info'>
      <h4>热门资讯</h4>
      <ul>
        <li v-for='(item, i) in data.information' :key='i'>
          <a class='hover' :href='item.url'>{{ item.text }}</a>
        </li>
      </ul>
    </div>
    <div class='cities'>
      <h4>同城鲜花专区</h4>
      <ul>
        <li v-for='(item, i) in data.cities' :key='i'>
          <a class='hover' :href='item.url'>{{ item.text }}</a>
        </li>
      </ul>
    </div>
    <div class='contact'>
      <h4>联系我们</h4>
      <ul>
        <li v-for='(item, i) in data.contact' :key='i'>
          <span v-if='item.type === "text"'>{{ item.text }}</span>
          <a v-else class='hover' :href='item.url'>
            <Icons offset-y='5px' :size='20' icon='contact' />
            <span>{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class='qrcode'>
      <div class='box' v-for='(item, i) in data.qrcodes' :key='i'>
        <img :src='assumeFile(item.image) as string' :alt='item.alt'>
        <span>{{ item.alt }}</span>
      </div>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
div.com-help
  margin 0 auto
  padding 40px 0
  width 1200px
  overflow hidden

  > div
    float left

    h4
      padding-bottom 8px
      font-size 16px

  div.server
  div.info
  div.cities
  div.contact
    width 197px

    li
      float left
      width 68px
      font-size 12px
      color #71797f
      line-height 24px

  div.info li
  div.contact li
    width 100%

  div.contact
    width 259px
    :deep(a)
      padding 8px 12px
      color #fff
      border-radius 16px
      background-color #ff734c

      span
        padding-left 2px

  div.qrcode
    padding-left 20px
    display flex
    width 322px
    div.box
      text-align center
      img
        width 120px
        height 120px
      span
        display block
    div.box:last-child
      margin-left 50px
</style>