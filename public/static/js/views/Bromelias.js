import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Bromelias");
    }

    async getHtml() {
        return `
            <h1>Bromelias</h1>
            <p>Manage your privacy and configuration.</p>
            <img src="static/js/images/bromelias_sized.png" alt="Bromelias">
        `;
    }
}