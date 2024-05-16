<script setup lang="ts">
interface Props {
  name: string
  offsetX?: string
  offsetY?: string
}
const props = withDefaults(defineProps<Props>(), {
  offsetX: '0',
  offsetY: '0'
})
</script>

<template>
  <i
    class="icons"
    :class="props.name"
    :style="{ transform: `translate(${props.offsetX}, ${props.offsetY})` }"
  ></i>
</template>

<style scoped>
i.icons {
  display: inline-block;
  width: var(--w);
  height: var(--h);
  background-image: url('/icons.png');
}

.triangle-black {
  --w: 8px;
  --h: 8px;
  background-position: -40px -319px;
}

.triangle-green {
  --w: 8px;
  --h: 8px;
  background-position: -40px -328px;
}

.left-arrow-carousel {
  --w: 20px;
  --h: 37px;
  background-position: -20px -121px;
}

.right-arrow-carousel {
  --w: 20px;
  --h: 37px;
  background-position: 0 -121px;
}

.right-arrow {
  --w: 7px;
  --h: 12px;
  background-position: -120px -40px;
}

.play {
  --w: 13px;
  --h: 16px;
  background-position: -60px -220px;
}

.video {
  --w: 19px;
  --h: 12px;
  background-position: -180px -20px;
}
</style>
