import { Data } from '../types/help'

const helpData: Data = {
  services: [
    { text: '服务声明', url: '#' },
    { text: '常见问题', url: '#' },
    { text: '售后服务', url: '#' },
    { text: '配送说明', url: '#' },
    { text: '配送范围', url: '#' },
    { text: '订单查询', url: '#' },
    { text: '取消订单', url: '#' },
    { text: '补交货款', url: '#' },
    { text: '隐私条款', url: '#' },
    { text: '安全条款', url: '#' }
  ],
  information: [
    { text: '鲜花礼品网购物流程', url: '#' },
    { text: '鲜花网能配送哪些城市？', url: '#' },
    { text: '鲜花售后服务是怎么样的？', url: '#' },
    { text: '我应该提前多久预订鲜花？', url: '#' }
  ],
  cities: [
    { text: '深圳鲜花', url: '#' },
    { text: '广州鲜花', url: '#' },
    { text: '上海鲜花', url: '#' },
    { text: '北京鲜花', url: '#' },
    { text: '天津鲜花', url: '#' },
    { text: '重庆鲜花', url: '#' },
    { text: '成都鲜花', url: '#' },
    { text: '西安鲜花', url: '#' },
    { text: '武汉鲜花', url: '#' },
    { text: '南京鲜花', url: '#' },
    { text: '厦门鲜花', url: '#' },
    { text: '更多鲜花', url: '#' }
  ],
  contact: [
    { type: 'text', text: '全国订购热线：400-889-8188(免长途费)', url: '#' },
    { type: 'text', text: 'E-mail: kefu@hua.com', url: '#' },
    { type: 'text', text: '7x24小时在线订购', url: '#' },
    { type: 'text', text: '客服工作时间：8:30-21:00', url: '#' },
    { type: 'link', text: '在线客服', url: '#' }
  ],
  qrcodes: [
    { image: 'app.png', alt: '扫码下载手机版' },
    { image: 'follow_wechat.png', alt: '关注公众号有惊喜' }
  ]
}

export {
  helpData
}