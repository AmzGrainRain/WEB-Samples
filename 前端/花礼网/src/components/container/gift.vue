<script lang='ts' setup>
import BoxHead from './box-head.vue'
import Split from '../common/split.vue'
import Card from '../common/card/small.vue'
import ProductCard from '../common/card/goods-fillet.vue'
import { DataType } from '../../types/container/gift'

defineProps<{ readonly data: DataType }>()
</script>

<template>
  <div class='container'>
    <BoxHead :title='data.title' :description='data.description' :more='data.more' />

    <div class='content'>
      <div class='banner'>
        <ul class='categorys'>
          <li v-for='(item, i) in data.categorys' :key='i'>
            <a class='hover' :href='item.url'>{{ item.text }}</a>
          </li>
        </ul>

        <ul class='brand-list'>
          <li v-for='(item, i) in data.brand' :key='i'>
            <Card
              :data='{
                url: item.url,
                image: item.image,
                text: item.text,
                alt: item.alt
              }'
              :imageWidth='item.imageWidth'
              :imggeHeight='item.imageHeight'
            />
          </li>
        </ul>
      </div>
      <ul class='product-list'>
        <li v-for='(item, i) in data.product' :key='i'>
          <ProductCard
            :head='{
              image: item.image,
              alt: item.title,
              url: item.url
            }'
            :info='{
              title: item.title,
              tag: item.tag,
              price: item.price,
              selled: item.selled
            }'
            :fillet='4'
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
      padding 14px 0
      width 100%
      border-radius 8px
      background-color #fff

      ul.categorys
        display flex
        justify-content center
        align-items center
        color #71797f
        width 100%

        li
          padding 0 8px
          font-size 14px

      ul.brand-list
        padding 22px 26px 0 26px
        display flex
        flex-flow row wrap
        width 100%
        li
          margin-right 50px
          margin-bottom 6px

    ul.product-list
      padding-top 16px
      display flex
      justify-content space-between
      align-items center
      flex-flow row wrap
      width 100%

      li
        margin-bottom 12px
        width 227px
</style>
