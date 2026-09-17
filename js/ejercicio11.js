function convertir(){
    var km= document.getElementById("km").value;
    if (km=="") {
        document.getElementById("resultado").value= "Por favor escribe un número valido";
    } else{
     var resultado = parseFloat(km * 0.621371);
    document.getElementById("resultado").value= resultado;
}
}