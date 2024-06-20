import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Suculentas");
    }

    async getHtml() {
        return `
            <h1>Suculentas</h1>
            <p>You are viewing the posts!</p>
            <img src="static/images/suculentas_sized.png" alt="Suculentas">
        `;
    }
}