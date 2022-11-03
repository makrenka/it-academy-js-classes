import { STORAGE_KEYS } from './constants/storage.js';
import storageService from "./services/StorageService.js";

export default class Card extends HTMLElement {
    constructor() {
        super();
        this.data = JSON.parse(this.getAttribute('data'));
    }

    onClick(evt) {
        if (evt.target.closest('.btn')) {
            const data = storageService.getItem(STORAGE_KEYS.cartData) ?? [];
            storageService.setItem(STORAGE_KEYS.cartData, [...data, this.data]);
        }
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', this.onClick);
    }

    render() {
        this.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${this.data.image}" class="card-img-top" alt="${this.data.title}">
                <div class="card-body">
                    <h5 class="card-title">${this.data.title}</h5>
                    <p class="card-text">${this.data.description}</p>
                    <button href="#" class="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        `
    }
}

customElements.define('it-card', Card);