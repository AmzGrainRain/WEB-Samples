const reqImages = (_page = 0, mode = 'all') => {
  return new Promise((resolve, reject) => {
    fetch(mode === 'all' ? '/api/img/get-all' : '/api/img/get-fav', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: _page })
    })
      .then((ori) => ori.json())
      .then((data) => resolve(data))
      .catch((rea) => reject(rea))
  })
}

const reqMarkImages = (name, mark) => {
  return new Promise((resolve, reject) => {
    fetch('/api/img/mark', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, mark })
    })
      .then((res) => res.status === 200 || 204 ? resolve(res): reject(res))
      .catch((rea) => reject(rea))
  })
}

const reqDeleteImages = (name) => {
  return new Promise((resolve, reject) => {
    fetch('/api/img/delete', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then((res) => res.status === 200 || 204 ? resolve(res): reject(res))
      .catch((rea) => reject(rea))
  })
}

const reqUploadImages = (files) => {
  const formData = new FormData()
  for (let i = 0; i < files.length; i++) {
    formData.append(i, files[i])
  }
  return new Promise((resolve, reject) => {
    fetch('/api/img/upload', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      body: formData
    })
      .then((res) => res.status === 200 ? resolve(res): reject(res))
      .catch((rea) => reject(rea))
  })
}

// const reqLogin = (email, password) => {
//   return new Promise((resolve, reject) => {
//     fetch('/api/auth', {
//       method: 'POST',
//       mode: 'cors',
//       redirect: 'follow',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     })
//       .then((res) => res.status === 204 ? resolve(res): reject(res))
//       .catch((rea) => reject(rea))
//   })
// }

export {
  reqImages,
  reqMarkImages,
  reqDeleteImages,
  reqUploadImages
  // reqLogin
}