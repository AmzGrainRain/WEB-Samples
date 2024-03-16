import { Message } from './Message.js'

export class ChatController {
  static titleDOM = document.querySelector('div.chat > h2.title')
  static chatHistoryListDOM = document.querySelector('div.chat > ul.messages')

  static setOnlinePerson(num) {
    this.titleDOM.innerHTML = `聊天室 | 当前有 ${num} 人在线`
  }

  /**
   * 向聊天列表追加消息
   * @param {Message} message 消息
   */
  static append(message) {
    this.chatHistoryListDOM.innerHTML += Message.generateHTML(
      message.uid,
      message.ts,
      message.target,
      message.text
    )
  }

  /**
   * 清空聊天记录列表
   */
  static clear() {
    this.chatHistoryListDOM.innerHTML = ``
  }
}
