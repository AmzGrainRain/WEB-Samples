class PageManager {
    constructor() {
        if (this.constructor === PageManager) {
            throw new TypeError("抽象类无法被直接实例化");
        }
    }

    update() {
        throw new Error("尝试调用一个未实现的成员");
    }

    prev() {
        throw new Error("尝试调用一个未实现的成员");
    }

    next() {
        throw new Error("尝试调用一个未实现的成员");
    }

    handlePrev(el) {
        throw new Error("尝试调用一个未实现的成员");
    }

    handleNext(el) {
        throw new Error("尝试调用一个未实现的成员");
    }
}

export { PageManager };
