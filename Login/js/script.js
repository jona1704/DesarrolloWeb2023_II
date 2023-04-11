// Variables Globales
// Obteniendo los elementos del formulario
const formulario = document.querySelector("#formLogin");
const usuario = document.getElementById("inputUser");
const password = document.getElementById("inputPassword");
const errorLogin = document.querySelectorAll(".errorLogin");
const mensaje = document.querySelector("#mensaje");

const toggleForms = () => {
    const contenedor = document.querySelector('.contenedor');
    contenedor.classList.toggle('active');
}

const validar_formulario = () => {
    // Limpiando elementos Formulario
    const valorUsuario = usuario.value.trim();
    const valorPassword = password.value.trim();
    // Validando Formulario
    errorLogin[0].innerHTML = valorUsuario === "" ? "El campo usuario esta en blanco": "";
    errorLogin[1].innerHTML = valorPassword === "" ? "El campo password esta en blanco": "";
    
    // Enviando datos
    let datos = new FormData();
    datos.append('usuario', valorUsuario);
    datos.append('password', valorPassword);

    fetch('php/login.php', {
        method: 'POST',
        body: datos
    })
    .then(response => response.json())
    .then(({exito}) => {
        if(exito === 1) location.href = alert("Bien");
        else mensaje.innerHTML = "Error en los datos. Veriquelos";
    })
    .catch(error => {
        // console.log(error);
        mensaje.innerHTML = "No se pudo procesar la información";
    })
}


document.addEventListener("DOMContentLoaded", () => {
    
    const enlacesForm = document.querySelectorAll('.enlaceForm');
        enlacesForm.forEach(enlace => {
        enlace.addEventListener("click", toggleForms);
    });

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();
        await validar_formulario();
    })
    
});