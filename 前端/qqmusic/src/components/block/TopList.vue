<script setup lang="ts">
import ContentBox from '../common/ContentBox.vue'
import Icon from '../common/Icon.vue'
import Block from '../common/Block.vue'

import { TopListData } from '../../data/top_list/data.ts'
const pos = ['0 0', '0 0', '-224px 0', '-448px 0', '-672px 0', '-896px 0']
</script>

<template>
  <ContentBox title="排行榜" style="--bg-color: #f8f8f8">
    <a class="more" href="#">
      <span>更多 <Icon name="right-arrow" offset-y="1px" /></span>
    </a>

    <div class="box">
      <div class="item" v-for="(group, i) in TopListData" :key="i">
        <!-- Bg -->
        <div class="bg" :style="{ '--pos': pos[i] }"></div>
        <h4>巅峰榜</h4>
        <h3>{{ group.title }}</h3>
        <!-- Icon -->
        <div class="icon-box">
          <span></span>
        </div>
        <!-- List -->
        <ol>
          <li v-for="(item, j) in group.list" :key="j">
            <span>{{ j }}</span>
            <a href="#">
              <span>{{ item.name }}</span>
              <span>{{ item.author }}</span>
            </a>
          </li>
        </ol>
      </div>
    </div>
    <Block height="40px" />
  </ContentBox>
</template>

<style scoped>
:deep() a.more {
  margin: 0 auto;
  width: 1200px;
  text-align: right;
  transform: translateY(-50px);
}

:deep() a.more span:hover {
  color: #31c27c;
}

:deep() div.box {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;

  & div.item {
    position: relative;
    padding: 44px 30px 0 30px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 224px;
    height: 500px;
    color: #fff;
    overflow: hidden;
    transition: 0.3s;
    z-index: 2;

    & div.bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('/top_list_bg.jpg') var(--pos) / 500% no-repeat;
      z-index: -1;
      transition: 0.3s;
    }

    & h4 {
      padding-bottom: 4px;
      font-weight: lighter;
      font-size: 20px;
    }

    & h3 {
      font-weight: normal;
      font-size: 24px;
    }

    & div.icon-box {
      margin: 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;

      & span {
        position: relative;
        display: block;
        width: 35px;
        height: 2px;
        background-color: #fff;
        cursor: pointer;
      }

      & span::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;

        width: 20px;
        height: 20px;
        background: url('/play.png') center / 20px no-repeat;
        opacity: 0;
        z-index: 1;
        transition: 0.3s;
      }
    }

    & ol {
      list-style: none;
      font-size: 14px;

      & li {
        margin-bottom: 40px;

        & > span {
          vertical-align: top;
        }

        & a {
          padding-left: 10px;
          display: inline-block;
          width: 150px;
          cursor: pointer;

          & span {
            display: block;
          }
        }
      }
    }
  }

  & div.item:hover {
    & div.bg {
      transform: scale(1.1);
    }

    & div.icon-box span {
      background-color: transparent;
    }

    & div.icon-box span::after {
      opacity: 1;
      transform: scale(2.5);
    }
  }
}
</style>
