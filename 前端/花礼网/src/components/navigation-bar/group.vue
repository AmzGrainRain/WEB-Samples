<script setup lang='ts'>
import Icons from '../common/icons.vue'
import Card from '../common/card/small.vue'
import { Category } from '../../types/navigation-bar'

defineProps<{ readonly data: Category }>()
</script>

<template>
  <div class='group' :class='{ "hover": data.additional.length > 0 }'>
    <a class='title' :href='data.title.url'>
      <span>{{ data.title.text }}</span>
      <Icons v-if='data.additional.length > 0' :size='12' icon='arrow-right' />
    </a>
    <div class='list'>
      <a v-for='(item, index) in data.links' :key='index' :href='item.url'>{{ item.text }}</a>
    </div>
    <!-- 弹出面板 -->
    <div v-if='data.additional.length > 0' class='pop'>
      <div v-for='(group, gIndex) in data.additional' :key='gIndex'>
        <p class='title'>{{ group.title }}</p>
        <ul class='item-list'>
          <li v-for='(item, iIndex) in group.list' :key='iIndex'>
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

      <div v-if='data.cities.list.length > 0'>
        <p class='title'>{{ data.cities.title }}</p>
        <ul class='item-list cities-list'>
          <li v-for='(item, index) in data.cities.list' :key='index'>
            <a :href='item.url'>{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
div.group
  padding 9px 5px 9px 20px
  border-bottom 1px dashed #fff3

  > a.title
    position relative
    padding 0 4px
    padding-right 20px
    display flex
    justify-content space-between
    align-items center
    width 100%
    font-size 16px
    font-weight bold
    box-sizing border-box

    &:hover
      color #FF734C

  &:hover > .pop
    display block !important

  div.list
    padding-top 5px

    a
      padding 0 5px
      display inline-block
      font-size 14px
      line-height 24px

      &:hover
        color #FF734C

  div.pop
    display none
    padding 16px 0 0 36px
    position absolute
    top 0
    left 240px
    width 960px
    height 480px
    color #000
    box-sizing border-box
    background-color #fff

    & > div
      padding-bottom 16px

      p.title
        padding-bottom 16px
        font-size 16px

      ul.item-list
        padding 0 16px
        display flex
        flex-wrap wrap
        font-size 12px
        color #71797F

        li
          margin-right 32px
          margin-bottom 16px
          text-align center
          width 94px

          &:last-child
            margin-bottom 0

      ul.cities-list li
        margin-right 10px !important
        margin-bottom 4px
        width fit-content

div.group.hover:hover
  background-color #fff

  & > a.title
    color #000

  & > div.list
    color #71797F
</style>
