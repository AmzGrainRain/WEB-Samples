<script lang='ts' setup>
import { assumeFile } from '../utils'
import { ListData } from '../types/scene'

defineProps<{ readonly listData: ListData }>()
</script>

<template>
  <ul class='block-center'>
    <li v-for='(type, tIndex) in listData' :key='tIndex' :class='[ type.cardStyle ]'>
      <a
        v-if='type.cardStyle === "one" || type.cardStyle === "two"'
        v-for='(item, iIndex) in type.itemList'
        :href='item.url'
        :key='iIndex'
      >
        <img loading='lazy' :src='assumeFile(item.image) as string' :alt='item.alt'>
      </a>

      <div v-if='type.cardStyle === "three"'>
        <a
          v-for='(item, iIndex) in type.itemList.slice(0, 2)'
          :href='item.url'
          :key='iIndex'
        >
          <img loading='lazy' :src='assumeFile(item.image) as string' :alt='item.alt'>
        </a>
      </div>
      <a
        v-for='(item, iIndex) in type.itemList.slice(2, 3)'
        :href='item.url'
        :key='iIndex'
      >
        <img loading='lazy' :src='assumeFile(item.image) as string' :alt='item.alt'>
      </a>
    </li>
  </ul>
</template>

<style lang='stylus' scoped>
ul
  display flex
  justify-content space-between
  width 1200px
  height 376px

  li
    display flex
    flex-direction column
    width 288px

    > a
    > div
      display inline-block
      overflow hidden

      img
        width 100%
        height 100%
        border-radius 8px
        object-fit cover

  li.one img
    height 100%

  li.two
    justify-content space-between

    a
      height 180px

  li.three
    justify-content space-between

    a
    div
      height 180px

    div
      display flex
      justify-content space-between

      a
        width 136px
</style>