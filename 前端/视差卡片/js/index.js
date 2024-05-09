import { ApplyList, resize } from './background/index.js'

const bg = document.querySelector('body')
const front = document.querySelector('#front')
const content = document.querySelector('main')

ApplyList.push((deltaX, deltaY) => {
    bg.style.backgroundPosition = `calc(50% + ${resize(deltaX, -1)}px) calc(50% + ${resize(deltaY, -1)}px)`
    front.style.transform = `translateX(${resize(deltaX, 4)}px) translateY(${resize(deltaY, 4)}px)`
    content.style = `--rt-x: ${deltaY}deg; --rt-y: ${-deltaX}deg`
})
