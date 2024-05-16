type CarouselItemT = {
  image: string
  name: string
  author: string
  duration: string
}

const CarouselData: [
  CarouselItemT,
  CarouselItemT,
  CarouselItemT,
  CarouselItemT,
  CarouselItemT,
  CarouselItemT,
  CarouselItemT,
  CarouselItemT,
  CarouselItemT
][] = [
  [
    {
      image: '0.webp',
      name: 'Last Night',
      author: '刘耀文',
      duration: '03:28'
    },
    {
      image: '1.webp',
      name: '开始推理吧《开始推理吧2》主题曲',
      author: '白宇 /迪丽热巴 /摩登兄弟刘宇宁 /张凌赫 /周柯宇',
      duration: '03:14'
    },
    {
      image: '2.webp',
      name: '不完美的礼物',
      author: '幼稚园杀手 /赵辰龙 (Dragon X)',
      duration: '03:05'
    },
    {
      image: '3.webp',
      name: '其时',
      author: '希林娜依高',
      duration: '03:22'
    },
    {
      image: '4.webp',
      name: 'euphoria (Explicit)',
      author: 'Kendrick Lamar',
      duration: '06:23'
    },
    {
      image: '5.webp',
      name: 'butterfly effect',
      author: '野田愛実',
      duration: '03:38'
    },
    {
      image: '6.webp',
      name: 'Stay Hungry',
      author:
        'Tablo (타블로) /杨和苏KeyNG /大张伟 /法老 /谢帝 /范丞丞 /张震岳 /MC HotDog 热狗',
      duration: '06:41'
    },
    {
      image: '7.webp',
      name: 'No Biggie',
      author: 'ITZY (있지)',
      duration: '03:01'
    },
    {
      image: '8.webp',
      name: '星火沐春风',
      author: '孙楠',
      duration: '03:43'
    }
  ],
  [
    {
      image: '9.webp',
      name: '独自绽放《微暗之火》电视剧主题曲',
      author: '张靓颖',
      duration: '03:30'
    },
    {
      image: '10.webp',
      name: '那些我没说的话',
      author: '时代少年团',
      duration: '03:37'
    },
    {
      image: '11.webp',
      name: '永不熄灭的火焰《和平精英》5周年主题曲',
      author: '华晨宇 /和平精英',
      duration: '05:40'
    },
    {
      image: '12.webp',
      name: 'Next Story',
      author: 'NINEONE #',
      duration: '02:10'
    },
    {
      image: '13.webp',
      name: '自在',
      author: '韦唯 /陈婧霏',
      duration: '03:13'
    },
    {
      image: '14.webp',
      name: '末路狂花钱《末路狂花钱》电影同名主题曲',
      author: '宝石Gem',
      duration: '03:38'
    },
    {
      image: '15.webp',
      name: '终自由 (Liberty)',
      author: '黄绮珊 /秦四风 /JIHU',
      duration: '05:02'
    },
    {
      image: '16.webp',
      name: '回合',
      author: '金志文',
      duration: '03:42'
    },
    {
      image: '17.webp',
      name: 'But I',
      author: '颂乐 (솔라)',
      duration: '02:40'
    }
  ],
  [
    {
      image: '18.webp',
      name: '그래, 늘 그랬듯 언제나 (As always)',
      author: '李昌燮 (이창섭)',
      duration: '03:49'
    },
    {
      image: '19.webp',
      name: 'A Day《背着善宰跑》韩剧插曲',
      author: '최종호 (崔钟浩)',
      duration: '03:52'
    },
    {
      image: '20.webp',
      name: '어리고 부끄럽고 바보 같은 (Little Things)',
      author: 'Xdinary Heroes',
      duration: '03:32'
    },
    {
      image: '21.webp',
      name: '모스부호 (Morse code)',
      author: 'U-KISS (유키스)',
      duration: '03:34'
    },
    {
      image: '22.webp',
      name: 'なんもない (feat. 星街すいせい, sakuma.)',
      author: 'MAISONdes /星街すいせい /sakuma.',
      duration: '03:37'
    },
    {
      image: '23.webp',
      name: '会いに行くのに (Wish I could see you, but)',
      author: '爱缪 (あいみょん)',
      duration: '05:12'
    },
    {
      image: '24.webp',
      name: '我的妈祖娘娘',
      author: '肖山',
      duration: '03:32'
    },
    {
      image: '25.webp',
      name: '城里的月光《穿过月亮的旅行》电影月光守护曲',
      author: '魏如萱 /Ice Paper',
      duration: '04:38'
    },
    {
      image: '26.webp',
      name: '穿过月亮去旅行电影《穿过月亮的旅行》推广曲',
      author: '薛凯琪',
      duration: '04:10'
    }
  ],
  [
    {
      image: '27.webp',
      name: 'I Say《少年巴比伦》网剧白蓝追梦主题曲',
      author: '黄龄',
      duration: '04:55'
    },
    {
      image: '28.webp',
      name: 'One Kiss',
      author: 'RIIZE (라이즈)',
      duration: '03:32'
    },
    {
      image: '29.webp',
      name: '逆光少年《猪猪侠大电影·星际行动》电影主题曲',
      author: '林欢畅 /陈思涵 /冀可欣 /袁芷欣 /梁景耀 /杨其晖 /李佳荷',
      duration: '05:18'
    },
    {
      image: '30.webp',
      name: '再看一眼年少的你 & 来不及《光影少年》音乐剧唱段',
      author: '徐子未 /陈壬权 /光影少年',
      duration: '07:44'
    },
    {
      image: '31.webp',
      name: '赛道',
      author: '孙耀威',
      duration: '03:03'
    },
    {
      image: '32.webp',
      name: '산할아버지 (Grandpa of Mountain)',
      author: 'Wonstein (원슈타인)',
      duration: '03:20'
    },
    {
      image: '33.webp',
      name: 'All to myself',
      author: 'Nene鄭乃馨',
      duration: '03:04'
    },
    {
      image: '34.webp',
      name: '猴子从来不抽筋',
      author: '方艺FANG',
      duration: '03:49'
    },
    {
      image: '35.webp',
      name: 'Horizon',
      author: 'A7i',
      duration: '03:19'
    }
  ],
  [
    {
      image: '36.webp',
      name: 'Olympics',
      author: '幸存者联盟 /华语群星',
      duration: '06:05'
    },
    {
      image: '37.webp',
      name: 'Broken Sun',
      author: '塞壬唱片-MSR /Adam Gubman',
      duration: '01:44'
    },
    {
      image: '38.webp',
      name: '勇气大爆发 (钢琴纯享版)',
      author: '土豆王国小乐队 /龚喜',
      duration: '03:23'
    },
    {
      image: '39.webp',
      name: '月亮惹的祸',
      author: '半吨兄弟',
      duration: '03:27'
    },
    {
      image: '40.webp',
      name: '妥协',
      author: '王忻辰',
      duration: '03:42'
    },
    {
      image: '41.webp',
      name: '满城风雨',
      author: '宋之锘 /韩熙子',
      duration: '02:56'
    },
    {
      image: '42.webp',
      name: '别再看月亮',
      author: '袁小葳',
      duration: '04:00'
    },
    {
      image: '43.webp',
      name: '岁月的酒、生活的烟',
      author: '独琴者',
      duration: '03:34'
    },
    {
      image: '44.webp',
      name: '妥协 (宿命版)',
      author: '陈默之',
      duration: '02:49'
    }
  ],
  [
    {
      image: '45.webp',
      name: '燃光《神印王座》动画插曲',
      author: '马里奥',
      duration: '03:09'
    },
    {
      image: '46.webp',
      name: '风啊花啊山啊海啊',
      author: 'Uu (刘梦妤)',
      duration: '03:17'
    },
    {
      image: '47.webp',
      name: '如果可以 (说唱版)',
      author: '坠. /歪歪超',
      duration: '03:33'
    },
    {
      image: '48.webp',
      name: '炽热青春',
      author:
        'Black Angel /周宣绮 /Nov.偶尔 /瑞达 /OglaYe /李宪博 /Hailie黑梨 /施泽立业Richshi /RGR Y于新垚 /伊拉娜',
      duration: '02:58'
    },
    {
      image: '49.webp',
      name: 'Last Night',
      author: '刘耀文',
      duration: '03:28'
    },
    {
      image: '50.webp',
      name: '开始推理吧《开始推理吧2》主题曲',
      author: '白宇 /迪丽热巴 /摩登兄弟刘宇宁 /张凌赫 /周柯宇',
      duration: '03:14'
    },
    {
      image: '51.webp',
      name: '不完美的礼物',
      author: '幼稚园杀手 /赵辰龙 (Dragon X)',
      duration: '03:05'
    },
    {
      image: '52.webp',
      name: '其时',
      author: '希林娜依高',
      duration: '03:22'
    },
    {
      image: '53.webp',
      name: 'euphoria (Explicit)',
      author: 'Kendrick Lamar',
      duration: '06:23'
    }
  ]
]

export { CarouselData }
export type { CarouselItemT }
