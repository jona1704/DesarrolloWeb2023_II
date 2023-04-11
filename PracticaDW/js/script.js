const documento = document;
//alert(documento);

const formulario = document.querySelector(".form_content");
const submit = document.querySelector("button[type='submit']");
//const formulario = document.getElementsByClassName("form_content")[0];
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const asunto = document.getElementById("asunto");
const pais = document.getElementById("pais");
const mensaje = document.getElementById("mensaje");

const menu_navegacion = () => {
    const toggleButton = document.getElementById("navi_button");
    const menu = document.getElementsByTagName('ul')[0];
    toggleButton.addEventListener('click', function(){
        menu.classList.toggle('active');
    })
}

const validarFormulario = () => {
    // Validar los elementos del formulario
    
    // Limpiar le nombre
    const valorNombre = nombre.value.trim();
    const valorCorreo = correo.value.trim();
    const valorTelefono = telefono.value.trim();
    const valorAsunto = asunto.value.trim();
    const valorMensaje = mensaje.value.trim();
    const error = document.getElementsByClassName('error');

    if(valorNombre === ""){
        error[0].innerHTML = "El nombre esta en blanco";
    } else{
        error[0].style.visibility = 'hidden';
    }

    if(valorCorreo === ""){
        error[1].innerHTML = "Ingresar Correo Electrónico";
    } else if(!validar_correo(valorCorreo)){
        error[1].innerHTML = "Ingresa Formato de Correo Válido";
    } else{
        error[1].style.visibility = 'hidden';
    }

    if(valorTelefono === ""){
        error[2].innerHTML = "Ingresar Telefono";
    } else if(!validar_telefono(valorTelefono)){
        error[2].innerHTML = "Ingresa Formato de Telefono Válido";
    } else{
        error[2].style.visibility = 'hidden';
    }

    if(valorAsunto === ""){
        error[3].innerHTML = "Ingresar Asunto";
    } else{
        error[3].style.visibility = 'hidden';
    }

    if(valorMensaje === ""){
        error[4].innerHTML = "Ingresar Mensaje";
    } else{
        error[4].style.visibility = 'hidden';
    }

    let datos = new FormData();
    datos.append("nombre", valorNombre);
    datos.append("correo", valorCorreo);
    datos.append("telefono", valorTelefono);
    datos.append("pais", pais);
    datos.append("asunto", valorAsunto);
    datos.append("mensaje", valorMensaje);

    fetch("php/principal.php", {
        method: 'post',
        body: datos
    })
    .then(respuesta => console.log(respuesta))
    .then((datos) => {
        console.log(datos);
        location.href = "php/principal.php";
    })
}

const validar_correo = (email) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

const validar_telefono = (str) => {
    // replace: Remueve espacios en blanco en la cadena que recibimos 
    // como parámetro
    let nuevostr = str.replace(/\s+/g, '');
    return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(nuevostr);
}

document.addEventListener("DOMContentLoaded", function (){
    menu_navegacion();

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validarFormulario();
    });    
});