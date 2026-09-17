function calcular() {
    var numeros = document.getElementById("num").value;
     let cadena = numeros.split(",");
     let valido = true;
     if (numeros==""){
    document.getElementById("mayor").value = "";
    document.getElementById("menor").value = "";
    document.getElementById("promedio").value = "Por favor ingresa numeros";
    return;
    } else{ 
         for (let i = 0; i < cadena.length; i++) {
    if (isNaN(cadena[i])||cadena[i]==""){
        valido=false;
    }
}
    }
        if (valido==false){
             document.getElementById("mayor").value = "Ingresa los";
            document.getElementById("menor").value = "números en digitos";
        document.getElementById("promedio").value = "separados por comas";
    } else{
let elementos = cadena.map(Number); // Convierte los elementos a números: [10, 20, 30]
let maximo = Math.max(...elementos); 
let minimo = Math.min(...elementos); 
    document.getElementById("mayor").value= maximo;
     document.getElementById("menor").value= minimo;
     let suma = elementos.reduce((acc, valor) => acc + valor, 0);
let promedionum = suma / elementos.length; 
      document.getElementById("promedio").value= promedionum ;
}
}
