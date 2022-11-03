import "./main.scss";
import "./Card.js";
import "./Cart.js";


class App extends HTMLElement {
    constructor() {
        super();
        this.data = [];
    }

    connectedCallback() {
        this.render();
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.data = json;
                this.render();
            });
    }

    

    render() {
        this.innerHTML = `
            <div class="container mt-5 mb-5">
                <div class="col-12">
                    <it-cart></it-cart>
                </div>
            </div>
            <div class="container text-center">
                <div class="row">                    
                    ${this.data.map((item) => {
                        return `
                        <div class="col mt-5">
                            <it-card data='${JSON.stringify(item)}'></it-card>
                        </div>
                        `
                    }).join(' ')}
                </div>
            </div>
        `
    }
}

customElements.define('it-app', App);