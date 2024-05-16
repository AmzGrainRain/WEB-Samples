<script setup lang="ts">
import type { ImageT } from '../../types/Image'

type Props = {
  margin?: string
  width?: string
  height?: string

  image: ImageT
  imageHover?: boolean
  imageHoverSize?: string
  title: string
  description: string
  href: string
}

const props = withDefaults(defineProps<Props>(), {
  margin: '0',
  imageHover: false,
  imageHoverSize: 'cover',
  width: '224px',
  height: 'fit-content'
})
</script>

<template>
  <a
    class="portrait-card"
    :href="props.href"
    :style="{ '--w': props.width, '--h': props.height, '--m': props.margin }"
  >
    <div
      class="image-box"
      :class="{ 'hover-effect': props.imageHover }"
      :style="{ '--w': props.image.width, '--h': props.image.height, '--hover-size': props.imageHoverSize }"
    >
      <img :src="props.image.src" alt="image" />
    </div>

    <a class="title">{{ props.title }}</a>
    <span class="desc">{{ props.description }}</span>
    <slot></slot>
  </a>
</template>

<style scoped>
a.portrait-card {
  margin: var(--m);
  display: block;
  width: var(--w);
  height: var(--h);
  color: inherit;
  text-decoration: inherit;
  overflow: hidden;

  & div.image-box {
    position: relative;
    padding-bottom: 15px;
    width: var(--w);
    height: var(--h);
    box-sizing: content-box;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: .3s;
    }
  }

  & div.image-box.hover-effect:hover img {
    filter: brightness(.7);
  }

  & div.image-box.hover-effect::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    width: 25%;
    height: 25%;
    z-index: 2;
    background: url('/play.png') center / var(--hover-size) no-repeat;
    opacity: 0;
    transition: .3s;
  }

  & div.image-box.hover-effect:hover::after {
    transform: scale(1.15);
    opacity: 1;
  }

  & a.title,
  & span.desc {
    display: block;
    width: 100%;
    height: 22px;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & a.title:hover {
    color: #31c27c;
  }

  & span.desc {
    color: #999;
  }
}
</style>
