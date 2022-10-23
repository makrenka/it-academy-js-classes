import "./main.scss";


class Search extends HTMLElement {
    constructor() {
        super();
        this.data = [
            "Albania",
            "Bahamas",
            "Armenia",
            "Belarus",
            "Brazil",
            "Cambodia",
            "Colombia",
            "Czech Republic",
            "Estonia",
            "France",
            "Georgia",
            "Germany",
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <input type='text' placeholder='Type something...' />
        `
    }
}

customElements.define('user-search', Search);