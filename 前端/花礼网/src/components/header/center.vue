<script lang='ts' setup>
import { ref } from 'vue'
import Icons from '../common/icons.vue'
import { HotWordsList, PlaceholderList } from '../../types/header'

const props = defineProps<{
  readonly placeholderList: PlaceholderList
  readonly hotWordsList: HotWordsList
}>()

let index = ref(0)
setInterval(() => {
  if (index.value == props.placeholderList.length) index.value = 0
  else ++index.value
}, 3000)
</script>

<template>
  <div class='box'>
    <div class='container'>
      <div class='icon-box'>
        <Icons offset-y='2px' :size='16' icon='search' />
      </div>
      <input type='text' :placeholder='placeholderList[index]' name='search' id='search'>
      <input type='button' value='搜索'>
    </div>
    <div class='hotwords'>
      <a v-for='(item, i) in hotWordsList' :key='i' :href='item.url'>{{ item.text }}</a>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
.container
  display flex
  align-items center
  width 440px
  height 48px
  border-radius 24px
  border 2px solid #FF734C
  box-sizing border-box
  overflow hidden

  .icon-box
    display flex
    justify-content center
    align-items center
    width 54px
    height 100%

  input[type=text]
    display inline-block
    width 264px
    height 100%
    border 0
    outline none

  input[type=button]
    width 118px
    height 100%
    color #fff
    font-weight bold
    font-size large
    border 0
    border-radius 24px
    background linear-gradient(90deg, #ff734c 0%, #ff3d12 100%)
    cursor pointer

.hotwords
  padding 8px 0 0 44px
  color #B4BABF
  font-size 12px
  line-height 16px

  a
    margin 0 12px

    &:hover
      color #FF734C
</style>