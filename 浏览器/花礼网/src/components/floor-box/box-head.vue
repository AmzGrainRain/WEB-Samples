<script lang='ts' setup>
import Icons from '../icons.vue'
import { Link } from '../../types/common'

defineProps<{
  readonly title: Link
  readonly description: string
  readonly more: Link
}>()
</script>

<template>
  <header>
    <h3>
      <a :href='title.url'>{{ title.text }}</a>
      <span>{{ description }}</span>
    </h3>
    <div class='right'>
      <a :href='more.url'>{{ more.text }}</a>
      <Icons offset-x='4px' :size='12' icon='arrow-right-dark' />
    </div>
  </header>
</template>

<style lang='stylus' scoped>
header
  display flex
  justify-content space-between
  align-items center

  h3
    font-size 26px

    a
      padding-right 16px

    span
      padding-left 16px
      font-weight normal
      font-size 20px
      border-left 1px solid #000
  div.right a
    color #71797f
</style>