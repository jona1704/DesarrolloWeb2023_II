// Accediendo al boton Editar Datos Personales y a la ventana Modal
let btn = document.getElementById("editarDatos");
let modal = document.getElementById("registerModal");
// Accediendo al boton Editar Password y a la ventana Modal
let btnPassword = document.getElementById("editarPassword");
let passModal = document.getElementById("passwordModal");
// Accediendo al boton para Borrar Perfil
let btnBorrar = document.getElementById("removerPerfil");
// Accediendo al boton para Cambiar foto de Perfil
let btnFoto = document.getElementById("editarFoto");

// Accediendo a los botones que cierran y abren la ventana Modal
// para Editar Datos
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

// Accediendo a los botones que cierran y abren la ventana Modal
// para Editar Contraseña
btnPassword.addEventListener("click", () => {
    passModal.style.display = "block";
})

span[1].addEventListener("click", () => {
    passModal.style.display = "none";
})

btnCancelarPass.addEventListener("click", () => {
    passModal.style.display = "none";
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

// Empezamos accediendo al formulario de Editar Datos Personales y sus elementos
const formulario = document.querySelector("#formRegister");
let btnRegistrar = document.getElementById("btnRegistrar");
// Obteniendo los inputs del formulario de Editar Datos Personales
inputs = formulario.getElementsByTagName("input");

// Empezamos accediendo al formulario de Modificar Password y sus elementos
const formularioPassword = document.querySelector("#formPassword");
let btnEditarPassword = document.getElementById("btnCambiarPass");
// Obteniendo los inputs del formulario de Modificar Password
inputsPassword = formularioPassword.getElementsByTagName("input");

/* Funcion para editar datos */
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

const obtenerPasswordActual = async (id, passActual) => {
    // Preparando valores para enviar al servidor
    let datos = new FormData();
    datos.append("id", id);
    datos.append("password", passActual);
    let respuesta = await fetch('obtenerPassword.php', {
        method: 'post',
        body: datos
    })
    .then(response => response.text())
    .then(response => {
        return response;
    })
    .catch(error => console.log(error));
    return respuesta;
}

/* Funcion para modificar Contraseña */
const modificarPassword = async (e) => {
    e.preventDefault();
    // Accediendo al contenedor de Notificacion
    const notificacion = document.getElementById("notificacion");
    let id = inputsPassword[0].value.trim();
    let passActual = inputsPassword[1].value.trim();
    let passNuevo = inputsPassword[2].value.trim();
    let repetirPassNuevo = inputsPassword[3].value.trim();
    // Obteniendo valor de promesa
    let consultarPassActual = await obtenerPasswordActual(id, passActual);
    if(passActual === "" || passNuevo === "" || repetirPassNuevo === ""){
        notificacion.innerHTML = "<b style='color: red'>Los campos no pueden estar vacíos!!</b><br><br>";
    } else if(consultarPassActual !== "OK"){
        notificacion.innerHTML = "<b style='color: red'>Las contraseña actual no es válida!!</b><br><br>";
    } else if(passNuevo !== repetirPassNuevo){
        notificacion.innerHTML = "<b style='color: red'>Las contraseñas no coinciden!!</b><br><br>";
    } else{
        let datos = new FormData();
        datos.append("id", id);
        datos.append("password", passNuevo);
        fetch('modificarPassword.php', {
            method: 'post',
            body: datos
        })
        .then(response => response.text())
        .then(response => {
            if(response === "EXISTE"){
                notificacion.innerHTML = "<b style='color: red'>La nueva contraseña ya existe. Seleccione Otra !!</b><br><br>";
            } else if(response === "OK"){
                notificacion.innerHTML = "<b style='color: green'>La contraseña se modificó correctamente!!</b><br><br>";
                formularioPassword.reset();
                // passNuevo = '';
                // repetirPassNuevo = '';
            }
        })
    }
}

/* Funcion para eliminar Cuenta de Perfil */
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

// Funcion para subir foto de Perfil
const subirFotoPerfil = () => {
    Swal.fire({
        title: 'Suba una nueva foto',
        input: 'file',
        inputAttributes: {
          accept: 'image/*',
          'aria-label': 'Sube tu foto de perfil '
        }
    }).then((result) => {
        if (result.isConfirmed && result.value) {
          const file = result.value;
          const formData = new FormData();
          formData.append('imagen', file);
          formData.append('id', inputs[0].value.trim());
      
          fetch('procesarImagen.php', {
            method: 'POST',
            body: formData
          })
          .then(response => response.text())
          .then(response => {
            if (response === "OK") {
                const reader = new FileReader() // Lee el archivo de tipo blob
                reader.onload = (e) => {
                    Swal.fire({
                        title: '¡Exitó!',
                        text: '¡La foto se subió exitosamente!',
                        imageUrl: e.target.result, 
                        imageAlt: 'Foto de Perfil Subida'
                    })
                }
                reader.readAsDataURL(file) // Muestra la Imagen
            } else if(response === "ERROR_SIZE"){
                errorImagen("El tamaño de la imagen es mayor a 4MB");
            } else if(response === "EXTENSION_INVALIDA"){
                errorImagen("Sólo se aceptan imagenes con extension: .jpg, .jpeg, .png");
            } else {
                errorImagen("Error al Procesar la Imagen");
            }
          })
          .catch(error => {
            errorImagen("Hubo una falla al subir la imagen");
          });
        }
    });
}

// Eventos que para las tareas de Actualizar Datos del Perfil
btnRegistrar.addEventListener("click", actualizarDatosPersonales);
btnEditarPassword.addEventListener("click", modificarPassword);
btnBorrar.addEventListener("click", eliminarCuenta);
btnFoto.addEventListener("click", subirFotoPerfil);