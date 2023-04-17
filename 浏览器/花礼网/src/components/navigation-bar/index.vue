<script lang='ts' setup>
import Categorys from './categorys.vue'
import Navigation from './navigation.vue'
// Data
import { categoryGroupData, navList } from '../../data/navigation-bar'
</script>

<template>
  <nav>
    <div class='container block-center'>
      <Categorys :group-data-list='categoryGroupData' />
      <Navigation :nav-list='navList' />
    </div>
  </nav>
</template>

<style lang='stylus' scoped>
.container
  display flex
  width 1200px
  height 52px
</style>