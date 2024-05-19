<script lang='ts' setup>
import BoxHead from './box-head.vue'
import Card from '../common/card/comment.vue'
import { DataType } from '../../types/container/comments'

defineProps<{ readonly data: DataType }>()
</script>

<template>
  <div class='container'>
    <BoxHead :title='data.title' :description='data.description' :more='data.more' />

    <div class='content'>
      <ul>
        <li v-for='(item, i) in data.list' :key='i'>
          <Card :data='item' />
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

    ul
      display flex
      justify-content space-between
      flex-flow row wrap
      width 100%

      li
        padding 8px
        margin-bottom 16px
        width 288px
        height 172px
        border-radius 12px
        background-color #fff
        box-sizing border-box
</style>
