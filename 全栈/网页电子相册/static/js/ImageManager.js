class IndexedDBHelper {
  static #dbName = "ImageObjectDB";
  static #version = 1;
  static #instance = null;

  constructor(db) {
    this.db = db;
  }

  static async GetInstance() {
    if (!IndexedDBHelper.#instance) {
      const db = await IndexedDBHelper.InitializeDatabase();
      IndexedDBHelper.#instance = new IndexedDBHelper(db);
    }
    return IndexedDBHelper.#instance;
  }

  static InitializeDatabase() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(IndexedDBHelper.#dbName, IndexedDBHelper.#version);

      request.onerror = (_event) => {
        reject("Error opening IndexedDB.");
      };

      request.onsuccess = (event) => {
        console.log("IndexedDB opened successfully");
        resolve(event.target.result);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore("dataStore", { keyPath: "id" });
      };
    });
  }

  async addData(key, data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["ImageDB"], "readwrite");
      const store = transaction.objectStore("ImageDB");
      const request = store.add(data, key);

      request.onsuccess = () => resolve("Image object added successfully!");
      request.onerror = (event) => reject(`Error adding image object: ${event.target.errorCode}`);
    });
  }

  async removeData(key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["ImageDB"]);
      const store = transaction.objectStore("ImageDB");
      const request = store.delete(key);

      request.onsuccess = () => resolve("Image object removed successfully!");
      request.onerror = (event) => reject(`Error removing image object: ${event.target.errorCode}`);
    })
  }

  async updateData(key, updatedData) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["ImageDB"], "readwrite");
      const store = transaction.objectStore("ImageDB");
      const request = store.put(updatedData, key);

      request.onsuccess = () => resolve("Image object updated successfully!");
      request.onerror = (event) => reject(`Error updating image object: ${event.target.errorCode}`);
    });
  }

  async getData(key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["ImageDB"]);
      const store = transaction.objectStore("ImageDB");
      const request = store.get(key);

      request.onsuccess = (_event) => resolve(request.result);
      request.onerror = (event) => reject(`Error getting data: ${event.target.errorCode}`);
    });
  }
}
