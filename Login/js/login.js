// Variables Globales
// Obteniendo los elementos del formulario
const formulario = document.querySelector("#formLogin");
const usuario = document.getElementById("inputUser");
const password = document.getElementById("inputPassword");
// Procesando los mensajes de acierto o error
const errorLogin = document.querySelectorAll(".errorLogin");
const mensaje = document.querySelector("#mensaje");
// Variables que almacenan las variables ya
// procesadas (limpiadas con trim y validadas)
let valorUsuario = "", valorPassword = "";

// Funcion para cambiar del formulario de Inicio de Sesión
// al formulario de Registro
const toggleForms = () => {
    const contenedor = document.querySelector('.contenedor');
    contenedor.classList.toggle('active');
}

const validarFormularioLogin = () => {
    // Bandera de validacion 
    let esValido = true;
    // Limpiando elementos Formulario
    valorUsuario = usuario.value.trim();
    valorPassword = password.value.trim();
    // Validando Formulario
    errorLogin[0].innerHTML = valorUsuario === "" ? "El campo usuario esta en blanco": "";
    esValido = errorRegister[0].innerHTML !== "" ? false: true;
    errorLogin[1].innerHTML = valorPassword === "" ? "El campo password esta en blanco": "";
    esValido = errorRegister[1].innerHTML !== "" ? false: true;

    return esValido;
}

const enviarDatos = async () => {
    if(validarFormularioLogin()){
        // Enviando datos
        let datos = new FormData();
        datos.append('usuario', valorUsuario);
        datos.append('password', valorPassword);

        await fetch('php/login.php', {
            method: 'POST',
            body: datos
        })
        .then(response => response.json())
        .then(({exito}) => {
            if(exito === 1){
                location.href = "home.php";
            } 
        })
        .catch(error => {
            console.log(error);
            mensaje.innerHTML = "No se pudo procesar la información";
        })
    } else{
        mensaje.innerHTML = "Error en los datos. Veriquelos";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    const enlacesForm = document.querySelectorAll('.enlaceForm');
        enlacesForm.forEach(enlace => {
        enlace.addEventListener("click", toggleForms);
    });

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        enviarDatos();
    })
    
});