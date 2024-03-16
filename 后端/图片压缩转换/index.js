const fs = require('fs')
const sharp = require('sharp')

const originPath = './img/origin'
const outputPath = './img/output'
const originFolder = fs.readdirSync(originPath).sort((a, b) => a - b)
const outputFolder = fs.readdirSync(outputPath).sort((a, b) => a - b)

// 打印错误信息
const logErr = (title = '异常捕获', file, rea, remarks, scheme) => {
  console.log(`
========================= [ ${title} ] =========================
原始文件: ${file}
错误信息: ${rea}
备注信息: ${remarks}
处理方案: ${scheme}
`)
}

// 清空 output 目录
if (outputFolder.length) {
  console.log('帮你清理一下 output 目录...')
  outputFolder.forEach((fileName) => {
    fs.unlinkSync(`${outputPath}/${fileName}`)
  })
  console.log('清理 output 目录完成.')
}

// 处理jpg
if (originFolder.length) {
  originFolder.forEach((fileName) => {
    const names = fileName.split('.')
    // 转换图片
    sharp(`${originPath}/${fileName}`)
      .jpeg({
        quality: 100,
      })
      .toFile(`${outputPath}/${names[0]}.jpg`)
      .then(() => {
        console.log(`[处理完成] ${fileName}`)
      })
      .catch((rea) => {
        logErr(
          '异常捕获',
          `${originPath}/${fileName}`,
          `${String(rea).replace('\n', '')}`,
          '图片格式可能存在问题',
          '已为你强制转换'
        )
      })
  })
} else {
  console.log('origin 目录为空')
  console.log('终止运行')
}
