function usuario(e){
e.preventDefault();
    var user=["gato@correo.com", "perro@correo.com" ,"tomate@correo.com"];
    var password=["A1234","B1234","C1234"];

    var correo= document.querySelector("#correo").value;
    var pass= document.querySelector("#password").value;
for (var i = 0; i <=2; i++) {

//--------------------------------------------------------------------------//
    if (correo==user[i]) {
      if (pass===password[i]) {
alert("bienvenido")

    }else {
      alert("contraseña incorrecta");
  }
    }

//---------------------------------------------------------------------------//
}


}


var boton = document.querySelector("#boton");
boton.addEventListener("click", usuario);
