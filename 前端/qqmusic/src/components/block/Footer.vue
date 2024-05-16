<script setup lang="ts">
import FooterIcon from '../common/FooterIcon.vue'

import { CooporateListData } from '../../data/footer/cooporate'
import { OpenPlatformListData } from '../../data/footer/open_platform'
</script>

<template>
  <footer>
    <div class="content">
      <!-- 下载 -->
      <div class="download">
        <h3>下载QQ音乐客户端</h3>
        <ul>
          <li style="--hover-pos: -2px -49px">
            <a href="#">
              <FooterIcon name="win" />
              <span>PC版</span>
            </a>
          </li>
          <li style="--hover-pos: -92px -49px">
            <a href="#">
              <FooterIcon name="mac" />
              <span>MAC版</span>
            </a>
          </li>
          <li style="--hover-pos: -190px -49px">
            <a href="#">
              <FooterIcon name="android" />
              <span>Android版</span>
            </a>
          </li>
          <li style="--hover-pos: -279px -49px">
            <a href="#">
              <FooterIcon name="ios" />
              <span>iPhone版</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- 产品 -->
      <div class="product">
        <h3>下载QQ音乐客户端</h3>
        <ul>
          <li style="--hover-pos: -370px -49px">
            <a href="#">
              <FooterIcon name="qmkg" />
              <span>PC版</span>
            </a>
          </li>
          <li style="--hover-pos: -463px -49px">
            <a href="#">
              <FooterIcon name="ss" />
              <span>MAC版</span>
            </a>
          </li>
          <li style="--hover-pos: -563px -49px">
            <a href="#">
              <FooterIcon name="qplay" />
              <span>Android版</span>
            </a>
          </li>
          <li style="--hover-pos: -650px -49px">
            <a href="#">
              <FooterIcon name="fun" />
              <span>iPhone版</span>
            </a>
          </li>
        </ul>
        <ul style="margin-top: 10px; transform: translateX(-25px)">
          <li><a href="#">车载互联</a></li>
          <li><a href="#">QQ演出</a></li>
        </ul>
      </div>

      <!-- 合作链接 -->
      <div class="cooporate">
        <h3>合作链接</h3>
        <table>
          <tr v-for="(row, i) in CooporateListData" :key="i">
            <td v-for="(col, j) in row" :key="j">
              <a :href="col.url">{{ col.text }}</a>
            </td>
          </tr>
        </table>
      </div>

      <!-- 开放平台 -->
      <div class="open-platform">
        <h3>开放平台</h3>
        <ul>
          <li v-for="(item, i) in OpenPlatformListData" :key="i">
            <a :href="item.url">{{ item.text }}</a>
          </li>
        </ul>
      </div>

      <!-- tme -->
      <div class="tme">
        <h3>TME集团官网</h3>
        <ul>
          <li>
            <a href="#">腾讯音乐</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="copyright">
      <p>
        <a href="#">关于腾讯</a> | <a href="#">About Tencent</a> |
        <a href="#">服务条款</a> | <a href="#">用户服务协议</a> |
        <a href="#">隐私政策</a> | <a href="#">权利声明</a> |
        <a href="#">广告服务</a> | <a href="#">腾讯招聘</a> |
        <a href="#">客服中心</a> | <a href="#">网站导航</a> |
        <a href="#">举报中心</a>
      </p>
      <p>
        Copyright © 1998 - 2024 Tencent. <a href="#">All Rights Reserved.</a>
      </p>
      <p>
        腾讯公司 <a href="#">版权所有</a>｜<a href="#">营业执照</a
        >｜网络文化经营许可证：<a href="#">粤网文[2023]2882-203号</a
        >｜客服电话：<a href="#">4006016666</a
        >｜违法与不良信息举报邮箱：<a href="#">tme_musicjubao@tencentmusic.com</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
a:hover {
  color: #31c27c;
}

h3 {
  font-size: 16px;
  font-weight: lighter;
}

footer {
  padding-top: 70px;
  width: 100%;
  height: 710px;
  color: #999;
  font-size: 14px;
  font-weight: lighter;
  background-color: #333;
}

div.content {
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  width: 1200px;

  & div.download,
  & div.product,
  & div.cooporate {
    width: 360px;

    & ul {
      margin-top: 40px;
      display: flex;
      transform: translateX(-25px);

      & li {
        width: 95px;
        height: 80px;
        text-align: center;

        & span {
          display: block;
        }
      }

      & li:hover i {
        --pos: var(--hover-pos);
      }
    }
  }

  & div.cooporate {
    & table {
      margin-top: 40px;

      & td {
        width: 100px;
        line-height: 28px;
      }
    }
  }

  & div.open-platform,
  & div.tme {
    padding-top: 60px;
    width: 400px;

    & ul {
      margin-top: 40px;
      display: flex;
      flex-flow: row wrap;

      & li {
        margin-right: 30px;
        line-height: 30px;
      }
    }
  }
}

div.copyright {
  margin-top: 50px;
  text-align: center;
  font-size: 12px;

  & p {
    margin-bottom: 10px;
  }
}
</style>
