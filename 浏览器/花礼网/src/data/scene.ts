import { DataType } from '../types/scene'

const sceneData: DataType[] = [
  {
    cardStyle: 'one',
    itemList: [
      { url: '#', image: 'assets/scene/home_channel_lover.jpg', alt: '送恋人' }
    ]
  },
  {
    cardStyle: 'two',
    itemList: [
      { url: '#', image: 'assets/scene/home_channel_elder2.jpg', alt: '送长辈' },
      { url: '#', image: 'assets/scene/home_channel_friend.jpg', alt: '送朋友' }
    ]
  },
  {
    cardStyle: 'one',
    itemList: [
      { url: '#', image: 'assets/scene/home_channel_birthday.jpg', alt: '生日祝福' }
    ]
  },
  {
    cardStyle: 'three',
    itemList: [
      { url: '#', image: 'assets/scene/home_channel_express.jpg', alt: '表白求婚' },
      { url: '#', image: 'assets/scene/home_channel_business.png', alt: '开业商务' },
      { url: '#', image: 'assets/scene/home_channel_you_3.jpg', alt: '设计师甄选' }
    ]
  }
]

export {
  sceneData
}