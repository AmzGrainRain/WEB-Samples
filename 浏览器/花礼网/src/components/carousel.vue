<script lang='ts' setup>
import { ref } from 'vue'
import { assumeFile } from '../utils'
import Icons from './icons.vue'
import { CarouselDataType } from '../types/carousel'

interface Props {
  readonly imageList: CarouselDataType[]
  readonly picPerSec?: number
}
const props = withDefaults(defineProps<Props>(), {
  picPerSec: 5
})

// Current carousel index
const current = ref(0)
// Auto scroll intervaller
let autoScroll: any = null

// Set intervaller
const timerSet = () => {
  autoScroll = setInterval(() => {
    if (current.value == props.imageList.length - 1) current.value = 0
    else ++current.value
  }, props.picPerSec * 1000)
}

// Set current carousel index
const setCurrent = (index: number) => {
  clearTimeout(autoScroll)
  current.value = index
  timerSet()
}

// Init
timerSet()
</script>

<template>
  <div class='carousel'>
    <div class='view'>
      <a v-for='(item, i) in props.imageList' :key='i' :href='item.url'>
        <img
          :src='assumeFile(item.image) as string'
          :class='{ active: current === i }'
          :alt='item.alt'
        >
      </a>
    </div>

    <div class='controller'>
      <div class='container'>
        <div
          class='left'
          @click='current - 1 < 0 ? setCurrent(props.imageList.length - 1) : setCurrent(current - 1)'
        >
          <Icons :size='52' icon='carousel-left' />
        </div>
        <div
          class='right'
          @click='current == props.imageList.length - 1 ?  setCurrent(0) : setCurrent(current + 1)'
        >
          <Icons :size='52' icon='carousel-right' />
        </div>
        <div class='tabs'>
          <span
            v-for='(image, i) in props.imageList'
            :class='{ active: current === i }'
            :key='i'
            @mouseover='setCurrent(i)'
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
div.carousel
  position relative
  width 100%
  height 480px

  div.view
    position absolute
    top 0
    left 0
    width 100%
    height 100%

    img
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      opacity 0
      object-fit cover
      transition .5s

    img.active
      opacity 1

    &:hover ~ div.controller div.left
    &:hover ~ div.controller div.right
      opacity 1


  div.controller
    margin 0 auto
    width 1200px
    height 480px
    pointer-events none

    div.container
      position relative
      margin-left 240px
      height 100%
      & > div
        margin auto
        position absolute
        pointer-events all

      div.left
      div.right
        width 52px
        height 52px
        border-radius 50%
        opacity 0
        transition .3s
        top 0
        bottom 0

      div.left:hover
      div.right:hover
        opacity 1
        cursor pointer

      div.left
        left 32px

      div.right
        right 32px

      div.tabs
        padding 16px
        left 0
        right 0
        bottom 0
        width fit-content

        span
          margin 0 6px
          display inline-block
          width 8px
          height 8px
          background-color #23262866
          border-radius 50%

          &.active
            background-color #ff734c
</style>