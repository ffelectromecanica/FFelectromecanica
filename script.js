const elementos = document.querySelectorAll("section, .card");

const mostrarElemento = () => {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;

        if (posicion < alturaPantalla - 100) {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }

    });

};


elementos.forEach(elemento => {
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "all 0.8s ease";
});


window.addEventListener("scroll", mostrarElemento);

mostrarElemento();
