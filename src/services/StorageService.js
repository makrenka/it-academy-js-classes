class StorageService {
  constructor() {
    this.storage = window.localStorage;
  }

  dispatchEvent(key) {
    const event = new CustomEvent("storage", {
      detail: key ? { key, value: this.getItem(key) } : null,
      bubbles: true,
    });
    window.dispatchEvent(event);
  }

  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (error) {
      console.error(error.message);
    }
  }

  setItem(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify(value));
      this.dispatchEvent(key);
    } catch (error) {
      console.error(error.message);
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
    this.dispatchEvent(key);
  }

  clear() {
    this.storage.clear();
    this.dispatchEvent();
  }
}

const storageService = new StorageService();
export default storageService;