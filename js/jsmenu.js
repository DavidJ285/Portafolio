var botonlis4 = document.getElementById("lisboton4");
var boton4 = document.getElementById("boton4");


function desplegarboton4() {
  botonlis4.classList.add("mostrar");

}

function ocultarBoton4(){
    botonlis4.classList.remove("mostrar");
}

boton4.addEventListener("mouseover", desplegarboton4,true);
boton4.addEventListener("mouseout", ocultarBoton4,true);
