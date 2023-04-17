<script lang='ts' setup>
import { StyleValue } from 'vue'

interface Props {
  readonly size?: number
  readonly icon: string
  readonly floatDirection?: string
  readonly offsetX?: string
  readonly offsetY?: string
}

withDefaults(defineProps<Props>(), {
  size: 14,
  floatDirection: '',
  offsetX: '0px',
  offsetY: '0px'
})
</script>

<template>
  <span
    :class='[
      `size-${size}`,
      icon
    ]'
    :style='{
      transform: `translate(${offsetX}, ${offsetY})`,
      float: `${floatDirection !== "" ? floatDirection : ""}`
    } as StyleValue'
  ></span>
</template>

<style lang='stylus' scoped>
span
  display inline-block

.size-8
  width 8px
  height 8px

.size-12
  width 12px
  height 12px

.size-14
  width 14px
  height 14px

.size-16
  width 16px
  height 16px

.size-20
  width 20px
  height 20px

.size-24
  width 24px
  height 24px

.size-32
  width 32px
  height 32px

.size-52
  width 52px
  height 52px
</style>

<style lang='stylus' scoped>
.favorite
  background-position 0 -21px
  background-image url('../assets/icons/icons.png')

.search
  background-position 0 -48px
  background-image url('../assets/icons/icons.png')

.wechat
  background-position -24px -21px
  background-image url('../assets/icons/icons.png')

.mobile-app
  background-position -48px -21px
  background-image url('../assets/icons/icons.png')

.telephone
  background-position 0 -102px
  background-image url('../assets/icons/icons.png')

.headset
  background-position -34px -102px
  background-image url('../assets/icons/icons.png')

.arrow
  background-image url('../assets/icons/top_nav_arrow.png')

.arrow-right
  background-position -44px 0
  background-image url('../assets/icons/icons.png')

.arrow-right-dark
  background-position -72px 0
  background-image url('../assets/icons/icons.png')

.arrow-right-dashed
  background-position 0 -72px
  background-image url('../assets/icons/icons.png')

.menu
  background-position -68px -102px
  background-image url('../assets/icons/icons.png')

.carousel-left
  background-position 0 -186px
  background-image url('../assets/icons/icons.png')

.carousel-right
  background-position -62px -186px
  background-image url('../assets/icons/icons.png')

.main-server-0
  background-position -102px -102px
  background-image url('../assets/icons/icons.png')

.main-server-1
  background-position -136px -102px
  background-image url('../assets/icons/icons.png')

.main-server-2
  background-position -204px -102px
  background-image url('../assets/icons/icons.png')

.main-server-3
  background-position -238px -102px
  background-image url('../assets/icons/icons.png')

.main-server-4
  background-position -170px -102px
  background-image url('../assets/icons/icons.png')

.customer
  background url('../assets/icons/icon-mq-round@2x.png') 0px -3px / 64px no-repeat
</style>