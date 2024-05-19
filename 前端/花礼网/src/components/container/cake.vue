<script lang='ts' setup>
import Icons from '../common/icons.vue'
import BoxHead from './box-head.vue'
import Split from '../common/split.vue'
import Card from '../common/card/small.vue'
import ProductCard from '../common/card/goods-fillet.vue'
import { DataType } from '../../types/container/cake'

defineProps<{ readonly data: DataType }>()
</script>

<template>
  <div class='container'>
    <BoxHead :title='data.title' :description='data.description' :more='data.more' />

    <div class='content'>
      <div class='cake-brand'>
        <Split height='20px' />
        <div class='cities'>
          <h4>
            <Icons offset-y='2px' :size='16' icon='city' />
            <span>{{ data.cities.title }}</span>
          </h4>
          <ul>
            <li v-for='(item, i) in data.cities.list' :key='i' class='hover'>
              <a :href='item.url'>{{ item.text }}</a>
            </li>
          </ul>
          <a :href='data.cities.more.url' class='hover'>{{ data.cities.more.text }}</a>
        </div>
        <ul class='brand-list'>
          <li v-for='(item, i) in data.cake.brand' :key='i'>
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

      <ul class='cake-list'>
        <li v-for='(item, i) in data.cake.product' :key='i'>
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

    div.cake-brand
      background-color #fff

      div.cities
        display flex
        justify-content space-between
        align-items center
        line-height 48px

        h4
          padding 0 24px
          font-size 18px
          font-weight normal
          color #fff
          border-radius 0 100px 100px 0
          background linear-gradient(90deg, #ff734c 0%, #ff3d12 100%)

          span
            padding-right 8px

        ul
          padding-left 20px
          display flex
          font-size 16px

          li
            margin 0 12px

        > a
          margin-right 30px
          font-size 16px
          font-weight bold

      ul.brand-list
        display flex
        flex-flow row wrap

        li
          display flex
          justify-content center
          align-items center
          width 168px
          height 124px

    ul.cake-list
      padding-top 16px
      display flex
      justify-content space-between
      align-items center
      flex-flow row wrap
      width 100%

      li
        width 227px
</style>
