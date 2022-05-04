window.onscroll = () => {
  const top = document.querySelector('body').getBoundingClientRect().top
  if (top < -154) {
    console.log('<');
    document.querySelector('#top-wrap-scroll-down').style.display = 'block'
  } else {
    console.log('>');
    document.querySelector('#top-wrap-scroll-down').style.display = 'none'
  }
}

/**
 * 
 *  淘宝轮播点击事件处理
 * 
 */
document.querySelector('#content .box .carousel .tb .indicator-l').addEventListener('click', (e) => carouselLg.scroll(0))
document.querySelector('#content .box .carousel .tb .indicator-r').addEventListener('click', (e) => carouselLg.scroll(1))
const carouselLg = {
  parentEl: document.querySelector('#content .box .carousel .tb .mod'),
  firstEl: document.querySelector('#content .box .carousel .tb .mod').firstElementChild.cloneNode(true),
  tabs: document.querySelectorAll('#content .box .carousel .tb .tab a'),
  timer: null,
  min: 0,
  max: 4,
  index: 0,
  addTimer: function (ys, fx) {
    this.timer = setInterval(() => {
      this.scroll(fx)
    }, ys)
  },
  scroll: function (fx) {
    // 判断方向
    if (fx) {
      // 索引越界时仍然正常轮播
      this.index++
      this.parentEl.style.left = `${this.index * -100}%`
      this.parentEl.style.transition = '.2s ease'
      if (this.index > this.max) {
        // 正常轮播过渡动画结束之后
        setTimeout(() => {
          // 切换到第一张
          this.index = this.min
          this.parentEl.style.left = 0
          // 关闭过渡效果
          this.parentEl.style.transition = 'none'
        }, 200)
      }
      // 更新小圆点状态
      this.tabsUpdate(fx)
    } else {
      this.index--
      // 索引越界时
      if (this.index < this.min) {
        // 切换到第六张
        this.index = this.max + 1
        this.parentEl.style.left = `${this.index * -100}%`
        // 关闭过渡效果
        this.parentEl.style.transition = 'none'
        setTimeout(() => {
          this.index = this.max
          this.parentEl.style.left = `${this.index * -100}%`
          this.parentEl.style.transition = '.2s ease'
        }, 0)
      } else {
        // 正常轮播
        this.parentEl.style.left = `${this.index * -100}%`
      }
      // 更新小圆点状态
      this.tabsUpdate(fx)
    }
  },
  jumpTo: function (num) {
    // 跳转到指定轮播图
    this.index = num
    this.parentEl.style.left = `${this.index * -100}%`
    this.parentEl.style.transition = '.2s ease'
    // 更新小圆点状态
    this.tabsUpdate()
  },
  tabsClear: function () {
    for (let i = 0, len = this.tabs.length; i < len; i++) {
      this.tabs[i].classList.remove('active')
    }
  },
  tabsUpdate: function (fx) {
    // 如果是第六张轮播
    if (this.index === this.max + 1) {
      // 如果向右轮播
      if (fx) {
        this.tabsClear()
        this.tabs[this.min].classList.add('active')
      } else {
        this.tabsClear()
        this.tabs[this.max].classList.add('active')
      }
    } else {
      for (let i = 0, len = this.tabs.length; i < len; i++) {
        if (i === this.index) this.tabs[i].classList.add('active')
        else this.tabs[i].classList.remove('active')
      }
    }
  },
  init: function () {
    // 克隆首个轮播图并将其追加到最后
    this.parentEl.appendChild(this.firstEl)
    // 监听小圆点击事件
    this.tabs.forEach((item, index) => {
      item.addEventListener('click', () => this.jumpTo(index))
    })
    // 自动轮播
    this.addTimer(5000, 1)
  },
}
/**
 * 
 *  天猫轮播点击事件处理
 * 
 */
document.querySelector('#content .box .carousel .tm .inner-carousel .indicator-l').addEventListener('click', (e) => carouselSm.scroll(0))
document.querySelector('#content .box .carousel .tm .inner-carousel .indicator-r').addEventListener('click', (e) => carouselSm.scroll(1))
const carouselSm = {
  parentEl: document.querySelector('#content .box .carousel .tm .inner-carousel .mod'),
  firstEl: document.querySelector('#content .box .carousel .tm .inner-carousel .mod').firstElementChild.cloneNode(true),
  label: document.querySelector('#content .box .carousel .tm .title span i'),
  timer: null,
  min: 0,
  max: 4,
  index: 0,
  addTimer: function (ys, fx) {
    this.timer = setInterval(() => {
      this.scroll(fx)
    }, ys)
  },
  scroll: function (fx) {
    // 判断方向
    if (fx) {
      // 索引越界时仍然正常轮播
      this.index++
      this.parentEl.style.left = `${this.index * -100}%`
      this.parentEl.style.transition = '.2s ease'
      if (this.index > this.max) {
        // 正常轮播过渡动画结束之后
        setTimeout(() => {
          // 切换到第一张
          this.index = this.min
          this.parentEl.style.left = 0
          // 关闭过渡效果
          this.parentEl.style.transition = 'none'
        }, 200)
      }
      // 更新文字显示
      this.updateLabel(fx)
    } else {
      this.index--
      // 索引越界时
      if (this.index < this.min) {
        // 切换到第六张
        this.index = this.max + 1
        this.parentEl.style.left = `${this.index * -100}%`
        // 关闭过渡效果
        this.parentEl.style.transition = 'none'
        setTimeout(() => {
          this.index = this.max
          this.parentEl.style.left = `${this.index * -100}%`
          this.parentEl.style.transition = '.2s ease'
        }, 0)
      } else {
        // 正常轮播
        this.parentEl.style.left = `${this.index * -100}%`
      }
      // 更新文字显示
      this.updateLabel(fx)
    }
  },
  updateLabel: function (fx) {
    // 如果是第六张轮播
    if (this.index === this.max + 1) {
      // 如果向右轮播
      if (fx) this.label.innerHTML = this.min + 1
      else this.label.innerHTML = this.max + 1
    } else {
      this.label.innerHTML = this.index + 1
    }
  },
  init: function () {
    // 克隆首个轮播图并将其追加到最后
    this.parentEl.appendChild(this.firstEl)
    // 自动轮播
    this.addTimer(5000, 1)
  }
}

/**
 * 
 *  初始化轮播图
 * 
 */
carouselLg.init()
carouselSm.init()

/**
 * 
 *  鼠标浮动到轮播时清除自动切换定时器
 * 
 */
document.querySelector('#content .box .carousel .tb .mod').addEventListener('mouseover', () => {
  clearInterval(carouselLg.timer)
})
document.querySelector('#content .box .carousel .tm').addEventListener('mouseover', () => {
  clearInterval(carouselSm.timer)
})

/**
 * 
 *  鼠标离开轮播时添加自动切换定时器
 * 
 */
document.querySelector('#content .box .carousel .tb').addEventListener('mouseout', () => {
  carouselLg.addTimer(5000, 1)
})
document.querySelector('#content .box .carousel .tm').addEventListener('mouseout', () => {
  carouselSm.addTimer(5000, 1)
})