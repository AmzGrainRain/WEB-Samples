import { ApplyList } from "../modules/parallax.js";

const card = document.querySelector("div.login");
const content = document.querySelector("div.login div.content");
ApplyList.push((dx, dy) => {
    dx -= 2;    // 向右移动 x 轴的中心位置
    dy -= 1.3;
    // 背景层变换
    card.style.transform = `rotateX(${-dy * 0.7}deg) rotateY(${dx}deg)`;
    // 内容层变换
    content.style.transform = `translateX(${dx * 8}px) translateY(${dy * 8}px)`;
});

let index = 0;
(async () => {
    // 拿到容器
    const imgContainer = document.querySelector("div.bg");
    // 请求
    const req = await fetch("/data/images.json");
    // string 转 json
    const imageList = await req.json();

    const indexList = [];
    // 随机选 10 个不重复的图片
    while (indexList.length < 10) {
        // 生成随机数
        const N = Math.floor(Math.random() * imageList.length);
        // 如果重复了则跳过这轮循环
        if (indexList.includes(N)) continue;
        // 将随机数加进 indexList 用于下次判断是否重复
        indexList.push(N);
        // 生成 img 标签
        const imgEl = document.createElement("img");
        imgEl.src = `${location.origin}/img/origin/${imageList[N].fileName + imageList[N].fileType}`;
        imgContainer.appendChild(imgEl);
    }

    // 获取所有背景 img
    const imgElementList = document.querySelectorAll("div.bg img");
    // 默认显示第一个
    imgElementList[0].classList.add("active");
    // 13 秒的定时器
    setInterval(() => {
        // 轮播索引
        index = index + 1 >= 10 ? 0 : index + 1;
        // 隐藏所有图片
        imgElementList.forEach((e) => {
            e.classList.remove("active");
        });
        // 显示本轮该显示的
        imgElementList[index].classList.add("active");
    }, 10000);
})();
