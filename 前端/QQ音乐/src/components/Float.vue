<script setup lang="ts">
import { ref } from 'vue'
import Icon from './common/Icon.vue'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const showGoToTop = ref<boolean>(false)
window.addEventListener('scroll', (e) => {
  showGoToTop.value = window.pageYOffset > window.innerHeight
})
</script>

<template>
  <ul>
    <li @click="scrollToTop()" v-show="showGoToTop">
      <a>
        <Icon name="top-arrow" />
      </a>
    </li>
    <li>
      <a href="#">举报</a>
    </li>
    <li>
      <a href="#">反馈</a>
    </li>
    <li>
      <a href="#">
        <Icon name="video" offset-y="4px" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 9;

  & li {
    margin-bottom: 2px;
  }

  & a {
    display: block;
    width: 38px;
    height: 38px;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #c9c9c9;
    background-color: #fff;
  }

  & a:hover {
    color: #31c27c;
    background-color: #ededed;
  }
}
</style>
