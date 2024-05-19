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
  background-position: var(--pos)
}

.triangle-black {
  --w: 8px;
  --h: 8px;
  --pos: -40px -319px;
}

.triangle-green {
  --w: 8px;
  --h: 8px;
  --pos: -40px -328px;
}

.left-arrow-carousel {
  --w: 20px;
  --h: 37px;
  --pos: -20px -121px;
}

.right-arrow-carousel {
  --w: 20px;
  --h: 37px;
  --pos: 0 -121px;
}

.right-arrow {
  --w: 7px;
  --h: 12px;
  --pos: -120px -40px;
}

.top-arrow {
  --w: 18px;
  --h: 10px;
  --pos: -160px 0;
}

.play {
  --w: 13px;
  --h: 16px;
  --pos: -60px -220px;
}

.camera {
  --w: 19px;
  --h: 12px;
  --pos: -180px -20px;
}

.video {
  --w: 20px;
  --h: 17px;
  --pos: -180px 0;
}
</style>
