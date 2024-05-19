<script lang='ts' setup>
import Icons from '../common/icons.vue'
</script>

<template>
  <div class='box'>
    <div class='left'>
      <Icons :size='24' icon='telephone' />
      <span>400-889-8188</span>
    </div>
    <div class='right'>
      <Icons :size='24' icon='headset' />
      <span>
        <a href='#'>在线客服</a>
      </span>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
.box
  margin-bottom 20px
  display flex
  justify-content space-between
  width 230px
  height 30px
  color #71797F
  div
    display flex
    align-items center
    span
      padding-left 4px
</style>