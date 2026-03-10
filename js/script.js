/* ============================= */
/* PARALLAX VIDEO HERO */
/* ============================= */

const hero = document.getElementById("hero");
const video = document.getElementById("heroVideo");

window.addEventListener("scroll", () => {

const rect = hero.getBoundingClientRect();
const windowHeight = window.innerHeight;

let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
progress = Math.max(0, Math.min(1, progress));

const move = progress * 250;

video.style.transform = `translateX(-50%) translateY(${move}px)`;

});


/* ============================= */
/* ABRIR MODAL */
/* ============================= */

function abrirModal(imagenSrc, archivo){

const modal = document.getElementById("modalConv");
const imagen = document.getElementById("imagenModal");
const descarga = document.getElementById("descargaArchivo");

imagen.src = imagenSrc;
descarga.href = archivo;

modal.style.display="flex";

}


/* ============================= */
/* CERRAR MODAL */
/* ============================= */

function cerrarModal(){

const modal = document.getElementById("modalConv");

modal.style.display="none";

}


/* ============================= */
/* CERRAR MODAL CLICK FUERA */
/* ============================= */

window.addEventListener("click", function(event){

const modal = document.getElementById("modalConv");

if(event.target === modal){

modal.style.display = "none";

}

});


/* ============================= */
/* MENU AUTO OCULTAR */
/* ============================= */

const menu = document.querySelector(".menu");

window.addEventListener("scroll", () => {

if(window.scrollY > 200){

menu.classList.add("oculto");

}else{

menu.classList.remove("oculto");

}

});


/* ============================= */
/* MENU APARECER CON MOUSE */
/* ============================= */

document.addEventListener("mousemove", (e)=>{

if(e.clientY < 80){

menu.classList.remove("oculto");

}

});


/* ============================= */
/* MENU HAMBURGUESA */
/* ============================= */

const toggle = document.getElementById("menuToggle");

toggle.addEventListener("click", () => {

menu.classList.toggle("activo");

});