arr = []
document.querySelectorAll("#content > div.section_inner > div.mod_mv.mod_slide > div li").forEach((e, i) => {
  const title = e.querySelector('.mv_list__title').innerText
  const author = e.querySelector('.mv_list__singer').innerText
  const play = e.querySelector('.mv_list__listen').innerText
  arr.push({
    image: `/images/carousel/${i}.webp`,
    name: title,
    author: author,
    play: play,
    href: '#'
  })
})
JSON.stringify(arr)



// 数据分组
let tmp = []
let final = []
let t = 0
arr.forEach(i => {
  tmp.push(i)
  t += 1
  // 10 个一组
  if (t === 10) {
    t = 0
    final.push(tmp)
    tmp = []
  }
})

// 批量下载图片（下载速度太快浏览器不认，所以设置一个递增的延时器）
document.querySelectorAll("#content > div.section_inner > div.mod_mv.mod_slide > div li").forEach((e, i) => {
  setTimeout(() => {
    const src = e.querySelector('.mv_list__pic').src
    const aTag = document.createElement('a')
    aTag.style.display = 'none'
    aTag.href = src
    aTag.download = `${i}.webp`
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }, i * 1000)
})
