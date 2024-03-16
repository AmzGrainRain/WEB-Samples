<script setup lang="ts">
import Start from "./TaskBarIcons/Start.vue"
import Search from "./TaskBarIcons/Search.vue"
import TaskZone from "./TaskBarIcons/TaskZone.vue"
import ShowDesktop from "./TaskBarIcons/ShowDesktop.vue"
import ControleCenter from "./TaskBarIcons/ControleCenter.vue"
import Time from "./TaskBarIcons/Time.vue"
import Ime from "./TaskBarIcons/Ime.vue"
</script>

<template>
  <nav class="w-100 d-flex position-absolute blur">
    <div class="left d-flex">
      <Start />
      <Search />
      <TaskZone />
    </div>

    <div class="right d-flex">
      <Ime />
      <Time />
      <ControleCenter />
      <div style="width: 7px;"></div>
      <ShowDesktop />
    </div>
  </nav>
</template>

<style lang="stylus" scoped>
nav
  justify-content space-between
  left 0
  bottom 0
  height 34px
  background-color #10101088
</style>
