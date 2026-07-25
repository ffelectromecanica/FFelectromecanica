// ==============================
// FF ELECTROMECÁNICA
// SCRIPT.JS
// ==============================

// Animación al hacer scroll
const elementos = document.querySelectorAll(
'.servicio-card, .especialidad, .porque-card, .foto'
);

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},{
threshold:0.2
});

elementos.forEach(el=>{
el.classList.add('fade');
observer.observe(el);
});

// Menú con efecto al desplazarse
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="#ffffff";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

}else{

header.style.background="rgba(255,255,255,.95)";
header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});

// Scroll suave del menú
document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute('href'));

destino.scrollIntoView({

behavior:'smooth'

});

});

});

// Año automático del footer (si agregás un elemento con id="year")
const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
