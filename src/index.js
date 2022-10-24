import "./main.scss";
import "./Card.js";
import "./Cart.js";


class App extends HTMLElement {
    constructor() {
        super();
        this.data = [
            {
                id: 1,
                title: "Product #1",
                preview: "./assets/images/pic1.jpg",
                description: "6.67 AMOLED (1080x2400) /2 SIM / Android 11.0 / 3000 МГц (Ядер: 8 (1+3+4)) / 8Gb /256Gb / 108 Мп + 8 Мп + 5 Мп / 5 000 мАч / Небесно-голубой",
                price: 100,
            },
            {
                id: 2,
                title: "Product #2",
                preview: "./assets/images/pic1.jpg",
                description: "6.67 AMOLED (1080x2400) /2 SIM / Android 11.0 / 3000 МГц (Ядер: 8 (1+3+4)) / 8Gb /256Gb / 108 Мп + 8 Мп + 5 Мп / 5 000 мАч / Небесно-голубой",
                price: 200,
            },
            {
                id: 3,
                title: "Product #3",
                preview: "./assets/images/pic1.jpg",
                description: "6.67 AMOLED (1080x2400) /2 SIM / Android 11.0 / 3000 МГц (Ядер: 8 (1+3+4)) / 8Gb /256Gb / 108 Мп + 8 Мп + 5 Мп / 5 000 мАч / Небесно-голубой",
                price: 300,
            },
            {
                id: 4,
                title: "Product #4",
                preview: "./assets/images/pic1.jpg",
                description: "6.67 AMOLED (1080x2400) /2 SIM / Android 11.0 / 3000 МГц (Ядер: 8 (1+3+4)) / 8Gb /256Gb / 108 Мп + 8 Мп + 5 Мп / 5 000 мАч / Небесно-голубой",
                price: 400,
            },
        ];
    }

    connectedCallback() {
        this.render();
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