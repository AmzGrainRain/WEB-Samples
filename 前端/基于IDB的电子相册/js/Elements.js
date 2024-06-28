export default {
    HomeButton: document.querySelector("nav ul.left li.home"),          // 首页按钮
    FavoriteButton: document.querySelector("nav ul.left li.favorite"),  // 收藏页按钮
    LogoutButton: document.querySelector("nav ul.left li.logout"),      // 注销按钮
    PageNumber: document.querySelector("nav li.page"),                  // 页码
    PrevPageButton: document.querySelector("nav ul.right li.prev"),     // 上一页
    NextPageButton: document.querySelector("nav ul.right li.next"),     // 下一页
    JumpToPageBox: document.querySelector("nav ul.right div.to-page"),

    ThemeSwitchButton: document.querySelector("#switch-theme"),         // 主题切换
    ImageListBox: document.querySelector("main"),                       // 图片展示曲的根元素
    PreviewImage: document.querySelector("#preview-image img"),         // 预览根元素
    PreviewImageBox: document.querySelector("#preview-image"),          // 预览图元素 (img)
};
