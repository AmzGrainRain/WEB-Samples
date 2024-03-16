const pako = require('pako')

// Unit8 Array to String
const u8aToString = arr => {
  let result = ''
  arr.forEach((item, i, items) => {
    result += String.fromCharCode(items[i])
  })
  return result
}

// String to Unit8 Array
const stringToU8a = str => {
  let result = []
  for (let i = 0, len = str.length; i < len; i++) {
    result.push(str.charCodeAt(i))
  }
  return new Uint8Array(result)
}

// 原字符串
const originString = 'This project uses pakojs open source library to realize string compression function.'
console.log('\n压缩前:')
console.log(stringToU8a(originString))

// 压缩
const deflated = pako.deflate(originString) // Unit8Array
const deflatedString = u8aToString(deflated)
console.log('\n压缩后:')
console.log(deflated)

// 解压缩
const restored = pako.inflate(stringToU8a(deflatedString))
console.log('\n解压后:')
console.log(restored)