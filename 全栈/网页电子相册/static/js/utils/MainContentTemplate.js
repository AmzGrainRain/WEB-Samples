export default (args) => {
  return `
<div class="item" data-name="${args.name}">
  <img src="./img/overview/${args.name}" title="image" loading="lazy" alt="img" />
  <div class="box">
    <!-- 按钮盒子 -->
    <div class="icon">
      <div
        class="like${ args.like ? ' fill': '' }"
        onclick="likeImage('${args.name}')"
        title="${args.like ? '取消收藏' : '收藏'}"
      >
        <i class="bx bxs-heart" data-fn="like" style="color:#e55"></i>
      </div>
      <div
        class="view"
        onclick="viewImage('${args.name}')"
        title="查看原图"
      >
        <i class="bx bxs-show" data-fn="view" style="color:#e55"></i>
      </div>
      <div
        class="download"
        onclick="downloadImage('${args.name}')"
        title="下载原图"
      >
        <i class="bx bxs-download" data-fn="download" style="color:#e55"></i>
      </div>
      <div
        class="link"
        onclick="shareImage('${args.name}')"
        title="分享"
      >
        <i class="bx bxs-share-alt" data-fn="link" style="color:#e55"></i>
      </div>
      <div
        class="trash"
        onclick="deleteImage('${args.name}')"
        title="删除（不可恢复）"
      >
        <i class="bx bxs-trash-alt" data-fn="trash" style="color:#e55"></i>
      </div>
    </div>
  </div>
</div>`
}
