const path = require('path')
const fse = require('fs-extra')
const musicMetadata = require('music-metadata')

// 清除转换结果目录
fse.emptyDirSync('./transform/')

// 读取源文件目录
const files = fse.readdirSync('./origin')

// 可能会出错
try {
  files.forEach((item) => {
    // 读取文件 ID3 数据
    musicMetadata.parseFile(`./origin/${item}`).then(info => {
      // 出错终止
      if (!info) return console.log('读取文件 ID3 数据时出现错误。')
      // 文件扩展名
      const extName = path.extname(item)
      // 源路径
      const originPath = `./origin/${item}`
      // 新路径
      const newPath = `./transform/${info.common.artist}-${info.common.title}${extName}`
      // 复制到新目录并重命名
      fse.copyFileSync(originPath, newPath)
    })
  })
} catch (err) {
  console.log(err)
}
