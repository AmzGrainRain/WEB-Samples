<script lang='ts' setup>
interface Props {
  readonly width?: string
  readonly height: string
}

withDefaults(defineProps<Props>(), {
  width: '100%'
})
</script>

<template>
  <div :style='[
    `width: ${width}`,
    `--height: ${height}`
  ]'></div>
</template>

<style lang='stylus' scoped>
div
  display block
  clear both
  box-sizing border-box
  width 100%
  height var(--height)
</style>