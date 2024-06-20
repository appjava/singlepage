import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Orquideas");
    }

    async getHtml() {
        return `
            <h1>Orquideas</h1>
            <p>Manage your privacy and configuration.</p>
            <img src="../images/orquideas_sized.png" alt="Orquideas">
        `;
    }
}