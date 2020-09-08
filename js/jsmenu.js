var botonlis4 = document.getElementById("lisBotondes");
var boton4 = document.getElementById("botondes");

function desplegarBoton4() {
  botonlis4.classList.add("mostrar");
}

function ocultarBoton4() {
  botonlis4.classList.remove("mostrar");
}

boton4.addEventListener("mouseover", desplegarBoton4, true);
boton4.addEventListener("mouseout", ocultarBoton4, true);

/*PROGRAMACIÓN DEL MENU EN MODO MOBIL*/

var iconoMenuMobil = document.getElementById("iconoMenu"),
  botonCerrar = document.getElementById("iconoCerrar");

var nav = document.getElementById("nav"),
  botonesNav = document.getElementById("ulNav");

function desplegarMenuMobil() {
  nav.classList.add("activarNav");
  botonesNav.classList.add("activarBotones");
  botonCerrar.classList.remove("none");
}

function cerrar() {
  nav.classList.remove("activarNav");
  botonesNav.classList.remove("activarBotones");
  botonCerrar.classList.add("none");
}

iconoMenuMobil.addEventListener("click", desplegarMenuMobil, true);
botonCerrar.addEventListener("click", cerrar, true);
