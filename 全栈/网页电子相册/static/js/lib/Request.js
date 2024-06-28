const requestImageList = (page = 0) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/images/list/page/${page}`, {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow'
    })
      .then((ori) => ori.json())
      .then((data) => resolve(data))
      .catch((rea) => reject(rea))
  })
}

const requestFavoriteImageList = (page = 0) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/images/list/group/favorite/page/${page}`, {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow'
    })
      .then((ori) => ori.json())
      .then((data) => resolve(data))
      .catch((rea) => reject(rea))
  })
}

const requestMarkImage = (id, group) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/images/list/mark/id/${id}/group/${group}`, {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow'
    })
      .then((res) => res.status === 200 || 204 ? resolve() : reject())
      .catch((rea) => reject(rea))
  })
}

const requestUnMarkImage = (id, group) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/images/list/unmark/id/${id}/group/${group}`, {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow'
    })
      .then((res) => res.status === 200 || 204 ? resolve() : reject())
      .catch((rea) => reject(rea))
  })
}

const requestDeleteImage = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/images/list/delete/${id}`, {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow'
    })
      .then((res) => res.status === 200 || 204 ? resolve() : reject())
      .catch((rea) => reject(rea))
  })
}

const requestUploadImages = (files) => {
  const formData = new FormData()
  Array.prototype.forEach.call(files, (file, i) => formData.append(i, file))
  return new Promise((resolve, reject) => {
    fetch('/api/images/upload', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      body: formData
    })
      .then((res) => res.status === 200 ? resolve(res) : reject(res))
      .catch((rea) => reject(rea))
  })
}

export {
  requestImageList,
  requestFavoriteImageList,
  requestMarkImage,
  requestUnMarkImage,
  requestDeleteImage,
  requestUploadImages
}
