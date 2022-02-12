const pako = require('pako')

// Unit8Array 转 字符串
const u8aToString = (arr) => {
  let result = ''
  arr.forEach((item, i, items) => {
    result += String.fromCharCode(items[i])
  })
  return result
}

// 字符串 转 Unit8Array
const stringToU8a = (str) => {
  let result = []
  for (let i = 0, len = str.length; i < len; i++) {
    result.push(str.charCodeAt(i))
  }
  return new Uint8Array(result)
}

// 原字符串
const originString = 'This project is implemented using pakojs, and the string will be compressed into unit8array.'
console.log(`\n压缩前: ${originString}`)

// 压缩
const deflated = pako.deflate(originString)
console.log(`\n压缩后: ${u8aToString(deflated)}`)

// 解压缩
const restored = pako.inflate(deflated)
console.log(`\n解压后: ${u8aToString(restored)}`)
