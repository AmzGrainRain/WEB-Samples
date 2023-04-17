<script lang='ts' setup>
import Left from './left.vue'
import Center from './center.vue'
import Right from './right.vue'
// Data
import { placeholderList, hotWordsListData } from '../../data/header'
</script>

<template>
  <header>
    <div class='container block-center'>
      <Left url='#' />
      <Center :placeholderList='placeholderList' :hotWordsList='hotWordsListData' />
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
