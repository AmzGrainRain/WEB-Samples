export const ImageBoxTemplate = (args) => {
    const isFav = args.tag === "favorite";
    const fileName = args.fileName + args.fileType;

    return `
    <div class="item" image-id="${args.id}" image-file="${fileName}" image-tag="${args.tag}">
        <img src="./img/overview/${fileName}" title="image" loading="lazy" alt="img" />
        <div class="box">
            <div class="icon">
                <div
                    class="favicon like ${isFav ? "fill" : ""}"
                    onclick="ToggleFavorite('${args.id}')"
                    title="${isFav ? "取消收藏" : "收藏"}"
                >
                    <i class="bx bxs-heart" style="color:#e55"></i>
                </div>
                <div
                    class="view"
                    onclick="ViewImage('${fileName}')"
                    title="查看图片"
                >
                    <i class="bx bxs-show" style="color:#e55"></i>
                </div>
                <div
                    class="download"
                    onclick="DownloadImage('${fileName}')"
                    title="下载原图"
                >
                    <i class="bx bxs-download" style="color:#e55"></i>
                </div>
                <div
                    class="link"
                    onclick="ShareImage('${fileName}')"
                    title="分享"
                >
                    <i class="bx bxs-share-alt" style="color:#e55"></i>
                </div>
            </div>
        </div>
    </div>`;
};
