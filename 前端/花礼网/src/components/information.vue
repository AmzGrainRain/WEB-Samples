<script lang='ts' setup>
import { Link } from '../types/common'

defineProps<{
  readonly data: Link[]
}>()
</script>

<template>
  <div class='com-information'>
    <header>
      <h4>
        <span>热门资讯</span>
        <a href='#'>更多&nbsp;&gt;</a>
      </h4>
    </header>
    <ul>
      <li v-for='(item, i) in data' :key='i'>
        <a class='hover' :href='item.url'>{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang='stylus' scoped>
div.com-information
  margin 0 auto
  width 1200px
  background-color #fff
  header
    padding 0 32px
    border-bottom 1px solid #e9ecf0
    h4
      display flex
      justify-content space-between
      font-size 20px
      line-height 52px
      a
        font-size 14px
        font-weight normal
        color #71797f
  ul
    padding 8px 0
    overflow hidden
    li
      padding-left 42px
      position relative
      float left
      width 400px
      font-size 12px
      line-height 28px
      box-sizing border-box
      &:before
        position: absolute
        content ""
        left 32px
        top 12px
        width 4px
        height 4px
        border-radius 50%
        background-color #B4BABF
</style>