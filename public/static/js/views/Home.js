import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Welcome to PlantaZULA</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}