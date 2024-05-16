<script setup lang="ts">
import ContentBox from '../common/ContentBox.vue'
import Links from '../common/Links.vue'
import Block from '../common/Block.vue'
import Carousel from '../common/Carousel.vue'
import PortraitCard from '../common/PortraitCard.vue'

import { LinkList } from '../../data/recommend_album/nav.ts'
import { CarouselData } from '../../data/recommend_album/carousel.ts'
</script>

<template>
  <ContentBox title="歌单推荐" style="--bg-color: #f3f3f3">
    <div class="header recommand-album">
      <Links :data="LinkList" style="--p: 0 24px" />
      <Block height="30px" />

      <Carousel
        contentWidth="1200px"
        contentHeight="283px"
        :contentCount="CarouselData.length"
      >
        <div
          class="carousel-item-box"
          v-for="(group, i1) in CarouselData"
          :key="i1"
        >
          <PortraitCard
            v-for="(item, i2) in group"
            :key="i2"
            width="224px"
            :image="{
              width: '224px',
              height: '224px',
              src: `/carousel/recommend_album/${item.imageUrl}`
            }"
            :imageHover="true"
            :title="item.title.text"
            :description="`播放量：${item.play}`"
            :href="item.title.url"
          />
        </div>
      </Carousel>
    </div>
  </ContentBox>
</template>

<style scoped>
:deep() .header.recommand-album {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

:deep() .carousel-item-box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
}
</style>
