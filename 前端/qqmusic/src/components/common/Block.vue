<script setup lang="ts">
type Props = {
  width?: string
  height: string
  fillColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  fillColor: 'transparent'
})
</script>

<template>
  <div
    :style="{
      width: props.width,
      height: props.height,
      backgroundColor: props.fillColor
    }"
  ></div>
</template>
