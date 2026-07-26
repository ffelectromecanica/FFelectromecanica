// ======================================
// FF ELECTROMECÁNICA V3
// script.js
// ======================================

// Menú hamburguesa
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

// Header al hacer scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "#07162f";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(8,22,52,.92)";
        header.style.boxShadow = "none";

    }

});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Animaciones al aparecer
const elementos = document.querySelectorAll(
".card, .service-card, .galeria-item, .item"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

elementos.forEach(el => {

    el.classList.add("fade");

    observer.observe(el);

});

// Año automático del footer (si agregás un span con id="year")
const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
