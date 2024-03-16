<script lang="ts" setup>
import { useGlobalStore } from '../../store'
const store = {
  global: useGlobalStore()
}
</script>

<template>
  <div id="control-center" class="d-flex h-100" @click="store.global.status.showControlCenterUI = !store.global.status.showControlCenterUI">
    <box-icon name="message" color="#ffffff"></box-icon>
  </div>
</template>

<style lang="stylus" scoped>
#control-center
  justify-content center
  align-items center
  width 40px
  &:hover
    background #fff1
</style>
