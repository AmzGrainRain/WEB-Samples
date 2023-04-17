import { NavListType, GroupDataType } from '../types/navigation-bar'

const navList: Array<NavListType> = [
  { text: '鲜花', url: '#' },
  { text: '永生花', url: '#' },
  { text: '蛋糕', url: '#' },
  { text: '礼品', url: '#' },
  { text: '巧克力', url: '#' },
  { text: '花语大全', url: '#' },
  { text: '企业团购', url: '#' },
  { text: '设计师甄选鲜花', url: '#' }
]

const categoryGroupData: Array<GroupDataType> = [
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
            image: 'assets/navigation-bar/eternal-flower/type/01.png',
            alt: '永生瓶花'
          },
          {
            text: '经典花盒',
            url: '#',
            image: 'assets/navigation-bar/eternal-flower/type/02.png',
            alt: '经典花盒'
          },
          {
            text: '特色永生花',
            url: '#',
            image: 'assets/navigation-bar/eternal-flower/type/03.png',
            alt: '特色永生花'
          },
          {
            text: '巨型玫瑰',
            url: '#',
            image: 'assets/navigation-bar/eternal-flower/type/04.png',
            alt: '巨型玫瑰'
          }
        ]
      },
      {
        title: '对象',
        list: [
          {
            text: '送女友',
            url: '#',
            image: 'assets/navigation-bar/eternal-flower/object/01.png',
            alt: ''
          },
          {
            text: '送男友',
            url: '#',
            image: 'assets/navigation-bar/eternal-flower/object/02.png',
            alt: '送男友'
          },
          {
            text: '送长辈',
            url: '#',
            image: 'assets/navigation-bar/eternal-flower/object/03.png',
            alt: '送长辈'
          },
          {
            text: '送朋友',
            url: '#',
            image: 'assets/navigation-bar/eternal-flower/object/04.png',
            alt: '送朋友'
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
          { text: '幸福西饼蛋糕', url: '#', image: 'assets/navigation-bar/cake/01.png', alt: '幸福西饼蛋糕' },
          { text: '元祖蛋糕', url: '#', image: 'assets/navigation-bar/cake/02.png', alt: '元祖蛋糕' },
          { text: '诺心蛋糕', url: '#', image: 'assets/navigation-bar/cake/03.png', alt: '诺心蛋糕' },
          { text: 'cakeboss蛋糕', url: '#', image: 'assets/navigation-bar/cake/04.png', alt: 'cakeboss蛋糕' },
          { text: '21CAKE蛋糕', url: '#', image: 'assets/navigation-bar/cake/05.png', alt: '21CAKE蛋糕' },
          { text: 'FALANCCAKE蛋糕', url: '#', image: 'assets/navigation-bar/cake/06.png', alt: 'FALANCCAKE蛋糕' },
          { text: 'BeDream蛋糕', url: '#', image: 'assets/navigation-bar/cake/07.png', alt: 'BeDream蛋糕' },
          { text: '窝夫小子蛋糕', url: '#', image: 'assets/navigation-bar/cake/08.png', alt: '窝夫小子蛋糕' },
          { text: '派悦坊蛋糕', url: '#', image: 'assets/navigation-bar/cake/09.png', alt: '派悦坊蛋糕' },
          { text: 'Mcake蛋糕', url: '#', image: 'assets/navigation-bar/cake/10.png', alt: 'Mcake蛋糕' },
          { text: '巴黎贝甜蛋糕', url: '#', image: 'assets/navigation-bar/cake/11.png', alt: '巴黎贝甜蛋糕' },
          { text: '心之和蛋糕', url: '#', image: 'assets/navigation-bar/cake/12.png', alt: '心之和蛋糕' },
          { text: '米卡米蛋糕', url: '#', image: 'assets/navigation-bar/cake/13.png', alt: '米卡米蛋糕' },
          { text: '四季榴莲蛋糕', url: '#', image: 'assets/navigation-bar/cake/14.png', alt: '四季榴莲蛋糕' },
          { text: 'Vcake蛋糕', url: '#', image: 'assets/navigation-bar/cake/15.png', alt: 'Vcake蛋糕' },
          { text: 'cakeonly专爱蛋糕', url: '#', image: 'assets/navigation-bar/cake/16.png', alt: 'cakeonly专爱蛋糕' },
          { text: '哈根达斯蛋糕', url: '#', image: 'assets/navigation-bar/cake/17.png', alt: '哈根达斯蛋糕' },
          { text: '全国蛋糕', url: '#', image: 'assets/navigation-bar/cake/18.png', alt: '全国蛋糕' },
          { text: '意然蛋糕', url: '#', image: 'assets/navigation-bar/cake/19.png', alt: '意然蛋糕' }
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
            image: 'assets/navigation-bar/other/brand/01.png',
            alt: '施华洛士奇'
          },
          {
            text: 'Glam Ever潮牌饰品',
            url: '#',
            image: 'assets/navigation-bar/other/brand/02.png',
            alt: 'Glam Ever潮牌饰品'
          },
          {
            text: '迪奥Dior',
            url: '#',
            image: 'assets/navigation-bar/other/brand/03.png',
            alt: '迪奥Dior'
          },
          {
            text: '猫王收音机',
            url: '#',
            image: 'assets/navigation-bar/other/brand/04.png',
            alt: '猫王收音机'
          },
          {
            text: 'Hello Kitty',
            url: '#',
            image: 'assets/navigation-bar/other/brand/05.png',
            alt: 'Hello Kitty'
          }
        ]
      },
      {
        title: '礼品类别',
        list: [
          {
            text: '音乐盒',
            url: '#',
            image: 'assets/navigation-bar/other/type/01.png',
            alt: '音乐盒'
          },
          {
            text: '金箔花',
            url: '#',
            image: 'assets/navigation-bar/other/type/02.png',
            alt: '金箔花'
          },
          {
            text: '3D水晶内雕',
            url: '#',
            image: 'assets/navigation-bar/other/type/03.png',
            alt: '3D水晶内雕'
          },
          {
            text: '首饰/美妆',
            url: '#',
            image: 'assets/navigation-bar/other/type/04.png',
            alt: '首饰/美妆'
          },
          {
            text: '巧克力',
            url: '#',
            image: 'assets/navigation-bar/other/type/05.png',
            alt: '巧克力'
          },
          {
            text: '公仔/睡枕',
            url: '#',
            image: 'assets/navigation-bar/other/type/06.png',
            alt: '公仔/睡枕'
          },
          {
            text: '摆件/其他',
            url: '#',
            image: 'assets/navigation-bar/other/type/07.png',
            alt: '摆件/其他'
          },
          {
            text: '绿色植物',
            url: '#',
            image: 'assets/navigation-bar/other/type/08.png',
            alt: '绿色植物'
          },
          {
            text: '盆栽花卉',
            url: '#',
            image: 'assets/navigation-bar/other/type/09.png',
            alt: '盆栽花卉'
          },
          {
            text: '多肉植物盆栽',
            url: '#',
            image: 'assets/navigation-bar/other/type/10.png',
            alt: '多肉植物盆栽'
          },
          {
            text: '蓝牙音箱',
            url: '#',
            image: 'assets/navigation-bar/other/type/11.png',
            alt: '蓝牙音箱'
          }
        ]
      }
    ],
    cities: { title: '', list: [] }
  }
]

export {
  navList,
  categoryGroupData
}
