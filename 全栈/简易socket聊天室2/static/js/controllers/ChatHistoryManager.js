import { Message } from './Message.js'

class ChatHistoryManager {
  static chatHistoryList = document.querySelector('main > div.chat ul.messages')

  /**
   * 从云端加载聊天记录
   */
  static fetchFromRemote() {}

  /**
   * 从本地加载聊天记录
   * @returns {string} HTML 字符串
   */
  static loadFromLocal() {
    const chatHistoryData = localStorage.getItem('chat_history') || '[]'
    const chatHistory = JSON.parse(chatHistoryData)
    if (chatHistory.length !== 0) {
      this.chatHistoryList.innerHTML = Message.generateHTML(
        '提示',
        Date.now(),
        'null',
        '正在从本地加载历史聊天记录...'
      )

      let htmlString = ''
      chatHistory.forEach((item) => {
        htmlString += Message.generateHTML(item.uid, item.ts, item.to, item.message)
      })
      this.chatHistoryList.innerHTML = htmlString
    }
  }

  /**
   * 保存聊天记录到本地
   * @param {Message} message 消息
   */
  static saveToLocal(message) {
    const chatHistoryData = localStorage.getItem('chat_history') || '[]'
    const chatHistory = JSON.parse(chatHistoryData)
    console.log(chatHistory)
    chatHistory.push({
      uid: message.uid,
      ts: message.ts,
      to: message.to,
      message: message.text
    })
    localStorage.setItem('chat_history', JSON.stringify(chatHistory))
  }

  /**
   * 清空本地聊天记录
   */
  static clear() {
    localStorage.setItem('chat_history', '')
  }
}

export { ChatHistoryManager }
