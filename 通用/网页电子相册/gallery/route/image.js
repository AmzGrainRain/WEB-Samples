const express = require('express')
const formidable = require('formidable')
const path = require('path')
const fse = require('fs-extra')
const sharp = require('sharp')

const app = express.Router()

app.post('/get-all', (req, res) => {
  // 验证表单数据完整性
  if (!String(req.body.page).length) return res.status(400).end()

  // 读取图片索引信息
  fse.readJSON(path.join(global.staticPath, '../images.json')).then((jsonData) => {
    jsonData = jsonData.sort((a, b) => a - b)
    const skip = 30
    const result = []

    // 若没有越界
    if (req.body.page * skip < jsonData.length) {
      // 截取内容
      for (let i = req.body.page * skip; i < req.body.page * skip + skip; i++) {
        if (jsonData?.[i]) result.push(jsonData[i])
      }
    }

    // 返回数据
    res.json(result)
  }).catch((err) => {
    console.log(err)
    res.status(500).end()
  })
})

app.post('/get-fav', (req, res) => {
  // 验证表单数据完整性
  if (!String(req.body.page).length) return res.status(400).end()

  // 读取图片索引信息
  fse.readJSON(path.join(global.staticPath, '../images.json')).then((jsonData) => {
    const tmp = []
    jsonData.forEach((item) => {
      if (item.like) tmp.push(item)
    })
    jsonData = tmp.sort((a, b) => a - b)
    const skip = 30
    const result = []

    // 若没有越界
    if (req.body.page * skip < jsonData.length) {
      // 截取内容
      for (let i = req.body.page * skip; i < req.body.page * skip + skip; i++) {
        if (jsonData?.[i]) result.push(jsonData[i])
      }
    }

    // 返回数据
    res.json(result)
  }).catch((err) => {
    console.log(err)
    res.status(500).end()
  })
})

app.post('/mark', (req, res) => {
  // if (!req.session.auth) return res.status(403).end()
  if (!String(req.body.name).length) return res.status(400).end()
  if (!String(req.body.mark).length) return res.status(400).end()
  const jsonFile = path.join(__dirname, '../images.json')

  fse.readJSON(jsonFile).then((jsonData) => {
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].name !== req.body.name) continue

      jsonData[i].like = req.body.mark === 'like' ? true : false
      break
    }
    fse.writeJSON(jsonFile, jsonData).catch((rea) => new Error(rea))
    res.status(204).end()
  }).catch((err) => {
    console.log(err)
    res.status(500).end()
  })
})

app.post('/delete', (req, res) => {
  // if (!req.session.auth) return res.status(403).end()
  if (!String(req.body.name).length) return res.status(400).end()
  if (!String(req.body.mark).length) return res.status(400).end()
  const jsonFile = path.join(__dirname, '../images.json')

  try {
    fse.unlinkSync(path.join(global.staticPath, `./img/overview/${req.body.name}`))
    fse.unlinkSync(path.join(global.staticPath, `./img/origin/${req.body.name}`))
    fse.readJSON(jsonFile).then((jsonData) => {
      for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].name !== req.body.name) continue
  
        jsonData.splice(i, 1)
        break
      }
      fse.writeJSON(jsonFile, jsonData).catch((rea) => new Error(rea))
      res.status(204).end()
    }).catch((err) => {
      console.log(err)
      res.status(500).end()
    })
  } catch (rea) {
    console.log(rea)
    return res.status(500).end()
  }
})

app.post('/upload', (req, res) => {
  // if (!req.session.auth) return res.status(403).end()

  fse.emptyDirSync(path.join(global.staticPath, './img/upload/origin'))
  const form = formidable({
    uploadDir: path.join(global.staticPath, './img/upload/origin'),
    allowEmptyFiles: false,
    keepExtensions: true,
    maxFileSize: 1024 * 1204 * 1024
  })
  const jsonFile = path.join(__dirname, '../images.json')

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err)
      return res.status(500).end()
    }

    // 仅当有图片上传时才触发
    if (Object.keys(files).length) {
      // 获取接收到的文件名，将其存放至一个数组
      const _files = []
      for (let i = 0; i < Object.keys(files).length; i++) {
        _files.push(files[i].newFilename)
      }
      // 读取 images.json
      const jsonData = fse.readJSONSync(jsonFile)

      try {
        // 遍历文件名数组
        _files.forEach((e) => {
          // 处于缓存目录中的文件
          const tmpFile = path.join(global.staticPath, `./img/upload/origin/${e}`)
          // 转储原图（文件）
          fse.moveSync(tmpFile, path.join(global.staticPath, `./img/origin/${e}`))
          // 压缩图片并转储缩略图
          sharp(path.join(global.staticPath, `./img/origin/${e}`))
            .jpeg({
              quality: 50,
            })
            .toFile(path.join(global.staticPath, `./img/overview/${e}`))
            .catch((rea) => new Error(rea))
          // 将修改写入 images.json
          jsonData.push({
            name: e,
            like: false
          })
          fse.writeJSONSync(jsonFile, jsonData)
        })
        // 完成操作后返回给客户端新增的图片
        res.json(_files)
      } catch (err) {
        console.log(err)
        // 遍历文件名列表
        _files.forEach((e) => {
          // 撤销修改
          fse.removeSync(path.join(global.staticPath, `./img/origin/${e}`))
          fse.removeSync(path.join(global.staticPath, `./img/overview/${e}`))
          for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i].name !== e) continue
            
            jsonData.splice(i, 1)
            break
          }
        })
        // 保存 images.json
        fse.writeJSONSync(jsonFile, jsonData)
        res.status(500).end()
      }
    } else res.json({})
  })
})

module.exports = app
