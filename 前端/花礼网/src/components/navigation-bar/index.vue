<script lang='ts' setup>
import Categorys from './categorys.vue'
import Navigation from './navigation.vue'
import {
  category as cgData,
  navigation as navData
} from '../../data/navigation-bar'
</script>

<template>
  <nav>
    <div class='container block-center'>
      <Categorys :group-data-list='cgData' />
      <Navigation :nav-list='navData' />
    </div>
  </nav>
</template>

<style lang='stylus' scoped>
.container
  display flex
  width 1200px
  height 52px
</style>