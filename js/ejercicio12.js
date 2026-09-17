function convertir(){
    var mxn= document.getElementById("mxn").value;
    if (mxn=="") {
        document.getElementById("resultado").value= "Por favor ingresa una cantidad valida";
    } else if (isNaN(mxn)) {
        document.getElementById("resultado").value = "Ingresa cantidades númericas validas";
     } else if (mxn<=0) {
 document.getElementById("resultado").value= "Por favor ingresa una cantidad positiva mayor a 0";
        } else{
     var resultado = parseFloat(mxn * 0.055).toFixed(2);
    document.getElementById("resultado").value= resultado + " USD";
}
    }