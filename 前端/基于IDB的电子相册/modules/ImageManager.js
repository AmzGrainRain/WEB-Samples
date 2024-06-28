import { GenerateUUID } from "./UUID.js";

/**
 * FrontendDB.Image:
 *
 * id: string (primary key)
 * fileName: string
 * fileType: string
 * tag: string (index)
 */

class ImageManager {
    static #dbName = "FrontendDB";
    static #storeName = "Image";
    static #version = 1;
    static #instance = null;

    constructor(db) {
        this.db = db;
    }

    static async GetInstance(sotreSuffix) {
        if (!ImageManager.#instance) {
            ImageManager.#version = Date.now();
            ImageManager.#storeName = `Image_${sotreSuffix}`;
            const db = await ImageManager.#InitializeDatabase();
            ImageManager.#instance = new ImageManager(db);
        }

        if ((await ImageManager.#instance.getImageCount()) === 0) {
            const req = await fetch("../../data/images.json");
            for (const { fileName, fileType } of await req.json()) {
                await ImageManager.#instance.addImage(fileName, fileType, "");
            }
        }

        return ImageManager.#instance;
    }

    static #InitializeDatabase() {
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open(ImageManager.#dbName, ImageManager.#version);

            request.onerror = (_event) => {
                reject(`Error opening ${ImageManager.#dbName}.${ImageManager.#storeName}.`);
            };

            request.onsuccess = (e) => {
                console.log(`${ImageManager.#dbName}.${ImageManager.#storeName} opened successfully`);
                resolve(e.target.result);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (db.objectStoreNames.contains(ImageManager.#storeName)) return;
                const dbo = db.createObjectStore(ImageManager.#storeName, { keyPath: "id" });
                dbo.createIndex("tag", "tag", { unique: false });
            };
        });
    }

    #getIDBObjectStore() {
        const transaction = this.db.transaction([ImageManager.#storeName], "readwrite");
        return transaction.objectStore(ImageManager.#storeName);
    }

    addImage(fileName, fileType, tag) {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.add({ id: GenerateUUID(), fileName, fileType, tag });
            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(`addImage: ${e.target.error}`);
        });
    }

    removeImage(id) {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(`removeImage: ${e.target.error}`);
        });
    }

    updateImage(id, fileName, fileType, tag) {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.put({ id, fileName, fileType, tag });
            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(`updateImage: ${e.target.error}`);
        });
    }

    getImage(id) {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.get(id);
            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(`getImage: ${e.target.error}`);
        });
    }

    async setImageTag(id, newTag) {
        const image = await this.getImage(id);
        image.tag = newTag;

        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.put(image);
            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(`setImageTag: ${e.target.error}`);
        });
    }

    getImageList(page = 1, pageSize = 30) {
        let skip = (page - 1) * pageSize;

        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.openCursor(null, "next");

            const results = [];
            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (!cursor) {
                    resolve(results);
                    return;
                }

                if (skip > 0) {
                    skip -= 1;
                    cursor.continue();
                    return;
                }

                if (results.length >= pageSize) {
                    resolve(results);
                    return;
                }

                results.push(cursor.value);
                cursor.continue();
            };

            request.onerror = (e) => reject(`getImageList: ${e.target.error}`);
        });
    }

    getImageListByTag(tagName, page = 1, pageSize = 30) {
        let skip = (page - 1) * pageSize;

        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const index = store.index("tag");
            const request = index.openCursor(IDBKeyRange.only(tagName), "next");

            const results = [];
            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (!cursor) {
                    resolve(results);
                    return;
                }

                if (skip > 0) {
                    skip -= 1;
                    cursor.continue();
                    return;
                }

                if (results.length >= pageSize) {
                    resolve(results);
                    return;
                }

                results.push(cursor.value);
                cursor.continue();
            };

            request.onerror = (e) => reject(`getImageListByTag: ${e.target.error}`);
        });
    }

    getImageCount() {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.count();
            request.onsuccess = (e) => resolve(e.target.result);
            request.onerror = (e) => reject(`getImageCount: ${e.target.error}`);
        });
    }

    getImageCountByTag(tagName) {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const index = store.index("tag");
            const request = index.openCursor(IDBKeyRange.only(tagName), "next");

            let count = 0;
            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (!cursor) {
                    resolve(count);
                    return;
                }

                ++count;
                cursor.continue();
            };

            request.onerror = (e) => reject(`getFavoriteImageCount: ${e.target.error}`);
        });
    }
}

export { ImageManager };
