<script lang='ts' setup>
import { StyleValue } from 'vue'

interface Props {
  readonly size?: number
  readonly customSize?: boolean
  readonly width?: number
  readonly height?: number
  readonly icon: string
  readonly floatDirection?: string
  readonly offsetX?: string
  readonly offsetY?: string
  readonly margin?: string
}

withDefaults(defineProps<Props>(), {
  size: 14,
  customSize: false,
  width: 0,
  height: 0,
  floatDirection: '',
  offsetX: '0',
  offsetY: '0',
  margin: '0'
})
</script>

<template>
  <span
    v-if='!customSize'
    :class='[ icon ]'
    :style='{
      transform: `translate(${offsetX}, ${offsetY})`,
      float: `${floatDirection !== "" ? floatDirection : ""}`,
      "--margin": margin,
      "--width": `${size}px`,
      "--height": `${size}px`
    } as StyleValue'
  ></span>

  <span
    v-else
    :class='[ icon ]'
    :style='{
      transform: `translate(${offsetX}, ${offsetY})`,
      float: `${floatDirection !== "" ? floatDirection : ""}`,
      "--margin": margin,
      "--width": `${width}px`,
      "--height": `${height}px`
    } as StyleValue'
  ></span>
</template>

<style lang='stylus' scoped>
span
  margin var(--margin)
  display inline-block
  width var(--width)
  height var(--height)
</style>

<style lang='stylus' scoped>
span
  background-image url('../../assets/icons/icons.png')

.slogan
  background-position -518px -136px

.top100
  background-position -676px -136px

.icp
  background-position -809px -136px

.favorite
  background-position 0 -21px

.search
  background-position 0 -48px

.wechat
  background-position -24px -21px

.mobile-app
  background-position -48px -21px

.telephone
  background-position 0 -102px

.headset
  background-position -34px -102px

.arrow
  background-image url('../../assets/icons/top_nav_arrow.png') !important

.arrow-right
  background-position -44px 0

.arrow-right-dark
  background-position -72px 0

.arrow-right-dashed
  background-position 0 -72px

.menu
  background-position -68px -102px

.carousel-left
  background-position 0 -186px

.carousel-right
  background-position -62px -186px

.main-server-0
  background-position -102px -102px

.main-server-1
  background-position -136px -102px

.main-server-2
  background-position -204px -102px

.main-server-3
  background-position -238px -102px

.main-server-4
  background-position -170px -102px

.services-1
  background-position 0 -136px

.services-2
  background-position -50px -136px

.services-3
  background-position -100px -136px

.services-4
  background-position -150px -136px

.services-5
  background-position -200px -136px

.services-6
  background-position -250px -136px

.services-7
  background-position -300px -136px

.services-8
  background-position -350px -136px

.city
  background-position -26px -46px

.contact
  background-position -330px -72px

.beian
  background-position -360px -72px

.qrcode
  background url('../../assets/icons/qr-code.png')

.customer
  background url('../../assets/icons/icon-mq-round@2x.png') 0px -3px / 64px no-repeat
</style>