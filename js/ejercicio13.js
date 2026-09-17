function verificar(){
    var edad= document.getElementById("edad").value;
    if (edad=="") {
        document.getElementById("verificacion").value= "Por favor ingresa una edad valida";
    } else if (isNaN(edad)) {
        document.getElementById("verificacion").value = "Ingresa tu edad en digitos";
     } else if (edad<=0) {
 document.getElementById("verificacion").value= "Por favor ingresa una edad valida";
  } else if (edad<18) {
 document.getElementById("verificacion").value= "No puedes votar";
        } else{
    document.getElementById("verificacion").value= "Puedes votar";
}
    }