<script lang='ts' setup>
import { assumeFile } from '../utils'
import { DataType } from '../types/scene-transverse'

defineProps<{ readonly data: DataType[] }>()
</script>

<template>
  <ul class='block-center'>
    <li v-for='(item, i) in data' :key='i'>
      <a :href='item.url'>
        <img :src='assumeFile(item.image)' :alt='item.alt'>
      </a>
    </li>
  </ul>
</template>

<style lang='stylus' scoped>
ul
  display flex
  justify-content space-between
  width 1200px

  li
    width 288px
    height 172px
    border-radius 8px
    overflow hidden

    img
      display inline-block
      width 100%
      height 100%
</style>