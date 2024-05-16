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
  background-position: var(--pos);
  background-image: url('/footer-icon1x.png');
  background-image: -webkit-image-set(
    url('/footer-icon1x.png') 1x,
    url('/footer-icon2x.png') 2x
  );
}

.win {
  --w: 37px;
  --h: 48px;
  --pos: -2px 0;
}

.mac {
  --w: 46px;
  --h: 48px;
  --pos: -92px 0;
}

.android {
  --w: 37px;
  --h: 48px;
  --pos: -190px 0;
}

.ios {
  --w: 34px;
  --h: 48px;
  --pos: -279px 0;
}

.qmkg {
  --w: 41px;
  --h: 48px;
  --pos: -370px 0;
}

.ss {
  --w: 37px;
  --h: 48px;
  --pos: -463px 0;
}

.qplay {
  --w: 40px;
  --h: 48px;
  --pos: -563px 0;
}

.fun {
  --w: 40px;
  --h: 48px;
  --pos: -650px 0;
}
</style>
