<script lang='ts' setup>
import { assumeFile } from '../../../utils'
import { ImageLink } from '../../../types/common'
import { CardInfo } from '../../../types/card'

interface Props {
  readonly head: ImageLink
  readonly info: CardInfo
  readonly fillet?: number
}

withDefaults(defineProps<Props>(), {
  fillet: 0
})
</script>

<template>
  <a :style='{ "--fillet": `${fillet}px` }' :href='head.url'>
    <div class='img-box'>
      <img loading='lazy' :src='assumeFile(head.image) as string' :alt='head.alt' >
    </div>
    <div class='info'>
      <p class='text-overflow-ellipsis' :title='info.title'>{{ info.title }}</p>
      <span class='tag text-overflow-ellipsis'>{{ info.tag }}</span>
      <span class='price'>{{ info.price }}</span>
      <i>已售 {{ info.selled }} 件</i>
    </div>
  </a>
</template>

<style lang='stylus' scoped>
a
  display inline-block
  width 100%
  border-radius var(--fillet)
  background-color #fff

  &:hover
    color #ff734c

  &:hover div.img-box img
    transform scale(1.05)

  div.img-box
    width 100%
    height 228px
    border-radius var(--fillet)
    overflow hidden

    img
      width 100%
      height 100%
      object-fit cover
      transition .3s

  div.info
    padding 10px 8px 14px
    display flex
    flex-direction column
    align-items center
    
    p
    
      font-size 16px
    
    span
    i
      display block
    
    span.tag
      margin-top 4px
      padding 0 10px
      width fit-content
      color #ff734c
      border 1px solid #ff734c
      border-radius 20px
      background-color #fff0ec
    
    span.price
      margin-top 4px
      font-weight bold
    
    i
      font-style normal
      margin-top 4px
      font-size 12px
</style>
