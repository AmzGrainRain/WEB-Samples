<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../common/Icon.vue'
import Block from '../common/Block.vue'

type Props = {
  contentWidth: string
  contentHeight: string
  contentCount: number
}
const props = defineProps<Props>()

const index = ref<number>(0)
const switchIndex = (direction: 'prev' | 'next'): void => {
  if (direction === 'next') {
    index.value = index.value + 1 >= props.contentCount ? 0 : index.value + 1
    return
  }
  index.value = index.value === 0 ? props.contentCount - 1 : index.value - 1
}

const setIndex = (i: number) => {
  index.value = i
}
</script>

<template>
  <div class="carousel">
    <div class="carousel-area">
      <div class="prev" style="left: 0" @click="switchIndex('prev')">
        <Icon name="left-arrow-carousel" />
      </div>
      <div class="next" style="right: 0" @click="switchIndex('next')">
        <Icon name="right-arrow-carousel" />
      </div>

      <div
        class="carousel-content"
        :style="{
          '--page-w': props.contentWidth,
          '--page-h': props.contentHeight
        }"
      >
        <div
          class="carousel-item"
          :style="{
            '--w': `calc(100% * ${props.contentCount})`,
            '--offset': `calc(${index} * -${props.contentWidth})`
          }"
        >
          <slot></slot>
        </div>
      </div>
    </div>

    <Block height="40px" />

    <div class="carousel-indicator">
      <div
        v-for="i in props.contentCount"
        :key="i"
        :class="{ active: i - 1 === index }"
        @click="setIndex(i - 1)"
      >
        <i></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.carousel {
  width: 100%;
  height: fit-content;

  & div.carousel-area {
    position: relative;
    width: 100%;
    height: fit-content;
    overflow-x: hidden;

    & div.prev,
    & div.next {
      margin: auto;
      position: absolute;
      top: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 110px;
      background-color: #0000000d;
      transition: 0.3s;
      cursor: pointer;
    }

    & div.prev {
      transform: translateX(-101%);
    }

    & div.next {
      transform: translateX(101%);
    }

    & div.carousel-content {
      margin: 0 auto;
      width: var(--page-w);
      height: var(--page-h);
      overflow: hidden;

      & div.carousel-item {
        width: var(--w);
        height: 100%;
        display: flex;
        transform: translateX(var(--offset));
        transition: 0.5s;
      }
    }
  }

  & div.carousel-indicator {
    margin: 0 auto;
    display: flex;
    width: fit-content;

    & div {
      padding: 8px 12px;
      cursor: pointer;

      & i {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ddd;
      }
    }

    & div.active i,
    & div:hover i {
      background-color: #aaa;
    }
  }
}

div.carousel:hover div.prev,
div.carousel:hover div.next {
  transform: translateX(0) !important;
}
</style>
