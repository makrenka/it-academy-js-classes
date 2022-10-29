import storageService from "./services/StorageService";
import { STORAGE_KEYS } from './constants/storage.js';

export default class Cart extends HTMLElement {
    constructor() {
        super();
        this.quantity = 0;
        this.isVisible = false;
        this.onClick = this.onClick.bind(this);
        this.data = [];
    }

    cartDataAdapter(data) {
        return data.map((item, _, arr) => {
            return {
                ...item,
                quantity: arr.filter((subItem) => subItem.id === item.id).length,
            }
        })
        .filter(
            (item, index, arr) =>
                arr.findIndex((finditem) => finditem.id === item.id) === index
        );
    }

    initializeData() {
        const data = storageService.getItem(STORAGE_KEYS.cartData);
        this.data = data ? this.cartDataAdapter(data) : [];
        this.quantity = data?.length ?? 0;
    }

    onToggleTable(evt) {
        if (evt.target.closest('.cart-link-icon')) {
            evt.preventDefault();
            this.isVisible = !this.isVisible;
            this.render();
        }
    }

    onDeleteItem(evt) {
        if (evt.target.closest('.btn')) {
            const productId = Number(evt.target.dataset.productId);
            // const currentProductIndex = this.data.findIndex((item) => item.id === productId);
            // const currentProduct = this.data[currentProductIndex];
            // const updatedProduct = {
            //     ...currentProduct,
            //     quantity: currentProduct.quantity > 1 ? currentProduct.quantity - 1 : 1,
            // };
            // const updatedData = this.data.slice();
            // updatedData.splice(currentProductIndex, 1, updatedProduct);

            // console.log(updatedData);
            // const newData = updatedData.filter(
            //     (item) => item.id !== productId && item.quantity === 1
            // );
            
            // console.log(newData);

            const filteredData = this.data
                .map(
                    (item) => {
                        if (item.id === productId) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                            };
                        }
                        return {
                            ...item,
                        };
                    }
                )
                .filter((item) => item.quantity);
            storageService.setItem(STORAGE_KEYS.cartData, filteredData);
            // this.render();
        }
    }

    onClick(evt) {
        this.onToggleTable(evt);
        this.onDeleteItem(evt);
    }

    watchOnData() {
        window.addEventListener('storage', (evt) => {
            this.data = this.cartDataAdapter(evt.detail.value);
            this.quantity = this.quantity + 1;
            this.render()
        })
    }

    connectedCallback() {
        this.initializeData();        
        this.addEventListener('click', this.onClick);
        this.watchOnData();
        this.render();
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.onClick);
    }

    render() {
        this.innerHTML = `
        <a href="#" class="position-relative cart-link-icon">   
            <img src="./assets/images/cart.svg" width="50" height="50" class="cart-icon">         
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                ${this.quantity}
            </span>
        </a>
        ${this.isVisible ? `
        <table class="table mt-3">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Preview/th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
            ${this.data.length ? `
                ${this.data.map((item) => `
                <tr>
                    <th>${item.id}</th>
                    <th>${item.title}</th>
                    <th><img src='${item.preview}'/></th>
                    <th>${item.description}</th>
                    <th>${item.price}</th>
                    <th>${item.quantity}</th>     
                    <td>
                        <button data-product-id="${item.id}" class='btn btn-danger'>Delete</button>
                    </td>               
                </tr>
                `).join('')}
            ` : `
                <tr>
                    <td>No data</td>
                </tr>
            `}
                
                
            </tbody>
        </table>
        ` : '' }
        `;
    }
}

customElements.define('it-cart', Cart);