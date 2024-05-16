<script setup lang="ts">
import { ImageT } from '../../types/Image'

type Props = {
  margin?: string
  image: ImageT
  imageHover?: boolean
  name: string
  author: string
  duration: string
  href: string
}
const props = withDefaults(defineProps<Props>(), {
  margin: '0',
  imageHover: false
})
</script>

<template>
  <a
    class="horizontal-card"
    :href="props.href"
    :style="{ '--m': props.margin }"
  >
    <div
      class="image-box"
      :class="{ 'hover-effect': props.imageHover }"
      :style="{ '--w': props.image.width, '--h': props.image.height }"
    >
      <img :src="props.image.src" alt="image" />
    </div>

    <div class="content">
      <div class="info">
        <span class="name">{{ props.name }}</span>
        <span class="author">{{ props.author }}</span>
      </div>
      <span class="duration">{{ props.duration }}</span>
    </div>
  </a>
</template>

<style scoped>
a.horizontal-card {
  margin: var(--m);
  display: flex;
  width: 380px !important;
  height: 86px;
  color: inherit;
  text-decoration: inherit;

  & div.image-box {
    position: relative;
    width: 86px;
    height: 86px;
    box-sizing: content-box;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s;
    }
  }

  & div.image-box.hover-effect:hover img {
    filter: brightness(0.7);
  }

  & div.image-box.hover-effect::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    width: 45%;
    height: 45%;
    z-index: 2;
    background: url('/play.png') center / cover no-repeat;
    opacity: 0;
    transition: 0.3s;
  }

  & div.image-box.hover-effect:hover::after {
    transform: scale(1.15);
    opacity: 1;
  }

  & div.content {
    padding-left: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(380px - 86px);
    height: 100%;
    font-size: 14px;
    font-weight: 400;

    & div.info span {
      display: block;
      width: 190px;
      height: 21px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    & div.info span:hover {
      color: #31c27c;
    }

    & span.author,
    & span.duration {
      color: #999;
    }
  }
}
</style>
