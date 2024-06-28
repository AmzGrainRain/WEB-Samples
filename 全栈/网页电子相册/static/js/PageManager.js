import els from './Elements.js'
import {
  requestFavoriteImageList,
  requestImageList
} from "./lib/Request.js"

class PageManager {
  constructor() {
    this.total = 0
    this.page = 1
    this.maxPage = 0
    this.group = 'all'
  }

  requestPageData() {
    switch (this.group) {
      case 'all':
        return requestImageList(this.page - 1)
      case 'favorite':
        return requestFavoriteImageList(this.page - 1)
      default:
        return undefined
    }
  }

  async update() {
    const res = await this.requestPageData()
    this.total = res.total
    this.maxPage = Math.ceil(res.total / 30.0)

    els.ImageListBox.innerHTML = ''
    res.list.forEach(item => {
      els.ImageListBox.innerHTML += ContentTemplate(item)
    })
    els.PageNumber.innerHTML = `第 ${this.page} 页`
  }

  async resetPage() {
    this.page = 1
    this.update()
  }

  async nextPage() {
    if (this.page + 1 > this.maxPage) {
      alert('到头啦！！！')
      return
    }

    this.page += 1
    this.update()
  }

  async prevPage() {
    if (this.page - 1 < 0) {
      alert('到头啦！！！')
      return
    }

    this.page -= 1
    this.update()
  }

  async switchGroup(groupName) {
    this.group = groupName
    els.HomeButton.classList.remove('active')
    els.FavoriteButton.classList.remove('active')
    els.ImageListBox.innerHTML = ''

    switch (groupName) {
      case 'all':
        els.HomeButton.classList.add('active')
        break
      case 'favorite':
        els.FavoriteButton.classList.add('active')
        break
      default:
        return
    }

    this.resetPage()
  }
}

/**
 *
 * @param {{ id: string, type: string, group: string[] }} args
 * @returns
 */
const ContentTemplate = (args) => {
  const fileName = args.id + args.type
  const isFav = args.group.indexOf('favorite') !== -1

  return `
<div class="item" data-id="${args.id}" data-group="${args.group}">
  <img src="./img/overview/${fileName}" title="image" loading="lazy" alt="img" />
  <div class="box">
    <div class="icon">
      <div
        class="favicon like${isFav ? ' fill' : ''}"
        onclick="ToggleFavorite('${args.id}')"
        title="${isFav ? '取消收藏' : '收藏'}"
      >
        <i class="bx bxs-heart" style="color:#e55"></i>
      </div>
      <div
        class="view"
        onclick="ViewImage('${fileName}')"
        title="查看原图"
      >
        <i class="bx bxs-show" style="color:#e55"></i>
      </div>
      <div
        class="download"
        onclick="DownloadImage('${fileName}')"
        title="下载原图"
      >
        <i class="bx bxs-download" style="color:#e55"></i>
      </div>
      <div
        class="link"
        onclick="ShareImage('${fileName}')"
        title="分享"
      >
        <i class="bx bxs-share-alt" style="color:#e55"></i>
      </div>
      <div
        class="trash"
        onclick="DeleteImage('${args.id}')"
        title="删除（不可恢复）"
      >
        <i class="bx bxs-trash-alt" style="color:#e55"></i>
      </div>
    </div>
  </div>
</div>`
}

export {
  PageManager
}
