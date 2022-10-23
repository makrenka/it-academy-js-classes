export default class SearchList extends HTMLElement {
    constructor() {
      super();
      this.data = this.getAttribute("data");
    }
  
    connectedCallback() {
      this.innerHTML = this.render()
    }
  
    static get observedAttributes() {
      return ["value", "data"];
    }
  
    render() {
      return `
        <ul class="collection">
        ${JSON.parse(this.data)
          .map((item) => `<li class="collection-item">${item}</li>`)
          .join(" ")}
        </ul>
      `;
    }
  }
  
  customElements.define("search-list", SearchList);