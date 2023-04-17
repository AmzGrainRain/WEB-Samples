<script lang='ts' setup>
import Icons from '../icons.vue'
import { assumeFile } from '../../utils'
import { DataType } from '../../types/floor-box'
import BoxHead from './box-head.vue'

defineProps<{ readonly data: DataType }>()
</script>

<template>
  <div class='container'>
    <BoxHead :title='data.title' :description='data.description' :more='data.more' />

    <div class='content'>
      <div>
        <img :src='assumeFile(data.banner.image)' :alt='data.banner.alt'>
        <div class='mask'></div>
        <a :href='data.banner.url'>
          <span>{{ data.banner.text }}</span>
          <Icons offset-x='6px' offset-y='2px' :size='20' icon='arrow-right-dashed' />
        </a>
      </div>
      <ul>
        <li v-for='(item, index) in data.list' :key='index'>
          <div class='img-box'>
            <img :src='assumeFile(item.image)' :alt='item.title'>
          </div>
          <div class='info'>
            <p class='text-overflow-ellipsis' :title='item.title'>{{ item.title }}</p>
            <span class='tag text-overflow-ellipsis'>{{ item.tag }}</span>
            <span class='price'>{{ item.price }}</span>
            <i>已售 {{ item.selled }} 件</i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
div.container
  margin 0 auto
  width 1200px

  div.right
    color #71797F

    a
      padding-right 8px

  div.content
    margin-top 16px
    display flex
    justify-content space-between
    flex-wrap wrap
    width 1200px
    height fit-content

    & > div
      position relative
      width 288px
      height 656px

      img
        width 100%
        height 100%

      div.mask
        position absolute
        left 0
        bottom 0
        width 100%
        height 200px
        background linear-gradient(#0000, #0005)

      a
        display flex
        justify-content center
        align-items center
        position absolute
        left 0
        right 0
        bottom 16px
        margin auto
        padding 8px
        width 240px
        height 60px
        color #fff
        font-weight bold
        font-size 22px
        border 2px solid #fff
        box-sizing border-box

    ul
      display flex
      justify-content space-between
      flex-flow row wrap
      align-content flex-start
      color #000
      padding-left 16px
      width calc(100% - 288px)

      li
        margin-bottom 16px
        width 212px
        transition .2s
        cursor pointer
        background-color #fff

        &:hover
          color #ff734c

        &:hover div.img-box img
          transform scale(1.05)

        div.img-box
          width 100%
          height 228px
          overflow hidden

          img
            width 100%
            height 100%
            object-fit cover
            transition .3s

        div.info
          padding 10px 8px 14px
          display flex
          flex-direction column
          align-items center

          p

            font-size 16px

          span
          i
            display block

          span.tag
            margin-top 4px
            padding 0 10px
            width fit-content
            color #ff734c
            border 1px solid #ff734c
            border-radius 20px
            background-color #fff0ec

          span.price
            margin-top 4px
            font-weight bold

          i
            font-style normal
            margin-top 4px
            font-size 12px
</style>