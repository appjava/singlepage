import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Plantas");
    }

    async getHtml() {
        return `
            <h1>Plantas</h1>
            <div class="plantas">
            <fieldset>
            <legend>Bromelias</legend>
            <img src="../images/bromelias_sized.png" alt="Bromelias">
            </fieldset>
            <fieldset>
            <legend>Suculentas</legend>
            <img src="../images/suculentas_sized.png" alt="Suculentas">
            </fieldset>
            <fieldset>
            <legend>Orquideas</legend>
            <img src="../images/orquideas_sized.png" alt="Orquideas">
            </fieldset>
            </div>
        `;
    }
}