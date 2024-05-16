<script setup lang="ts"></script>

<template>
  <nav>
    <h1>
      <a href="./">
        <img src="/logo.png" alt="logo" />
      </a>
    </h1>

    <ul>
      <li class="active">
        <a href="./">音乐馆</a>
      </li>
      <li>
        <a href="./">我的音乐</a>
      </li>
      <li>
        <a href="./">客户端</a>
      </li>
      <li>
        <a href="./">开放平台</a>
      </li>
      <li>
        <a href="./">VIP</a>
      </li>
    </ul>

    <div class="search-box">
      <input type="text" placeholder="搜索音乐、MV、歌单、用户" />
      <i class="icons"></i>
    </div>

    <a class="login" href="./">登录</a>

    <div class="btn-drop-down vip">
      <a href="./">开通VIP</a>
      <div class="btn-drop-down-items">
        <a href="./">开通会员</a>
        <a href="./">开通绿钻豪华版</a>
      </div>
    </div>

    <div class="btn-drop-down top-up">
      <a href="./">充值</a>
      <div class="btn-drop-down-items">
        <a href="./">购买乐币</a>
        <a href="./">充值饭票</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
div.btn-drop-down {
  position: relative;
  text-align: center;
  border-radius: 3px;

  & > div.btn-drop-down-items {
    display: none;
    position: absolute;
    left: 0;
    z-index: 5;
    width: 100%;
    border-top: 1px solid #aaa;
    border-right: 1px solid #aaa;
    border-left: 1px solid #aaa;

    & a {
      display: block;
      text-align: center;
      width: 100%;
      border-bottom: 1px solid #aaa;
    }
  }

  & > a::after {
    content: '';
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid;
  }
}

div.btn-drop-down:hover ::after {
  transform: rotate(180deg);
}

div.btn-drop-down:hover div.btn-drop-down-items {
  display: block;
}
</style>

<style scoped>
nav {
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 1200px;
  height: 90px;

  /*-----------------------------------------------*/
  & > ul {
    margin-left: 24px;
    height: 100%;

    & > li {
      display: inline-block;
      width: 94px;
      height: 100%;
      text-align: center;
      line-height: 90px;
      font-size: 18px;
    }

    & > li:hover {
      color: #31c27c;
    }

    & > li.active {
      color: #fff;
      background-color: #31c27c;
    }
  }

  /*-----------------------------------------------*/
  & > div.search-box {
    margin-left: 10px;
    padding-right: 12px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid #aaa;
    border-radius: 2px;

    & > input {
      padding: 0 11px;
      width: 174px;
      height: 36px;

      outline: none;
      border: 0;
      box-sizing: content-box;
    }

    & > i {
      padding-left: 16px;
      background-position: 0 -40px;
    }
  }

  /*-----------------------------------------------*/
  & > a.login {
    margin-left: 16px;
    height: 90px;
    line-height: 90px;

    & :hover {
      color: #31c27c;
    }
  }

  /*-----------------------------------------------*/
  & > div.vip {
    margin-left: 16px;
    width: 122px;
    height: 38px;
    font-size: 12px;
    background-color: #31c27c;

    & > a {
      padding: 0 15px 0 10px;
      height: 100%;
      color: #fff;
      line-height: 38px;
    }

    & > div {
      top: 38px;
      height: 82px;
      color: #000;
      background-color: #fff;

      & a {
        height: 40px;
        line-height: 40px;
      }

      & a:hover {
        color: #fff;
        background-color: #31c27c;
      }
    }

    & > a::after {
      right: 10px;
    }
  }

  /*-----------------------------------------------*/
  & div.top-up {
    margin-left: 10px;
    width: 83px;
    height: 38px;
    font-size: 12px;
    border: 1px solid #888;

    & a {
      height: 38px;
      line-height: 38px;
    }

    & > div {
      top: 38px;
      color: #000;
      background-color: #fff;

      & a:hover {
        color: #fff;
        background-color: #31c27c;
      }
    }

    & > a::after {
      right: 10px;
    }
  }

  & div.top-up:hover {
    color: #fff;
    background-color: #31c27c;
  }
}
</style>
