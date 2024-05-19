<script lang='ts' setup>
import Left from './left.vue'
import Center from './center.vue'
import Right from './right.vue'
import {
  placeholderList as phList,
  hotWordsList as hwList
} from '../../data/header'
</script>

<template>
  <header>
    <div class='container block-center'>
      <Left url='#' />
      <Center :placeholderList='phList' :hotWordsList='hwList' />
      <Right />
    </div>
  </header>
</template>

<style lang='stylus' scoped>
.container
  padding-top 13px
  display flex
  justify-content space-between
  align-items center
  width 1200px
  height 97px
</style>
