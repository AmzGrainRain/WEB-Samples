<script setup lang="ts">
import MainNav from './components/MainNav.vue'
import SubNav from './components/SubNav.vue'
import PageFooter from './components/block/Footer.vue'

import RecommandAlbum from './components/block/RecommandAlbum.vue'
import NewSong from './components/block/NewSong.vue'
import ExcitingRecommand from './components/block/ExcitingRecommand.vue'
import NewAlbum from './components/block/NewAlbum.vue'
import TopList from './components/block/TopList.vue'
import MV from './components/block/MV.vue'
</script>

<template>
  <MainNav />
  <SubNav />

  <RecommandAlbum />
  <NewSong />
  <ExcitingRecommand />
  <NewAlbum />
  <TopList />
  <MV />

  <PageFooter />
</template>

<style scoped>

</style>
