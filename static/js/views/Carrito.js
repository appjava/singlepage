import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Cart");
    }

    async getHtml() {
        return `
            <h1>Carrito de Compra</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}