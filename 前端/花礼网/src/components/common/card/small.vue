<script lang='ts' setup>
import { ImageTextLink } from '../../../types/common'
import { assumeFile } from '../../../utils'

defineProps<{
  readonly data: ImageTextLink
  readonly imageWidth?: string
  readonly imggeHeight?: string
}>()
</script>

<template>
  <a :href='data.url'>
    <img
      loading='lazy'
      :style='{
        "--width": imageWidth,
        "--height": imggeHeight
      }'
      :src='assumeFile(data.image) as string'
      :alt='data.alt'
    >
    <span>{{ data.text }}</span>
  </a>
</template>

<style lang='stylus' scoped>
a
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  transition .2s
  &:hover
    color #FF734C

  img
    width var(--width)
    height var(--height)

  span
    margin-top 6px
    font-size 12px
    line-height 16px
</style>