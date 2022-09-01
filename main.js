function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function show() {
    document.getElementById("sidebar").style.width = "100vw";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "inline";
}

function hide() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("open").style.display = "inline";
    document.getElementById("close").style.display = "none";
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