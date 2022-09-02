import { navMenu } from "./js/menu.js";
import { navLink } from "./js/menu.js";

let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('click', ()=> {
document.body.classList.toggle('dark');
})

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

