// Variables Globales

// Accediendo al formulario
const formularioRegistro = document.querySelector("#formRegister");
// Obteniendo los campos del formulario
const nombreReg = document.getElementById("regNombre");
const apellidoReg = document.getElementById("regApellido");
const usuarioReg = document.getElementById("regUser");
const emailReg = document.getElementById("regEmail");
const passwordReg = document.getElementById("regPass");
const password2Reg = document.getElementById("regConfirmPass");
// Procesando los mensajes de acierto o error
const errorRegister = document.querySelectorAll(".errorRegister");
const mensajeRegister = document.querySelector("#mensajeRegister");
// Variables que almacenan las variables ya
// procesadas (limpiadas con trim y validadas)
let regNombre = "" , regApellido = "", regUsuario = "", 
    regEmail = "", regPassword = "" , reg2Password = "";

const validarCorreo = (email) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

const validarPassword = (password) => /^[a-zA-Z0-9]+$/.test(password);

const validarFormularioRegistro = () => {
    // Bandera de validacion 
    let esValido = true;
    // Limpiando elementos Formulario
    regNombre = nombreReg.value.trim();
    regApellido = apellidoReg.value.trim();
    regUsuario = usuarioReg.value.trim();
    regEmail = emailReg.value.trim();
    regPassword = passwordReg.value.trim();
    reg2Password = password2Reg.value.trim();
    // Empezando el proceso de validacion
    errorRegister[0].innerHTML = regNombre === "" ? "El campo nombre esta en blanco": "";
    esValido = errorRegister[0].innerHTML !== "" ? false: true;
    errorRegister[1].innerHTML = regApellido === "" ? "El campo apellido esta en blanco": "";
    esValido = errorRegister[1].innerHTML !== "" ? false: true;
    errorRegister[2].innerHTML = regUsuario === "" ? "El campo usuario esta en blanco": "";
    esValido = errorRegister[2].innerHTML !== "" ? false: true;
    errorRegister[3].innerHTML = regEmail === "" ? "El campo email esta en blanco": 
                                validarCorreo(regEmail) === false ?  "El formato de correo no es válido" : "";
    esValido = errorRegister[3].innerHTML !== "" ? false: true;
    errorRegister[4].innerHTML = regPassword === "" ? "El campo contraseña esta en blanco": 
                                 validarPassword(reg2Password) === false ? "Los caracteres del password deben ser alfanumericos":
                                 regPassword !== reg2Password ? "Las contraseñas no coinciden" : "";
    esValido = errorRegister[4].innerHTML !== "" ? false: true;
    errorRegister[5].innerHTML = reg2Password === "" ? "El campo de confirmacion esta en blanco": "";
    esValido = errorRegister[5].innerHTML !== "" ? false: true;

    return esValido;
}

const enviarRegistro = async () => {
    // Confirmando validacio del formulario
    if(validarFormularioRegistro()){ 
        // Enviando datos
        let datos = new FormData();
        datos.append('nombre', regNombre);
        datos.append('apellido', regApellido);
        datos.append('usuario', regUsuario);
        datos.append('email', regEmail);
        datos.append('password', regPassword);

        await fetch('php/registrar.php', {
            method: 'post',
            body: datos
        })
        .then(response => response.json())
        .then(({exito}) => {
            if(exito === 1){
                mensajeRegister.innerHTML = "Información Enviada Correctamente";
                formularioRegistro.reset();
            } 
        })
        .catch(error => {
            //console.log(error);
            mensajeRegister.innerHTML = "No se pudo procesar la información";
        })
    } else{
        mensajeRegister.innerHTML = "Error en los datos. Veriquelos";
    }
}

formularioRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarRegistro();
})