<template>
  <nav>
    <ul>
      <li><a href="./">首页</a></li>
      <li><a href="./">歌手</a></li>
      <li><a href="./">新碟</a></li>
      <li><a href="./">排行榜</a></li>
      <li><a href="./">分类歌单</a></li>
      <li><a href="./">电台</a></li>
      <li><a href="./">MV</a></li>
      <li><a href="./">数字专辑</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 1200px;
  border-top: 1px solid #0001;

  & ul {
    display: flex;
  }

  & ul li {
    padding: 0 30px;
    height: 52px;
    line-height: 52px;
    font-size: 15px;
  }

  & ul li:nth-child(1) {
    margin: 0;
  }
}
</style>
