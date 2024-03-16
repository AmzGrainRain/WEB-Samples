/**
 * 制表符生成
 * @param { Number } num 指定数量
 * @returns { String } 返回指定数量的制表符
 */
function genTabs(num) {
  let str = ''
  for (let i = 0; i < num; i++) {
    str += '\t'
  }

  return str
}

/**
 * 制表符占用数量计算
 * @param { String } str 要计算的字符串
 * @returns { Number } 占多少个制表符
 */
function calcTabs(str) {
  /*
    1个tab = 7个英文或数字 = 3.5个中文
    字符[1] = tab[0.125]
    中文[1] = tab[0.25]
  */
  const chinese = /[\u4e00-\u9fa5]/g // 匹配汉字
  const char = /[`A-Za-z0-9~!@#$%\^&\*\?\(\)_\+-=\[\]\{\};:'"<>,\.\|\/\\ ]/g // 匹配字符
  const chineseNum = str.match(chinese) ? str.match(chinese).length : 0 // 匹配不到则等于0
  const charNum = str.match(char) ? str.match(char).length : 0 // 匹配不到则等于0
  const result = Math.ceil((chineseNum * 250 + charNum * 125) / 1000) // 向上取整

  // 内容刚好为一个tab时，应额外加一个tab。
  if (result === 1) return 2
  else return result
}

/**
 * 防止内容小于一个tab的长度时tab自动补全为一个tab
 * @param { String } str 给定一个字符串
 * @returns { String } 返回长度为8的字符串
 */
function fillSpace(str) {
  str = String(str) // 强制转换为字符串类型
  const chinese = /[\u4e00-\u9fa5]/g // 正则 - 匹配汉字
  const char = /[`A-Za-z0-9~!@#$%\^&\*\?\(\)_\+-=\[\]\{\};:'"<>,\.\|\/\\ ]/g // 正则 - 匹配字符
  const chineseNum = str.match(chinese) ? str.match(chinese).length : 0
  const charNum = str.match(char) ? str.match(char).length : 0
  // 获取长度（1个汉字 = 2，1个字母 = 1）
  let len = charNum + chineseNum * 2
  // 长度小于 8 时, 向后添加空格，使其长度刚好等于 8
  if (str.length < 8) {
    for (let i = 0; i < 8 - len; i++) {
      str += ' '
    }
  }

  return str
}

module.exports = (arr, ret = false) => {
  /**
   * 此数组长度自适应传入数据的列数
   * 此对象用于存储每一列最长的最大长度和最大长度所占tab数量
   * 数据结构：
   * tabs = [
   *   row: {
   *     len: 0, // 字符长度
   *     tabs: 0 // 占用tab
   *   }
   * ]
   */
  const tabs = {
    id: {
      len: 0, 
      tabs: 0 
    },
    item: {
      len: 0, // 字符长度
      tabs: 0 // 占用tab
    }
  }
  /**
   * 初始化 tabMax 对象
   */
  arr.forEach((row) => {
    row = row.split(',')
    const strLength = [
      String(row[0]), // 编号长度
      String(row[1]) // 物品名长度
    ]
    // 编号长度判断
    if (strLength[0].length > tabs.id.len) {
      tabs.id.len = strLength[0].length + 1
      tabs.id.tabs = calcTabs(strLength[0]) + 1
    }
    // 商品名长度判断
    if (strLength[1].length > tabs.item.len) {
      tabs.item.len = strLength[1].length + 1
      tabs.item.tabs = calcTabs(strLength[1]) + 1
    }
  })

  /**
   * 准备数据
   */
  let data = ''
  arr.forEach((row) => {
    row = row.split(',')
    const idTab = tabs.id.tabs - calcTabs(row[0])
    const itemTab = tabs.item.tabs - calcTabs(row[1])
  
    data += fillSpace(row[0]) + genTabs(idTab) + fillSpace(row[1]) + genTabs(itemTab) + row[2] + '\n'
  })

  if (ret) return data
  else console.log(data)
}