<script setup lang='ts'>
import Split from './components/common/split.vue'
import TopBanner from './components/top-banner.vue'
import TopNav from './components/top-nav.vue'
import Header from './components/header/index.vue'
import NavigationBar from './components/navigation-bar/index.vue'
import Carousel from './components/carousel.vue'
import MainServer from './components/main-server.vue'
import CustomerService from './components/customer-service.vue'
import Scene from './components/scene.vue'
import SceneTransverse from './components/scene-transverse.vue'
import FloorBox from './components/container/flower.vue'
import CakeBox from './components/container/cake.vue'
import GiftBox from './components/container/gift.vue'
import CommentsBox from './components/container/comments.vue'
import Information from './components/information.vue'
import Services from './components/services.vue'
import Help from './components/help.vue'
import Footer from './components/footer.vue'
import Sidebar from './components/sidebar.vue'

/**
 * Components Data
 */
import { sceneData } from './data/scene'
import { sceneTransverseData } from './data/scene-transverse'
import { carouselData } from './data/carousel'
import { flowerBoxData } from './data/container/flower'
import { cakeBoxData } from './data/container/cake'
import { giftBoxData } from './data/container/gift'
import { commentsData } from './data/container/comments'
import { informationData } from './data/information'
import { servicesData } from './data/services'
import { helpData } from './data/help'
import { footerData } from './data/footer'
</script>

<template>
  <!-- floating component -->
  <CustomerService />
  <Sidebar />

  <!-- Navigation -->
  <TopBanner />
  <TopNav />
  <Header />
  <NavigationBar />
  <Carousel :imageList='carouselData' />

  <!-- Main Services -->
  <MainServer />
  <Split height='16px' />

  <!-- Scene Box -->
  <Scene :listData='sceneData' />
  <Split height='30px' />

  <!-- Scene Box (Transverse) -->
  <SceneTransverse :listData='sceneTransverseData' />
  <Split height='60px' />

  <!-- Floor Box -->
  <section class='boxes' v-for='(item, i) in flowerBoxData' :key='i'>
    <Split height='30px' />
    <FloorBox :data='item' />
    <Split height='60px' />
  </section>

  <!-- Cake Box -->
  <section class='boxes'>
    <Split height='30px' />
    <CakeBox :data='cakeBoxData' />
    <Split height='60px' />
  </section>

  <!-- Gift Box -->
  <section class='boxes'>
    <Split height='30px' />
    <GiftBox :data='giftBoxData' />
    <Split height='60px' />
  </section>

  <!-- Comments -->
  <section class='boxes'>
    <Split height='30px' />
    <CommentsBox :data='commentsData' />
    <Split height='60px' />
  </section>

  <section class='boxes'>
    <Split height='30px' />
    <Information :data='informationData' />
    <Services :data='servicesData' />
    <Help :data='helpData' />
  </section>

  <Footer :data='footerData' />
</template>

<style lang='stylus' scoped>
section.boxes:nth-child(2n - 1)
  background-color #f7f9fa

section.boxes:nth-child(2n)
  background-color #e9ecf0
</style>
