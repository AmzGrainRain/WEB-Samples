/**
 * FrontendDB.User:
 *
 * user:        string (primary key)
 * password:    string
 */

class UserManager {
    static #dbName = "FrontendDB";
    static #storeName = "User";
    static #version = 1;
    static #instance = null;

    constructor(db) {
        this.db = db;
    }

    static async GetInstance() {
        if (!UserManager.#instance) {
            UserManager.#version = Date.now();
            const db = await UserManager.#InitializeDatabase();
            UserManager.#instance = new UserManager(db);
        }

        // if ((await UserManager.#instance.getUserCount()) === 0) {
        //     const req = await fetch("../../data/user.json");
        //     (await req.json()).forEach((user) => {
        //         UserManager.#instance.addUser(user.user, user.password);
        //     });
        // }

        return UserManager.#instance;
    }

    static #InitializeDatabase() {
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open(UserManager.#dbName, UserManager.#version);

            request.onerror = (e) => {
                console.log(e);
                reject(`Error opening ${UserManager.#dbName}.${UserManager.#storeName}.`);
            };

            request.onsuccess = (e) => {
                console.log(`${UserManager.#dbName}.${UserManager.#storeName} opened successfully`);
                resolve(e.target.result);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (db.objectStoreNames.contains(UserManager.#storeName)) return;

                db.createObjectStore(UserManager.#storeName, {
                    keyPath: "user",
                });
            };
        });
    }

    #getIDBObjectStore() {
        const transaction = this.db.transaction([UserManager.#storeName], "readwrite");
        return transaction.objectStore(UserManager.#storeName);
    }

    addUser(user, password, gender) {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.add({
                user,
                password,
                gender,
                lastLogin: Date.now(),
                registTime: Date.now()
            });

            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(`addUser: ${e.target.error}`);
        });
    }

    removeUser(id) {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.delete(id);

            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(`removeUser: ${e.target.error}`);
        });
    }

    updateUser(user) {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.put(user);

            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(`updateUser: ${e.target.error}`);
        });
    }

    async updateLastLogin(id) {
        const user = await this.getUser(id);
        user.lastLogin = Date.now();

        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.put(user);

            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(`updateLastLogin: ${e.target.error}`);
        })
    }

    getUser(id) {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.get(id);

            request.onsuccess = (_event) => resolve(request.result);
            request.onerror = (e) => reject(`getUser: ${e.target.error}`);
        });
    }

    getUserCount() {
        return new Promise((resolve, reject) => {
            const store = this.#getIDBObjectStore();
            const request = store.count();
            request.onsuccess = (e) => resolve(e.target.result);
            request.onerror = (e) => reject(`getUserCount: ${e.target.error}`);
        });
    }
}

export { UserManager };
