import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Abonos");
    }

    async getHtml() {
        return `
            <h1>Abonos</h1>
            <p>You are viewing the posts!</p>
            <img src="../images/abono.png" alt="Abono">
        `;
    }
}