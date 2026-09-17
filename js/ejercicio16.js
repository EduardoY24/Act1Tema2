const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

function calcularOperacion(operacion) {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    if (numero1 == "" || numero2 == "") {
        Swal.fire({
         icon: "error",
        title: "Error",
        text: "Por favor ingresa los dos números"
});
    return;
    }
    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Los valores deben ser números"
});
        return;
    }
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    var resultado;
    if (operacion == "suma") {
        resultado = sumar(numero1, numero2);
    }
    else if (operacion == "resta") {
        resultado = restar(numero1, numero2);
    }
    else if (operacion == "multiplicacion") {
        resultado = multiplicar(numero1, numero2);
    }
    else if (operacion == "division") {
        resultado = dividir(numero1, numero2);
    }
    document.getElementById("resultado").value = resultado;
}