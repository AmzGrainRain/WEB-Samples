<script lang='ts' setup>
import Icons from './common/icons.vue'
</script>

<template>
  <div>
    <Icons offset-x='-4px' offset-y='4px' :size='32' icon='customer' />
    <span>咨询客服</span>
  </div>
</template>

<style lang='stylus' scoped>
div
  padding 4px 12px
  position fixed
  right 64px
  bottom 0
  display flex
  color #fff
  justify-content space-around
  align-items center
  background-color #ff6600
  cursor pointer
  z-index 999
  span
    font-size 16px
    font-weight normal
</style>