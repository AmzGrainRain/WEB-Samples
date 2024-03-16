export class Message {
  /**
   * 
   * @param {string} uid 发送者 id
   * @param {number} ts 时间戳
   * @param {string} target 给谁的
   * @param {string} text 消息内容
   */
  constructor(uid, ts, target, text) {
    this.uid = uid
    this.ts = ts
    this.target = target
    this.text = text
  }

  /**
   * 接收一个 UID 判断是否与自身的 UID 相同
   * @param {string} anotherUID 另一个人的 UID
   * @returns boolean
   */
  for(anotherUID) {
    return this.uid === anotherUID
  }

  toString() {
    return `<li data-to="${this.target}"><span>${this.uid} @ ${new Date(this.ts).toLocaleString()}</span><p>${this.text}</p></li>`
  }

  /**
   * 根据传入的变量生成 HTML 字符串
   * @param {string} uid 用户 id
   * @param {number} ts 消息时间戳
   * @param {string} target 消息是给谁的
   * @param {string} text 消息内容
   * @returns HTML 字符串
   */
  static generateHTML(uid, ts, target, text) {
    return `<li data-to="${target}"><span>${uid} @ ${new Date(ts).toLocaleString()}</span><p>${text}</p></li>`
  }
}
