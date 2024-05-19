<script lang='ts' setup>
import Icons from './common/icons.vue'
import { ExtendedLink } from '../types/services'

defineProps<{ readonly data: ExtendedLink[] }>()
</script>

<template>
  <ul class='com-services'>
    <li v-for='(item, i) in data' :key='i' :style='{ "--width": item.width }'>
      <Icons :size='40' :icon='`services-${i + 1}`' />
      <a class='hover' :href='item.url'>{{ item.text }}</a>
    </li>
  </ul>
</template>

<style lang='stylus' scoped>
ul.com-services
  margin 0 auto
  padding 40px 0
  display flex
  flex-flow row wrap
  width 1200px
  border-bottom 1px solid #e9ecf0

  li
    margin-bottom 32px
    display flex
    align-items center
    width var(--width)
    height 40px
    font-size 20px

    a
      padding-left 12px
</style>