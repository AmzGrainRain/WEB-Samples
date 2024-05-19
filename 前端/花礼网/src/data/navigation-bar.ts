import { Navigation, Category } from '../types/navigation-bar'

const navigation: Array<Navigation> = [
  { text: '鲜花', url: '#' },
  { text: '永生花', url: '#' },
  { text: '蛋糕', url: '#' },
  { text: '礼品', url: '#' },
  { text: '巧克力', url: '#' },
  { text: '花语大全', url: '#' },
  { text: '企业团购', url: '#' },
  { text: '设计师甄选鲜花', url: '#' }
]

const category: Array<Category> = [
  {
    title: { text: '鲜花用途', url: '#' },
    links: [
      { text: '爱情鲜花', url: '#' },
      { text: '生日鲜花', url: '#' },
      { text: '友情鲜花', url: '#' },
      { text: '问候长辈', url: '#' },
      { text: '探病慰问', url: '#' },
      { text: '道歉鲜花', url: '#' },
      { text: '祝贺鲜花', url: '#' },
      { text: '婚庆鲜花', url: '#' },
      { text: '商务鲜花', url: '#' }
    ],
    additional: [],
    cities: { title: '', list: [] }
  },
  {
    title: { text: '鲜花花材', url: '#' },
    links: [
      { text: '玫瑰', url: '#' },
      { text: '康乃馨', url: '#' },
      { text: '百合', url: '#' },
      { text: '向日葵', url: '#' },
      { text: '扶郎', url: '#' },
      { text: '郁金香', url: '#' },
      { text: '马蹄莲', url: '#' }
    ],
    additional: [],
    cities: { title: '', list: [] }
  },
  {
    title: { text: '永生花', url: '#' },
    links: [
      { text: '永生瓶花', url: '#' },
      { text: '经典花盒', url: '#' },
      { text: '特色永生花', url: '#' }
    ],
    additional: [
      {
        title: '永生花类别',
        list: [
          {
            text: '永生瓶花',
            url: '#',
            image: 'navigation-bar/eternal-flower/type/01.png',
            alt: '永生瓶花',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '经典花盒',
            url: '#',
            image: 'navigation-bar/eternal-flower/type/02.png',
            alt: '经典花盒',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '特色永生花',
            url: '#',
            image: 'navigation-bar/eternal-flower/type/03.png',
            alt: '特色永生花',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '巨型玫瑰',
            url: '#',
            image: 'navigation-bar/eternal-flower/type/04.png',
            alt: '巨型玫瑰',
            imageWidth: '68px',
            imageHeight: '68px'
          }
        ]
      },
      {
        title: '对象',
        list: [
          {
            text: '送女友',
            url: '#',
            image: 'navigation-bar/eternal-flower/object/01.png',
            alt: '送女友',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '送男友',
            url: '#',
            image: 'navigation-bar/eternal-flower/object/02.png',
            alt: '送男友',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '送长辈',
            url: '#',
            image: 'navigation-bar/eternal-flower/object/03.png',
            alt: '送长辈',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '送朋友',
            url: '#',
            image: 'navigation-bar/eternal-flower/object/04.png',
            alt: '送朋友',
            imageWidth: '68px',
            imageHeight: '68px'
          }
        ]
      }
    ],
    cities: { title: '', list: [] }
  },
  {
    title: { text: '蛋糕', url: '#' },
    links: [
      { text: '元祖', url: '#' },
      { text: '幸福西饼', url: '#' },
      { text: '21cake', url: '#' },
      { text: '诺心蛋糕', url: '#' },
      { text: '窝夫小子', url: '#' },
      { text: 'BONCAKE', url: '#' }
    ],
    additional: [
      {
        title: '蛋糕品牌',
        list: [
          {
            text: '幸福西饼蛋糕',
            url: '#',
            image: 'cake-brand/01.png',
            alt: '幸福西饼蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '元祖蛋糕',
            url: '#',
            image: 'cake-brand/02.png',
            alt: '元祖蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '诺心蛋糕',
            url: '#',
            image: 'cake-brand/03.png',
            alt: '诺心蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: 'cakeboss蛋糕',
            url: '#',
            image: 'cake-brand/04.png',
            alt: 'cakeboss蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '21CAKE蛋糕',
            url: '#',
            image: 'cake-brand/05.png',
            alt: '21CAKE蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: 'FALANCCAKE蛋糕',
            url: '#',
            image: 'cake-brand/06.png',
            alt: 'FALANCCAKE蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: 'BeDream蛋糕',
            url: '#',
            image: 'cake-brand/07.png',
            alt: 'BeDream蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '窝夫小子蛋糕',
            url: '#',
            image: 'cake-brand/08.png',
            alt: '窝夫小子蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '派悦坊蛋糕',
            url: '#',
            image: 'cake-brand/09.png',
            alt: '派悦坊蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: 'Mcake蛋糕',
            url: '#',
            image: 'cake-brand/10.png',
            alt: 'Mcake蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '巴黎贝甜蛋糕',
            url: '#',
            image: 'cake-brand/11.png',
            alt: '巴黎贝甜蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '心之和蛋糕',
            url: '#',
            image: 'cake-brand/12.png',
            alt: '心之和蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '米卡米蛋糕',
            url: '#',
            image: 'cake-brand/13.png',
            alt: '米卡米蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '四季榴莲蛋糕',
            url: '#',
            image: 'cake-brand/14.png',
            alt: '四季榴莲蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: 'Vcake蛋糕',
            url: '#',
            image: 'cake-brand/15.png',
            alt: 'Vcake蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: 'cakeonly专爱蛋糕',
            url: '#',
            image: 'cake-brand/16.png',
            alt: 'cakeonly专爱蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '哈根达斯蛋糕',
            url: '#',
            image: 'cake-brand/17.png',
            alt: '哈根达斯蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '全国蛋糕',
            url: '#',
            image: 'cake-brand/18.png',
            alt: '全国蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          },
          {
            text: '意然蛋糕',
            url: '#',
            image: 'cake-brand/19.png',
            alt: '意然蛋糕',
            imageWidth: '108px',
            imageHeight: '60px'
          }
        ]
      }
    ],
    cities: {
      title: '蛋糕城市',
      list: [
        { text: '北京', url: '#' },
        { text: '上海', url: '#' },
        { text: '广州', url: '#' },
        { text: '深圳', url: '#' },
        { text: '天津', url: '#' },
        { text: '成都', url: '#' },
        { text: '重庆', url: '#' },
        { text: '西安', url: '#' },
        { text: '苏州', url: '#' },
        { text: '杭州', url: '#' },
        { text: '南京', url: '#' },
        { text: '合肥', url: '#' },
        { text: '武汉', url: '#' },
        { text: '郑州', url: '#' },
        { text: '长沙', url: '#' },
        { text: '南昌', url: '#' },
        { text: '温州', url: '#' },
        { text: '沈阳', url: '#' },
        { text: '长春', url: '#' },
        { text: '大连', url: '#' },
        { text: '青岛', url: '#' },
        { text: '济南', url: '#' },
        { text: '福州', url: '#' },
        { text: '厦门', url: '#' },
        { text: '昆明', url: '#' },
        { text: '贵阳', url: '#' },
        { text: '南宁', url: '#' },
        { text: '常州', url: '#' },
        { text: '海口', url: '#' },
        { text: '太原', url: '#' },
        { text: '兰州', url: '#' },
        { text: '唐山', url: '#' },
        { text: '东莞', url: '#' },
        { text: '佛山', url: '#' },
        { text: '宁波', url: '#' },
        { text: '无锡', url: '#' },
        { text: '哈尔滨', url: '#' },
        { text: '石家庄', url: '#' },
        { text: '呼和浩特', url: '#' },
        { text: '乌鲁木齐', url: '#' },
        { text: '更多>>', url: '#' }
      ]
    }
  },
  {
    title: { text: '礼品 / 公仔 / 绿植', url: '#' },
    links: [],
    additional: [
      {
        title: '礼品品牌',
        list: [
          {
            text: '施华洛士奇',
            url: '#',
            image: 'gift-brand/01.png',
            alt: '施华洛士奇',
            imageWidth: '116px',
            imageHeight: '64px'
          },
          {
            text: 'Glam Ever潮牌饰品',
            url: '#',
            image: 'gift-brand/02.png',
            alt: 'Glam Ever潮牌饰品',
            imageWidth: '116px',
            imageHeight: '64px'
          },
          {
            text: '迪奥Dior',
            url: '#',
            image: 'gift-brand/03.png',
            alt: '迪奥Dior',
            imageWidth: '116px',
            imageHeight: '64px'
          },
          {
            text: '猫王收音机',
            url: '#',
            image: 'gift-brand/04.png',
            alt: '猫王收音机',
            imageWidth: '116px',
            imageHeight: '64px'
          },
          {
            text: 'Hello Kitty',
            url: '#',
            image: 'gift-brand/05.png',
            alt: 'Hello Kitty',
            imageWidth: '116px',
            imageHeight: '64px'
          }
        ]
      },
      {
        title: '礼品类别',
        list: [
          {
            text: '音乐盒',
            url: '#',
            image: 'navigation-bar/other/type/01.png',
            alt: '音乐盒',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '金箔花',
            url: '#',
            image: 'navigation-bar/other/type/02.png',
            alt: '金箔花',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '3D水晶内雕',
            url: '#',
            image: 'navigation-bar/other/type/03.png',
            alt: '3D水晶内雕',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '首饰/美妆',
            url: '#',
            image: 'navigation-bar/other/type/04.png',
            alt: '首饰/美妆',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '巧克力',
            url: '#',
            image: 'navigation-bar/other/type/05.png',
            alt: '巧克力',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '公仔/睡枕',
            url: '#',
            image: 'navigation-bar/other/type/06.png',
            alt: '公仔/睡枕',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '摆件/其他',
            url: '#',
            image: 'navigation-bar/other/type/07.png',
            alt: '摆件/其他',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '绿色植物',
            url: '#',
            image: 'navigation-bar/other/type/08.png',
            alt: '绿色植物',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '盆栽花卉',
            url: '#',
            image: 'navigation-bar/other/type/09.png',
            alt: '盆栽花卉',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '多肉植物盆栽',
            url: '#',
            image: 'navigation-bar/other/type/10.png',
            alt: '多肉植物盆栽',
            imageWidth: '68px',
            imageHeight: '68px'
          },
          {
            text: '蓝牙音箱',
            url: '#',
            image: 'navigation-bar/other/type/11.png',
            alt: '蓝牙音箱',
            imageWidth: '68px',
            imageHeight: '68px'
          }
        ]
      }
    ],
    cities: { title: '', list: [] }
  }
]

export {
  navigation,
  category
}
