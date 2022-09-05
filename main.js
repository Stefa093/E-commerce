const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-tgl'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})

// Clik Link

const navLink = document.querySelectorAll('.nlink')

function linkAction() { 
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('click', ()=> {
document.body.classList.toggle('dark');
})

window.addEventListener("load", function () {
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