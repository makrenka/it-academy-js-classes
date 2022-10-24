export default class Cart extends HTMLElement {
    constructor() {
        super();
        this.quantity = 0;
        this.isVisible = false;
        this.onClick = this.onClick.bind(this);
        this.data = [];
    }

    watchOnData() {
        window.addEventListener('share-data', (evt) => {
            this.data = [...this.data, evt.detail];
            this.quantity = this.quantity + 1;
            this.render();
        })
    }

    onClick(evt) {
        if (evt.target.closest('.cart-link-icon')) {
            evt.preventDefault();
            this.isVisible = !this.isVisible;
            this.render();
        };        
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', this.onClick);
        this.watchOnData();
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
                </tr>
                `)}
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