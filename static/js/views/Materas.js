import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Materas");
    }

    async getHtml() {
        return `
            <h1>Materas</h1>
            <p>You are viewing the posts!</p>
            <img src="static/images/matera.png" alt="Materas">
        `;
    }
}