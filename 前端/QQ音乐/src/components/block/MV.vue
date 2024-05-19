<script setup lang="ts">
import ContentBox from '../common/ContentBox.vue'
import Links from '../common/Links.vue'
import Icon from '../common/Icon.vue'
import Block from '../common/Block.vue'
import Carousel from '../common/Carousel.vue'
import PortraitCard from '../common/PortraitCard.vue'

import { LinkList } from '../../data/mv/nav.ts'
import { CarouselData } from '../../data/mv/carousel.ts'
</script>

<template>
  <ContentBox title="MV" style="--bg-color: #f3f3f3">
    <div class="header mv">
      <header>
        <Links :data="LinkList" style="--p: 0 24px" />
        <a class="more" href="#"
          >更多 <Icon name="right-arrow" offset-y="1px"
        /></a>
      </header>

      <Block height="30px" />

      <Carousel
        contentWidth="1200px"
        contentHeight="440px"
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
            :image="{
              width: '224px',
              height: '126px',
              src: `/carousel/mv/${item.image}`
            }"
            width="224px"
            height="206px"
            :imageHover="true"
            imageHoverSize="70%"
            :title="item.name"
            :description="item.author"
            :href="item.href"
          >
            <span style="font-size: 14px; color: #999"><Icon name="camera" /> {{ item.play }}</span>
          </PortraitCard>
        </div>
      </Carousel>
    </div>
  </ContentBox>
</template>

<style scoped>
:deep() .header.mv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & header {
    position: relative;
    display: flex;
    justify-content: center;
    width: 1185px;

    & a {
      padding: 2px 8px;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
    }

    & a:hover {
      color: #31c27c;
    }
  }
}

:deep() .carousel-item-box {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
}
</style>
