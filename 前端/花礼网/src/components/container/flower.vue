<script lang='ts' setup>
import Icons from '../common/icons.vue'
import BoxHead from './box-head.vue'
import ProductCard from '../common/card/goods.vue'
import { assumeFile } from '../../utils'
import { DataType } from '../../types/container/flower'

defineProps<{ readonly data: DataType }>()
</script>

<template>
  <div class='container'>
    <BoxHead :title='data.title' :description='data.description' :more='data.more' />

    <div class='content'>
      <div class='banner'>
        <img loading='lazy' :src='assumeFile(data.banner.image) as string' :alt='data.banner.alt'>
        <div class='mask'></div>
        <a :href='data.banner.url'>
          <span>{{ data.banner.text }}</span>
          <Icons offset-x='6px' offset-y='2px' :size='20' icon='arrow-right-dashed' />
        </a>
      </div>
      <ul>
        <li v-for='(item, index) in data.list' :key='index'>
          <ProductCard
            :head="{
              image: item.image,
              alt: item.title,
              url: item.url
            }"
            :info="{
              title: item.title,
              tag: item.tag,
              price: item.price,
              selled: item.selled
            }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
div.container
  margin 0 auto
  width 1200px

  div.content
    margin-top 16px
    display flex
    justify-content space-between
    flex-wrap wrap
    width 1200px
    height fit-content

    div.banner
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
</style>