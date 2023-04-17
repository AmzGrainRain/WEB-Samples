<script lang='ts' setup>
import Icons from './icons.vue'
</script>

<template>
  <ul class='container block-center'>
    <li>
      <a href='#'>
        <Icons offset-x='-6px' offset-y='5px' :size='24' icon='main-server-0' />
        <h4>鲜花电商认证龙头企业</h4>
      </a>
    </li>
    <li>
      <a href='#'>
        <Icons offset-x='-6px' offset-y='5px' :size='24' icon='main-server-1' />
        <h4>17年品牌</h4>
      </a>
    </li>
    <li>
      <a href='#'>
        <Icons offset-x='-6px' offset-y='5px' :size='24' icon='main-server-2' />
        <h4>3小时全国送花</h4>
      </a>
    </li>
    <li>
      <a href='#'>
        <Icons offset-x='-6px' offset-y='5px' :size='24' icon='main-server-3' />
        <h4>200%退赔承诺</h4>
      </a>
    </li>
    <li>
      <a href='#'>
        <Icons offset-x='-6px' offset-y='5px' :size='24' icon='main-server-4' />
        <h4>最近487821条评价</h4>
      </a>
    </li>
  </ul>
</template>

<style lang='stylus' scoped>
ul.container
  display flex
  justify-content space-between
  align-items center
  width 1200px

  li
    margin 0 16px

    a
      font-size 18px
      line-height 60px
      vertical-align baseline

      &:hover
        color #ff734c

      h4
        display inline-block
        font-weight normal
</style>