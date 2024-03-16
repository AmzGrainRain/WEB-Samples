import { ref, reactive } from 'vue'

export default class {
  constructor() {
    this.actx = null
    this.player = null
    this.fader = null
    this.ready = false
    this.decodeAudioBuffer = null
    this.status = reactive({
      volume: 0.6,
      duration: 0,
      currentTime: 0,
      interval: null,
      paused: true
    })
    this.url = ref('')
  }

  loadArrayBuffer(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((ori) => ori.arrayBuffer())
        .then((arrayBuffer) => {
          resolve(arrayBuffer)
        })
        .catch((rea) => {
          console.log(rea)
          reject()
        })
    })
  }

  decodeAudioData(arrayBuffer) {
    return new Promise((resolve, reject) => {
      if (!this.actx) reject('没有初始化 audioContext .')
      this.actx
        .decodeAudioData(arrayBuffer)
        .then((decodedBuffer) => {
          resolve(decodedBuffer)
        })
        .catch((err) => {
          console.log(err)
          reject()
        })
    })
  }

  initAudioContext() {
    if (!this.actx) {
      this.actx = new AudioContext()
    }
  }

  initFader() {
    this.fader = this.actx.createGain()
    this.fader.gain.value = this.status.volume
    this.fader.connect(this.actx.destination)
  }

  initPlayer() {
    if (!this.decodeAudioBuffer) return new Error('无法获取 Decode Audio Buffer')

    this.player = this.actx.createBufferSource()
    this.player.buffer = this.decodeAudioBuffer
    this.player.connect(this.actx.destination)

    this.status.duration = this.player.buffer.duration
    this.status.currentTime = this.status.currentTime >= this.status.duration ? 0 : this.status.currentTime
  }

  async prepare() {
    if (this.ready) return
    
    this.initAudioContext()
    this.initFader()
    const arrayBuffer = await this.loadArrayBuffer(this.url)
    this.decodeAudioBuffer = await this.decodeAudioData(arrayBuffer)
    this.ready = true
  }

  setUrl(url) {
    this.url = url
  }

  reset() {
    this.stop()
    this.fader = null
    this.player = null
    this.actx = null
    this.status.ready = false
  }

  loop() {
    if (!this.player) return
    this.player.loop = !this.player.loop
    return this.player.loop
  }
  
  async play() {
    if (!this.status.paused) return

    await this.prepare()
    this.initPlayer()
    this.player.start(0, Math.max(0, this.status.currentTime))
    this.status.paused = false
    this.status.interval = setInterval(() => {
      if (this.status.currentTime >= this.status.duration) {
        clearInterval(this.status.interval)
        this.status.paused = true
        this.status.currentTime = this.status.duration
      }
      this.status.currentTime = Math.round(this.status.currentTime * 100 + 10) / 100
    }, 100)
  }
  
  stop() {
    if (this.status.paused) return

    clearInterval(this.status.interval)
    this.status.paused = true
    this.player.stop()
    this.player.disconnect()
    this.player = null
  }

  async jump(offset) {
    if (!this.player) return

    this.stop()
    this.status.currentTime = Number((this.status.duration * offset).toFixed(1))
    await this.play()
  }
}
