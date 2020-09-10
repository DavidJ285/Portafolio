var botonlispro = document.getElementById("lisBotondes");
var botonpro = document.getElementById("botondes");

function desplegarBoton4() {
  botonlispro.classList.add("mostrar");
}

function ocultarBoton4() {
  botonlispro.classList.remove("mostrar");
}

botonpro.addEventListener("mouseover", desplegarBoton4, true);
botonpro.addEventListener("mouseout", ocultarBoton4, true);

/*PROGRAMACIÓN DEL MENU EN MODO MOBIL*/

var iconoMenuMobil = document.getElementById("iconoMenu"),
  botonCerrar = document.getElementById("iconoCerrar");

var nav = document.getElementById("home"),
  botonesNav = document.getElementById("ulhome");

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
