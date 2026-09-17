let tareas = [];
function obtenerTareas() {
    let datos = localStorage.getItem("tareas");
    if (datos != null) {
        tareas = JSON.parse(datos);
}
renderizarTareas();
}
function agregarTarea() {
 var tarea = document.getElementById("tarea").value;
 if (tarea == "") {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Escribe una tarea"
});

    return;
    }
    let nuevaTarea = {
        tarea: tarea
};
    tareas.push(nuevaTarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    document.getElementById("tarea").value = "";
    renderizarTareas();
}

function eliminarTarea(indice) {
    Swal.fire({
        title: "¿Eliminar tarea?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            tareas.splice(indice, 1);
            localStorage.setItem("tareas", JSON.stringify(tareas));
            renderizarTareas();
 }
    });
}
function renderizarTareas() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        var elemento = document.createElement("li");
        elemento.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
);
        elemento.innerHTML = `
         ${tarea.tarea}
         <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${indice})">
     Eliminar
        </button>
`;

lista.appendChild(elemento);
 });
}
obtenerTareas();