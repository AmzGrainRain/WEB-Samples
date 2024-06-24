function addGoodsToCart(id, image, title, desc, price) {
    var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    var index = cart.findIndex((good) => good.id === Number.parseInt(id));
    if (index !== -1) {
        alert("此商品已经添加到购物车，无法再次添加。");
        return;
    }

    cart.push({ id, image, title, desc, price });
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert("添加成功");
}

function removeGoodsFromCart(id) {
    var cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    if (cart.length === 0) return;

    var index = cart.findIndex((good) => good.id === id);
    if (index === -1) return;
    cart.splice(index, 1);

    sessionStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function getCart() {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
}

function getItemHtmlCode(good, buttonText, clickHandle) {
    return `
    <div class="item">
        <img class="item-image" src="${good.image}" alt="1">
        <h3 class="item-title" title="${good.title}">${good.title}</h3>
        <p class="item-desc" title="${good.desc}">${good.desc}</p>
        <div>
            <span class="item-prece">${good.price} 元</span>
            <input
                type="button"
                value="${buttonText}"
                onclick="${clickHandle}"
            >
        </div>
    </div>`;
}
