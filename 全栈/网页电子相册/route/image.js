const express = require('express')
const formidable = require('formidable')
const path = require('path')
const fse = require('fs-extra')
const sharp = require('sharp')
const app = express.Router()

const findImageById = (id) => {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].id === id) return i
  }
  return -1
}

app.get('/carousel', (req, res)  => {
  // const list = []
  // for (let i = 0; i < 6; ++i) {
  //   const image = data[Math.floor(Math.random() * data.length)];
  //   if (list.findIndex((e) => e.id == image.id))
  // }
  res.json({
    ts: Date.now(),
    total: data.length
  })
})

app.get('/list/page/:page/', (req, res) => {
  try {
    const begin = parseInt(req.params.page) * 30
    let end = begin + 31
    if (end > data.length) end = data.length
    res.json({
      ts: Date.now(),
      list: data.slice(begin, end),
      total: data.length
    })
  }
  catch (err) {
    console.log(err)
    res.status(500).end()
  }
})

app.get('/list/group/:group/page/:page', (req, res) => {
  try {
    const list = data.filter((item) => item.group.findIndex((name) => name == req.params.group) !== -1)
    res.json({
      ts: Date.now(),
      list,
      total: list.length
    })
  }
  catch (err) {
    console.log(err)
    res.status(500).end()
  }
})

app.get('/list/mark/id/:id/group/:group', (req, res) => {
  data.forEach(item => {
    if (item.id === req.params.id) {
      item.group.push(req.params.group)
    }
  })
  fse.writeJSONSync(dataFilePath, data)
  res.status(204).end()
})

app.get('/list/unmark/id/:id/group/:group', (req, res) => {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].id !== req.params.id) continue

    let targetIndex = data[i].group.findIndex((name) => name === req.params.group)
    const newGroup = []
    for (let j = 0; j < data[i].group.length; ++j) {
      if (j == targetIndex) continue
      newGroup.push(data[i].group[j])
    }
    data[i].group = newGroup
    break
  }
  fse.writeJSONSync(dataFilePath, data)
  res.status(204).end()
})

app.get('/list/delete/:id', (req, res) => {
  try {
    if (!req.params?.id) return res.status(400).end()

    const i = findImageById(req.params.id);
    if (i !== -1) {
      fse.unlinkSync(path.join(global.staticPath, `./img/overview/${data[i].id}.jpg`))
      fse.unlinkSync(path.join(global.staticPath, `./img/origin/${data[i].id}.jpg`))
      data.splice(i, 1)
    }

    res.status(204).end()
  } catch (rea) {
    console.log(rea)
    res.status(500).end()
  }
})

app.post('/upload', (req, res) => {
  fse.emptyDirSync(path.join(global.staticPath, './img/upload'))
  const form = formidable({
    uploadDir: path.join(global.staticPath, './img/upload'),
    allowEmptyFiles: false,
    keepExtensions: true,
    maxFileSize: 1024 * 1204 * 1024
  })

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err)
      return res.status(500).end()
    }

    try {
      const uploaded = []
      const length = Object.keys(files).length;
      for (let i = 0; i < length; ++i) {
        const tmpFilePath = files[i].filepath
        const fileName = files[i].newFilename
        const fileType = fileName.slice(fileName.lastIndexOf('.'))
        const id = fileName.slice(0, fileName.lastIndexOf('.'))

        await (sharp(tmpFilePath)
          .jpeg({ quality: 30, progressive: true })
          .resize(800)
          .toFile(path.join(global.staticPath, `img/overview/${id}.jpg`)))
          .catch((rea) => new Error(rea))

        await (sharp(tmpFilePath)
          .jpeg({ quality: 95 })
          .toFile(path.join(global.staticPath, `img/origin/${id}.jpg`)))
          .catch((rea) => new Error(rea))

        // fse.moveSync(tmpFilePath, path.join(global.staticPath, `img/origin/${fileName}`))
        data.push({ id, type: '.jpg', group: [] })
        uploaded.push(fileName)
      }
      fse.writeJSONSync(dataFilePath, data)
      res.json(uploaded)
    } catch (err) {
      console.log(err)
      res.status(500).end()
    }
  })
})

module.exports = app
