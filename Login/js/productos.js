// Variables Globales
const hidden = document.getElementById("getUser");
const cantidad = document.querySelector(".cantidad");

// Obtenemos los productos de la Base de Datos
// Y los mostramos en la pagina web
const obtenerProductos = async () => {
    await fetch('php/obtenerProductos.php')
    .then(response => response.json())
    .then(response => {
        let items = response;
        //console.log(items);
        let ul = document.getElementsByClassName('carrito')[0];
        let cadena = "";
        for(let i=0; i<items.length; i++){
            cadena += "<li class='producto'>";
            cadena += "<a onclick='mostrarImagen(\"" + items[i].nombre_producto + " \", \"" + items[i].imagen + " \")' class='img-wrapper' href='#'>";
            cadena += "<img src='productos/" + items[i].imagen + "' alt='FES-" + items[i].imagen + "'>";
            cadena += "</a>";
            cadena += "<div class='info'>";
            cadena += "<div class='nombre'>" + items[i].nombre_producto + "</div>";
            cadena += "<div class='precio'>$ " + items[i].precio + "</div>";
            cadena += "</div>";
            cadena += "<div class='acciones'>";
            cadena += "<a onclick='agregarCarrito(" + items[i].id_producto + ")' href='#' class='add-btn cart'>Agregar a Carrito</a>";
            cadena += "</div>";
            cadena += "</li>";
        }
        ul.innerHTML = cadena;
        
    })
}

// Contamos Elementos en el Carrito de Compras
// y mostramos la cantidad al cargar la pagina web
const contarElementosCarrito = () => {
    let datos = new FormData();
    datos.append("id_usuario", hidden.value);
    fetch('php/contarCarrito.php', {
        method: "post",
        body: datos
    })
    .then(response => response.json())
    .then(({exito, cant}) => {
        if(exito === 1){
            cantidad.textContent = cant;
            //alert("Acierto");
        } else{
            //alert("Error");
        }
    })
    .catch(error => console.log(error))
}

// Al hacer click al boton de Agregar a Carrito
// estamos incluyendo un nuevo articulo en el
// Incrementamos en 1 cada vez que damos click
const agregarCarrito = async (id) => {
    // Obtener usuario
    const usuario = hidden.value;
    const id_producto = id;
    const cant = 1;
    // Preparando para subir a Base de Datos
    let datos = new FormData();
    datos.append("id_usuario", usuario);
    datos.append("id_producto", id_producto);
    datos.append("cantidad", cant);
    await fetch('php/agregarCarrito.php', {
        method: "post",
        body: datos
    })
    .then(response => {
        //throw response.text();
        return response.json();
    })
    .then(({exito, cant}) => {
        if(exito === 1){
            cantidad.textContent = cant;
            //alert("Acierto"); 
        } else{
            //alert("Error =>"); 
        }
    })
    .catch(error => console.log(error));
}

// Desplegamos la imagen del producto en grande
const mostrarImagen = async (producto, imagen) => {
    await Swal.fire({
        title: "Almacenes Acatlán",
        text: producto,
        imageUrl: 'http://localhost/Login/productos/' + imagen,
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: "FES Acatlán",
        confirmButtonText: 'Cerrar'
    })
}

/*const agregarCarrito = (e) => {
    const base = e.target.parentElement.parentElement;
    const srcimagen = base.children[0].children[0].src;
    // Obteniendo Imagen
    const imagen = srcimagen.replace("http://localhost/Login2/productos/", "");
    // Obteniendo Nombre
    const nombre = base.children[1].children[0].textContent;
    // Obteniendo Precio
    const textPrecio = base.children[1].children[1].textContent;
    const precio = textPrecio.replace("$", ""); 
}*/

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    obtenerProductos();
    contarElementosCarrito();
});

// En caso de que existan problemas con las llaves foraneas
// SET GLOBAL FOREIGN_KEY_CHECKS=0;
