"use strict";
/* 获取搜索框 */
var searchBox = document.querySelector('.search');
/* 获取遮罩层 */
var mask = document.querySelector('.mask');
/* 允许更改搜索框样式 */
var changeSearchBox = true;

/* 动态时间 */
function dynamicTime() {
    var date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        e = document.querySelector('.time h1');
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    e.innerHTML = `${h}:${m}`;
}
setInterval(dynamicTime(), 1000);

/* 当鼠标浮动至搜索框时 */
searchBox.onmouseover = () => {
    // 获取设备宽度
    let deviceWidth = document.body.clientWidth;
    // 判断是否允许更改搜索框样式
    if (changeSearchBox) {
        if (deviceWidth > 512) {
            // 当宽度大于512px、并且鼠标浮动到搜索框时将其宽度设为 512px
            document.querySelector('.search').style.width = '512px';
        } else {
            // 当宽度不足512px、并且鼠标浮动到搜索框时将其宽度设为 90%
            document.querySelector('.search').style.width = '90%';
        }
        // 更改搜索框透明度
        document.querySelector('.search').style.opacity = '.9';
        // 增加搜索框阴影
        document.querySelector('.search').style.boxShadow = '0 0 16px #222';
    }
}

/* 当鼠标离开搜索框时 */
searchBox.onmouseout = () => {
    // 判断是否允许更改搜索框样式
    if (changeSearchBox) {
        // 还原搜索框宽度
        document.querySelector('.search').style.width = '256px';
        // 还原搜索框透明度
        document.querySelector('.search').style.opacity = '.4';
        // 取消搜索框阴影
        document.querySelector('.search').style.boxShadow = '0';
    }
}

/* 当点击搜索框时*/
searchBox.onclick = () => {
    // 获取搜索框内容 & 创建script标签 & 将数据插入请求url
    var keywords = document.querySelector('.search').value;
    // 禁止更改搜索框样式
    changeSearchBox = false;
    // 背景放大 1.1倍
    document.querySelector('.bg').style.transform = 'scale(1.1)';
    // 背景高斯模糊 6px
    document.querySelector('.bg').style.filter = 'blur(6px)';
    // 背景晕影颜色加深
    document.querySelector('.mask').style.backgroundImage = 'radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 1) 166%)';
    // 显示关键词列表
    if (keywords != '') {
        document.querySelector('.keywords').style.display = 'block';
    }
}

/* 当点击遮罩层时 */
document.querySelector('.mask').onclick = () => {
    // 允许更改搜索框样式
    changeSearchBox = true;
    // 模拟鼠标从搜索框离开
    searchBox.onmouseout();
    // 取消背景放大倍率
    document.querySelector('.bg').style.transform = 'scale(1)';
    // 取消背景高斯模糊
    document.querySelector('.bg').style.filter = 'blur(0)';
    // 还原背景晕影颜色
    document.querySelector('.mask').style.backgroundImage = 'radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%)';
    // 隐藏关键词列表
    document.querySelector('.keywords').style.display = 'none';
}

/* 捕获键盘事件 */
document.querySelector('.search').onkeyup = (e) => {
    // 获取搜索框内容 & 创建script标签 & 将数据插入请求url
    var keywords = document.querySelector('.search').value,
        script = document.createElement('script'),
        url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=${keywords}&req=2&bs=jsonp&csor=1&cb=jsonp`;
    if (keywords == '') {
        // 如果搜索框为空则隐藏关键词列表
        document.querySelector('.keywords').style.display = 'none';
    } else {
        // 判断是否按下Enter键
        if (e.keyCode == 13) {
            window.open(`https://www.baidu.com/s?wd=${keywords}`, '_blank');
            return 0;
        }
        /*
            如果搜索框不为空则显示关键词列表并发送get请求
            发送请求后，服务端将会调用本地jsonp函数（回调函数）
        */
        document.querySelector('.keywords').style.display = 'block';
        script.setAttribute('src', url);
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

/* 服务端请求回调 */
function jsonp(data) {
    // 获取搜索框内容 & 获取关键词列表父级元素
    var keywords = document.querySelector('.search').value,
        keywordsList = document.querySelector('.keywords');
    // 向关键词列表的第一项插入翻译用户输入选项
    keywordsList.innerHTML = `<a href="https://fanyi.baidu.com/#en/zh/${keywords}" target="_blank">翻译：${keywords}</a>`;
    // 将关键词插入到关键词列表内
    if (data['g']) {
        data = data['g'];
        for (var i = 0; i < data.length; i++) {
            keywordsList.innerHTML += `<a href="https://www.baidu.com/s?wd=${data[i]['q']}" target="_blank">${data[i]['q']}</a>`;
        }
    }
}