import Home from "./views/Home.js";
import Plantas from "./views/Plantas.js";
import Bromelias from "./views/Bromelias.js";
import Suculentas from "./views/Suculentas.js";
import Orquideas from "./views/Orquideas.js";
import Materas from "./views/Materas.js";
import Abonos from "./views/Abonos.js";
import Carrito from "./views/Carrito.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/plantas", view: Plantas },
        { path: "/bromelias", view: Bromelias },
        { path: "/suculentas", view: Suculentas },
        { path: "/orquideas", view: Orquideas },
        { path: "/materas", view: Materas },
        { path: "/abonos", view: Abonos },
        { path: "/carrito", view: Carrito },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});