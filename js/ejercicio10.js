function convertir(){
    var gradosc= document.getElementById("gradosc").value;
    if (gradosc=="") {
        document.getElementById("resultado").value= "Por favor escribe un número valido";
    } else{
     var resultado = parseFloat(gradosc * 9 / 5) +32;
    document.getElementById("resultado").value= resultado;
}
}