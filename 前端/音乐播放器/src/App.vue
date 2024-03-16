<script setup>
import Music from './music.js'

const music = new Music()
const controller = {
  play() {
    music.setUrl('/src/assets/music.flac')
    music.play()
  },
  stop() {
    music.stop()
  },
  jump(e) {
    music.jump((e.offsetX / e.target.offsetWidth).toFixed(2))
  },
  loop() {
    music.loop()
  }
}
</script>

<template>
  <div id="music">
    <progress
      :max="music.status.duration"
      :value="music.status.currentTime"
      @click="controller.jump($event)"
    ></progress>
    <div class="info">
      <span>{{ music.status.paused ? '已暂停' : '正在播放' }}</span>
      <span>{{ music.status.currentTime.toFixed(0) }}s / {{ music.status.duration.toFixed(0) }}s</span>
    </div>
    <div class="controller">
      <font-awesome-icon icon="fa-solid fa-repeat" />
        <font-awesome-icon @click="controller.play()" :icon="`fa-solid fa-${music.status.paused ? 'pause' : 'play'}`" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#music {
  padding 1rem
  width 320px
  border 1px solid #000
  border-radius 1rem
}

progress {
  display inline-block
  border 0
  border-radius .25rem
  width 100%
}

.info {
  margin-top .5rem
  display flex
  justify-content space-between
  align-items center
  font-size 12px
}

.controller {
  margin-top .5rem
  display flex
  justify-content space-between
  align-items center
  width 100%
  border-radius 4px
  .right {
    display flex
    justify-content space-between
    align-items center
    width 30%
  }
}
</style>
