<script lang='ts' setup>
import { Comment } from '../../../types/container/comments'
import { assumeFile } from '../../../utils'

defineProps<{
  readonly data: Comment
}>()
</script>

<template>
  <a :href='data.url'>
    <div class='container'>
      <div class='head'>
        <img :src='assumeFile(data.user.avator) as string' alt='avator'>
        <span>{{ data.user.name }}</span>
      </div>
      <div class='content'>
        <p :title='data.content'>{{ data.content }}</p>
        <div class='info'>
          <p>{{ data.address }}</p>
          <p>{{ data.datetime }}</p>
        </div>
      </div>
    </div>
    <img :src='assumeFile(data.image) as string' alt='image'>
  </a>
</template>

<style lang='stylus' scoped>
a
  display flex
  width 100%
  height 100%

  &:hover div.content > p
    color #ff734c

  div.container
    padding 8px
    width 138px

    div.head
      display flex
      align-items center
      color #71797f

      img
        width 24px
        height 24px
        object-fit cover
        border-radius 50%

      span
        padding-left 12px
        font-size 12px

    div.content
      padding-top 8px

      > p
        display -webkit-box
        height 60px
        line-height 20px
        overflow hidden
        text-overflow ellipsis
        -webkit-box-orient vertical
        -webkit-line-clamp 3
        white-space normal

      div.info
        color #b4babf
        font-size 12px
        transform translateY(16px)

  > img
    margin-left 8px
    width 126px
    height 100%
    border-radius 8px
    object-fit cover
</style>