// 行为列表，内部保存回调函数，函数必须接受鼠标的 deltaX deltaY
const ApplyList = []
// 鼠标坐标归一化
const cvo = (posXY, windowWH) => {
    return ((posXY / windowWH) * 3).toFixed(1)
}

// 鼠标相对于页面的 x y
let clientX = 0
let clientY = 0
// 监听鼠标移动事件，更新鼠标位置
document.addEventListener('mousemove', (e) => {
    clientX = e.clientX
    clientY = e.clientY
})

const randerLoop = () => {
    const dx = cvo(clientX, window.innerWidth)
    const dy = cvo(clientY, window.innerHeight)
    ApplyList.forEach((fn) => {
        fn(dx, dy)
    })
    requestAnimationFrame(randerLoop)
}
requestAnimationFrame(randerLoop)

export { ApplyList }
