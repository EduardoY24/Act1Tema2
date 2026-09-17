let estudiantes = [];
function agregar() {

    var nombre = document.getElementById("nombre").value;
    var calificacion = document.getElementById("calificacion").value;

    if (nombre == "" || calificacion == "") {

        alert("Por favor completa todos los campos");
        return;
    }
    if (isNaN(calificacion)) {
     alert("La calificacion debe ser un numero");
return;
    }
    let estudiante = {
        nombre: nombre,
        calificacion: parseFloat(calificacion)
    };

 estudiantes.push(estudiante);
document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}
function calcular() {
    if (estudiantes.length == 0) {
        document.getElementById("promedio").value = "No hay estudiantes";
        document.getElementById("mayor").value = "";
        document.getElementById("menor").value = "";
        return;
    }
    let suma = estudiantes.reduce((acc, estudiante) => acc + estudiante.calificacion, 0);
    let promedio = suma / estudiantes.length;
    let calificaciones = estudiantes.map(estudiante => estudiante.calificacion);
    let maximo = Math.max(...calificaciones);
   let minimo = Math.min(...calificaciones);
    let estudianteMayor = estudiantes.find(estudiante => estudiante.calificacion == maximo);
    let estudianteMenor = estudiantes.find(estudiante => estudiante.calificacion == minimo);
    document.getElementById("promedio").value = promedio;
    document.getElementById("mayor").value = estudianteMayor.nombre;
    document.getElementById("menor").value = estudianteMenor.nombre;
}