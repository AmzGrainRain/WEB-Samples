<script setup lang="ts">
import ContentBox from '../common/ContentBox.vue'
import Carousel from '../common/Carousel.vue'
import { CarouselData } from '../../data/exciting_recommend/carousel.ts'
</script>

<template>
  <ContentBox title="新歌首发" style="--bg-color: #fdfdfd">
    <div class="header exciting-recommand">
      <Carousel
        contentWidth="1200px"
        contentHeight="236px"
        :contentCount="CarouselData.length"
      >
        <div
          class="carousel-item-box"
          v-for="(group, i1) in CarouselData"
          :key="i1"
        >
          <a v-for="(item, i2) in group" :key="i2" :href="item.href">
            <img :src="`/carousel/exciting_recommend/${item.src}`" alt="image">
          </a>
        </div>
      </Carousel>
    </div>
  </ContentBox>
</template>

<style scoped>
:deep() .carousel-item-box {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 1200px;

  & a {
    display: block;

    & img {
      width: 590px;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
