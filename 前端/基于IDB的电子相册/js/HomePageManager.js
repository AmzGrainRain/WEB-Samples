import els from "./Elements.js"
import { ImageBoxTemplate } from "./ImageBoxTemplate.js"
import { PageManager } from "./PageManager.js"

class HomePageManager extends PageManager {
    #pageSize = 32;
    #total = 0;
    #page = 1;
    #maxPage = 1;
    #imageManager = null;

    constructor(imageManager) {
        super();
        this.#imageManager = imageManager;
    }

    /**
     * 立即更新当前页的数据
     */
    async update() {
        this.#total = await this.#imageManager.getImageCount();
        this.#maxPage = Math.ceil(this.#total / this.#pageSize);
        els.PageNumber.innerHTML = `第 ${this.#page} 页`
        els.ImageListBox.scrollTop = 0;
        els.ImageListBox.innerHTML = "";

        for (let item of await this.#imageManager.getImageList(this.#page, this.#pageSize)) {
            const fileName = item.fileName + item.fileType;
            els.ImageListBox.innerHTML += ImageBoxTemplate(item);
        }
    }

    to(pageNumber) {
        if (pageNumber < 1 || pageNumber > this.#maxPage) {
            alert("超出页码范围");
            return;
        }
        this.#page = pageNumber;
        this.update();
    }

    /**
     * 上一页
     */
    prev() {
        if (this.#page - 1 <= 0) {
            alert("到头啦！！！");
            return;
        }

        this.#page -= 1;
        this.update();
    }

    /**
     * 将 prev 绑定到指定元素的点击事件上
     * @param {HTMLElement} el DOM 元素
     */
    handlePrev(el) {
        el.addEventListener('click', () => {
            this.prev();
        })
    }

    /**
     * 下一页
     */
    next() {
        if (this.#page + 1 > this.#maxPage) {
            alert("到头啦！！！");
            return;
        }

        this.#page += 1;
        this.update();
    }


    /**
     * 将 next 绑定到指定元素的点击事件上
     * @param {HTMLElement} el DOM 元素
     */
    handleNext(el) {
        el.addEventListener('click', () => {
            this.next();
        })
    }
}

export { HomePageManager };
