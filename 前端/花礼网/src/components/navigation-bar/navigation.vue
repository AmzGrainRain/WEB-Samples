<script lang='ts' setup>
// Types
import { Navigation } from '../../types/navigation-bar'

defineProps<{ readonly navList: Navigation[] }>()
</script>

<template>
  <ul>
    <li v-for='(item, i) in navList' :key='i'>
      <a :href='item.url'>{{ item.text }}</a>
    </li>
  </ul>
</template>

<style lang='stylus' scoped>
ul
  padding-left 40px
  display flex
  align-items center

  li
    margin-right 28px

    a
      font-size 18px
      font-weight bold

      &:hover
        color #FF734C
</style>