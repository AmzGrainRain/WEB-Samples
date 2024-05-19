import { ListData } from '../types/scene'

const sceneData: ListData = [
  {
    cardStyle: 'one',
    itemList: [
      { url: '#', image: 'scene/home_channel_lover.jpg', alt: '送恋人' }
    ]
  },
  {
    cardStyle: 'two',
    itemList: [
      { url: '#', image: 'scene/home_channel_elder2.jpg', alt: '送长辈' },
      { url: '#', image: 'scene/home_channel_friend.jpg', alt: '送朋友' }
    ]
  },
  {
    cardStyle: 'one',
    itemList: [
      { url: '#', image: 'scene/home_channel_birthday.jpg', alt: '生日祝福' }
    ]
  },
  {
    cardStyle: 'three',
    itemList: [
      { url: '#', image: 'scene/home_channel_express.jpg', alt: '表白求婚' },
      { url: '#', image: 'scene/home_channel_business.png', alt: '开业商务' },
      { url: '#', image: 'scene/home_channel_you_3.jpg', alt: '设计师甄选' }
    ]
  }
]

export {
  sceneData
}