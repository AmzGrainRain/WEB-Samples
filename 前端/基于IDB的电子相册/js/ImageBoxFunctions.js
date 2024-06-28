import els from "./Elements.js"

/**
 * 下载图片
 * @param {string} fileName 文件名
 */
const downloadImage = (fileName) => {
    const a = document.createElement("a");
    a.href = `${location.origin}/img/origin/${fileName}`;
    a.download = fileName;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
};

/**
 * 打开预览图窗口
 * @param {string} fileName 文件名
 */
const viewImage = (fileName) => {
    els.PreviewImage.src = `${location.origin}/img/origin/${fileName}`;
    els.PreviewImageBox.classList.remove("deactive");
    els.PreviewImageBox.classList.add("active");
};

/**
 * 关闭预览图窗口
 */
const closeViewImage = () => {
    els.PreviewImageBox.classList.remove("active");
    els.PreviewImageBox.classList.add("deactive");
    setTimeout(() => {
        els.PreviewImage.src = "";
    }, 300);
};

/**
 * 生成分享用的直链
 * @param {string} fileName 文件名
 */
const shareImage = (fileName) => {
    prompt("复制此链接分享即可", `${location.origin}/img/origin/${fileName}`);
};

export {
    downloadImage,
    viewImage,
    closeViewImage,
    shareImage
}
