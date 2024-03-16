import {
  reqMarkImages,
  reqDeleteImages,
  reqUploadImages,
  reqLogin
} from '../lib/Request.js'

/**
 * 登录
 * @param {*} name 
 */
// window.login = () => {
//   const email = prompt('账号')
//   const password = prompt('密码')
//   if (email?.length) return
//   if (password?.length) return
//   reqLogin(email, password).then((res) => {
//     alert('登录成功')
//   }).catch((rea) => {
//     console.log(rea)
//     alert('登录失败')
//   })
// }

/**
 * 主题切换器
 */
window.themeSwitcher = () => {
  if (El.theme.href.indexOf('light.css') !== -1) {
    // 切换到亮色主题
    El.theme.href = './css/theme/dark.css'
    El.themeSwitcher.children[0].style.display = 'none'
    El.themeSwitcher.children[1].style.display = 'block'
  } else {
    // 切换到深色主题
    El.theme.href = './css/theme/light.css'
    El.themeSwitcher.children[0].style.display = 'block'
    El.themeSwitcher.children[1].style.display = 'none'
  }
}


/**
 * 标记为收藏
 * @param {string} name 文件名
 */
window.likeImage = (name) => {
  // 判定是否已标记为收藏
  let liked = false
  document.querySelector(`main div.item[data-name="${name}"] div.like`).classList.forEach((val) => {
    liked = val === 'fill' ? true : false
  })
  // 发送请求
  reqMarkImages(name, liked ? 'unlike' : 'like')
    .then(() => {
      liked = !liked
      if (liked) document.querySelector(`main div.item[data-name="${name}"] div.like`).classList.add('fill')
      else document.querySelector(`main div.item[data-name="${name}"] div.like`).classList.remove('fill')

      if (!liked && window.Mode.value === 'favorite') document.querySelector(`main div.item[data-name="${name}"]`).remove()
    })
    .catch((rea) => {
      console.log(rea)
      console.log(1111)
      alert('发生了一个错误，请前往控制台查看详细错误信息。')
    })
}


/**
 * 查看原图
 * @param {string} name 文件名
 */
window.viewImage = (name) => {
  window.open(`./img/origin/${name}`, '_blank')
}


/**
 * 下载原图
 * @param {string} name 文件名
 */
window.downloadImage = (name) => {
  const elTag = document.createElement('a')
  elTag.className = 'download_link'
  elTag.href = `./img/origin/${name}`
  elTag.download = name
  elTag.style.display = 'none'
  document.body.appendChild(elTag)
  elTag.click()
  elTag.remove()
}


/**
 * 分享图片
 * @param {string} name 文件名
 */
window.shareImage = (name) => {
  prompt('复制此链接分享即可', `${window.HostName}/img/origin/${name}`)
}


/**
 * 删除图片
 * @param {string} name 文件名
 */
window.deleteImage = (name) => {
  let msg = `文件名: ${name}\n`
  msg += `预览图路径: ./img/overview/${name}\n`
  msg += `高清图路径: ./img/origin/${name}\n`
  msg += `\n确定删除？`

  if (confirm(msg)) {
    reqDeleteImages(name).then(() => {
      document.querySelector(`main div.item[data-name="${name}"]`).remove()
      alert('成功删除')
    }).catch((rea) => {
      console.log(rea)
      alert('发生了一个错误，请前往控制台查看详细错误信息。')
    })
  }
}

/**
 * 上传图片
 */
window.uploadImage = () => {
  const elUpload = document.querySelector('input[name="upload"]')
  let execMultiple = false
  elUpload.addEventListener('change', (e) => {
    if (!execMultiple) {
      execMultiple = true
      reqUploadImages(e.target.files).then((res) => {
        console.log(res)
        alert('上传成功')
      }).catch((rea) => {
        console.log(rea)
        alert('发生了一个错误，请前往控制台查看详细错误信息。')
      })
    }
  })
  elUpload.click()
}