import { navMenu } from "./js/menu.js";
import { navLink } from "./js/menu.js";

function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

window.addEventListener("load", function (params) {
    const loaded = this.document.querySelector("#load");
    setTimeout(() => {
        loaded.style.display = "none";
    }, 3000);
});

mixitup(".prod-cont", {
    selectors:{
        target:".prod-card"
    },
    animation: {
        duration: 300
    }
}).filter("all")

