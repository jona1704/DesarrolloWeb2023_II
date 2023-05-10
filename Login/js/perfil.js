// Accediendo a la ventana Modal y el boton Editar Datos Personales
let modal = document.getElementById("registerModal");
let btn = document.getElementById("editarDatos");
let btnBorrar = document.getElementById("removerPerfil");

// Accediendo a los botones que cierran la ventana Modal
let span = document.getElementsByClassName("closeButton");
let btnCancelar = document.getElementById("btnCancelar");

btn.addEventListener("click", () => {
    modal.style.display = "block";
})

span[0].addEventListener("click", () => {
    modal.style.display = "none";
})

btnCancelar.addEventListener("click", () => {
    modal.style.display = "none";
})

// sweetalert2 mensajes de alerta
const operacionExitosa = (informacion) => {
    Swal.fire({
        icon: 'success',
        title: informacion,
        // title: 'Operación Exitosa',
        text: 'Información editada correctamente'
    });
}

const operacionErronea = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!Algo salio Mal!',
    })
}

/* Funcion para editar datos */

// Empezamos accediendo al formulario y sus elementos
const formulario = document.querySelector("#formRegister");
let btnRegistrar = document.getElementById("btnRegistrar");
// Obteniendo los inputs del formulario
inputs = formulario.getElementsByTagName("input");

const actualizarDatosPersonales = (e) => {
    e.preventDefault();
    // Preparando valores para enviar al servidor
    let datos = new FormData();
    datos.append("id", inputs[0].value.trim());
    datos.append("nombre", inputs[1].value.trim());
    datos.append("apellido", inputs[2].value.trim());
    datos.append("usuario", inputs[3].value.trim());
    datos.append("correo", inputs[4].value.trim());
    datos.append("operacion", 1);
    // Empezando el envio al servidor
    fetch("editarPerfil.php", {
        method: "post",
        body: datos
    })
    .then(response => response.json())
    .then(({exito}) => {
        if(exito === 1){
            operacionExitosa('Operación Exitosa');
            inputs[1].value = datos.get("nombre");
            inputs[2].value = datos.get("apellido");
            inputs[3].value = datos.get("usuario");
            inputs[4].value = datos.get("correo");
        } else{
            operacionErronea();
        }
    })
}

const eliminarCuenta = async (e) => {
    e.preventDefault();
    await Swal.fire({
        title: "¿Estas seguro de remover cuenta?",
        text: "¡No podrá revertir esta acción!",
        icon: "warning",
        confirmButtonText: "Eliminar Cuenta", 
        confirmButtonColor: "#114FCA",
        cancelButtonColor: "red",
        showCancelButton: true,
        cancelButtonText: "No"
    })
    .then((result) => {
        if(result.isConfirmed){
            // Enviando datos
            let datos = new FormData();
            datos.append('id', inputs[0].value.trim());

            fetch("borrar.php", {
                method: "post",
                body: datos
            })
            .then(response => response.text())
            .then(response => {
                if(response == "OK"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Cuenta Removida',
                    })
                    location.href = "logout.php";
                }
            })
        }
    })
}

btnRegistrar.addEventListener("click", actualizarDatosPersonales);

btnBorrar.addEventListener("click", eliminarCuenta);