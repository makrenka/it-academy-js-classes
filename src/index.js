import "./main.scss";
import "./Card.js";


class App extends HTMLElement {
    constructor() {
        super();
        this.data = [
            {
                id: 1,
                title: "Product #1",
                preview: "./assets/images/pic1.jpg",
                description: "6.67' AMOLED (1080x2400) /2 SIM / Android 11.0 / 3000 МГц (Ядер: 8 (1+3+4)) / 8Gb /256Gb / 108 Мп + 8 Мп + 5 Мп / 5 000 мАч / Небесно-голубой",
                price: 100,
            },
            {
                id: 2,
                title: "Product #2",
                preview: "./assets/images/pic1.jpg",
                description: "6.67' AMOLED (1080x2400) /2 SIM / Android 11.0 / 3000 МГц (Ядер: 8 (1+3+4)) / 8Gb /256Gb / 108 Мп + 8 Мп + 5 Мп / 5 000 мАч / Небесно-голубой",
                price: 200,
            },
            {
                id: 3,
                title: "Product #3",
                preview: "./assets/images/pic1.jpg",
                description: "6.67' AMOLED (1080x2400) /2 SIM / Android 11.0 / 3000 МГц (Ядер: 8 (1+3+4)) / 8Gb /256Gb / 108 Мп + 8 Мп + 5 Мп / 5 000 мАч / Небесно-голубой",
                price: 300,
            },
            {
                id: 4,
                title: "Product #4",
                preview: "./assets/images/pic1.jpg",
                description: "6.67' AMOLED (1080x2400) /2 SIM / Android 11.0 / 3000 МГц (Ядер: 8 (1+3+4)) / 8Gb /256Gb / 108 Мп + 8 Мп + 5 Мп / 5 000 мАч / Небесно-голубой",
                price: 400,
            },
        ]
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = this.data.map((item) => {
            return `<it-card data='${JSON.stringify(item)}'></it-card>`;
        }).join(' ');
    }
}

customElements.define('it-app', App);