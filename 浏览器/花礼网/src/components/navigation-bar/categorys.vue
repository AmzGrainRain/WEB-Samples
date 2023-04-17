<script lang='ts' setup>
import Group from './group.vue'
import Icons from '../icons.vue'
// Types
import { GroupDataType } from '../../types/navigation-bar'

defineProps<{ readonly groupDataList: GroupDataType[] }>()
</script>

<template>
  <div class='categorys'>
    <h3>
      <Icons offset-y='5px' :size='24' icon='menu' />
      <a href='#'> 所有分类</a>
    </h3>

    <div class='dropdown'>
      <Group v-for='(groupItem, i) in groupDataList' :data='groupItem' :key='i' />
    </div>
  </div>
</template>

<style lang='stylus' scoped>
.categorys
  position relative
  height 100%

  h3
    padding-left 24px
    width 240px
    height 100%
    color #fff
    font-size 18px
    line-height 52px
    border-top-left-radius 12px
    border-top-right-radius 12px
    background linear-gradient(90deg, #ff734c 0%, #ff3d12 100%)

  .dropdown
    padding 10px 0
    position absolute
    left 0
    width 240px
    height 480px
    color #fff
    box-sizing border-box
    background-color #0006
    z-index 9
</style>