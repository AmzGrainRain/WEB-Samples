import els from './Elements.js'
import { PageManager } from './PageManager.js'
import {
  requestDeleteImage,
  requestMarkImage,
  requestUnMarkImage,
  requestUploadImages
} from './lib/Request.js'

const pageManager = new PageManager()
pageManager.update()

window.ShowFavorite = () => {
  pageManager.switchGroup('all')
}

window.ShowFavorite = () => {
  pageManager.switchGroup('favorite')
}

window.UploadImage = () => {
  els.UploadController.click()
}

window.PrevPage = () => {
  pageManager.prevPage()
}

window.NextPage = () => {
  pageManager.nextPage()
}

window.ToggleFavorite = (id) => {
  const itemEl = document.querySelector(`main div.item[data-id="${id}"]`)
  const group = itemEl.getAttribute('data-group')

  if (group === 'favorite') {
    requestUnMarkImage(id, 'favorite').then(() => {
      if (pageManager.group === 'favorite') {
        itemEl.remove()
      }
      else {
        itemEl.querySelector('div.favicon').classList.remove('fill')
      }
    })
  }
  else {
    requestMarkImage(id, 'favorite').then(() => {
      itemEl.querySelector('div.favicon').classList.add('fill')
    })
  }
}

window.DownloadImage = (fileName) => {
  const a = document.createElement('a')
  a.href = `./img/origin/fileName`
  a.download = fileName
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  a.remove()
}

window.ViewImage = (fileName) => {
  window.open(`./img/origin/${fileName}`, '_blank')
}

window.ShareImage = (fileName) => {
  prompt('复制此链接分享即可', `${window.HostName}/img/origin/${fileName}`)
}

window.DeleteImage = (id) => {
  if (confirm('确定删除？')) {
    requestDeleteImage(id)
      .then(() => {
        document.querySelector(`main div.item[data-id="${id}"]`).remove()
        alert('成功删除')
      })
      .catch((rea) => {
        console.log(rea)
        alert('发生了一个错误，请前往控制台查看详细错误信息。')
      })
  }
}

els.UploadController.addEventListener('change', (e) => {
  if (e.target.files.length == 0) return
  requestUploadImages(e.target.files)
    .then((res) => {
      alert('上传成功')
    })
    .catch(err => {
      console.error(err)
      alert('上传失败')
    })
})
