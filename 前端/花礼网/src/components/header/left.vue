<script lang='ts' setup>
defineProps<{ readonly url: string }>()
</script>

<template>
  <a class='left' :href='url'></a>
</template>

<style lang='stylus' scoped>
a
  display inline-block
  width 238px
  height 60px
  background-image url("../../assets/header/big-logo.png")
  background-position 0 -26px
  background-size 100%
</style>