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
            <a href="/plantas" data-link><img src="/static/images/bromelias_sized.png" alt="Bromelias"></a>
            </fieldset>
            <fieldset>
            <legend>Suculentas</legend>
            <img src="/static/images/suculentas_sized.png" alt="Suculentas">
            </fieldset>
            <fieldset>
            <legend>Orquideas</legend>
            <img src="/static/images/orquideas_sized.png" alt="Orquideas">
            </fieldset>
            </div>
        `;
    }
}