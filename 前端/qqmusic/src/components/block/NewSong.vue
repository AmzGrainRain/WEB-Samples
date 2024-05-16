<script setup lang="ts">
import ContentBox from '../common/ContentBox.vue'
import Links from '../common/Links.vue'
import Block from '../common/Block.vue'
import Carousel from '../common/Carousel.vue'
import HorizontalCard from '../common/HorizontalCard.vue'

import { LinkList } from '../../data/new_song/nav.ts'
import { CarouselData } from '../../data/new_song/carousel.ts'
import Icon from '../common/Icon.vue'
</script>

<template>
  <ContentBox title="新歌首发" style="--bg-color: #fdfdfd">
    <div class="header new-song">
      <header>
        <a class="more" href="#"><Icon name="play" offset-y="2px" /> 播放全部</a>
        <Links :data="LinkList" style="--p: 0 24px" />
      </header>
      <Block height="30px" />

      <Carousel
        contentWidth="1200px"
        contentHeight="332px"
        :contentCount="CarouselData.length"
      >
        <div
          class="carousel-item-box"
          v-for="(group, i1) in CarouselData"
          :key="i1"
        >
          <HorizontalCard
            v-for="(item, i2) in group"
            :key="i2"
            :image="{
              width: '86px',
              height: '86px',
              src: `/carousel/new_song/${item.image}`
            }"
            :imageHover="true"
            :name="item.name"
            :author="item.author"
            :duration="item.duration"
            href="#"
          />
        </div>
      </Carousel>
    </div>
  </ContentBox>
</template>

<style scoped>
:deep() .header.new-song {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & header {
    position: relative;
    display: flex;
    justify-content: center;
    width: 1200px;

    & a {
      padding: 0 23px;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 38px;
      line-height: 38px;
      font-size: 14px;
      border: 1px solid #c9c9c9;
      border-radius: 2px;
      transform: translateY(-25%);
    }

    & a:hover {
      background-color: #ededed;
    }
  }
}

:deep() .carousel-item-box {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
}
</style>
