const hidden = document.getElementById("getUser");

const cargarCarrito = () => {
    let datos = new FormData();
    datos.append("id_usuario", hidden.value);
    fetch('php/procesarCarrito.php', {
        method: "post",
        body: datos
    })
    .then(response => response.json())
    .then(response => {
        let items = response;
        let ul = document.getElementsByClassName('listarCarrito')[0];
        let total = document.querySelector('.precioTotal');
        // console.log(response);
        ul.innerHTML = "";
        let precioTotal = 0;
        for(let i=0; i<items.length; i++){
            let newLi = document.createElement('li');
            precioTotal += items[i].cantidad * items[i].precio;
            newLi.innerHTML = `
                <div><img src="productos/${items[i].imagen}" alt="FES-${items[i].imagen}"></div>
                <div class="cambiar">
                    <button onclick="cambiarCantidad(${items[i].id_producto}, ${items[i].cantidad - 1},'DEC')">-</button>
                    <div class="count">${items[i].cantidad}</div>
                    <button onclick="cambiarCantidad(${items[i].id_producto}, ${items[i].cantidad + 1},'INC')">+</button>
                </div>
                <div class="nombre">${items[i].nombre}</div>
                <div class="precio">$ ${items[i].precio.toLocaleString()}</div>
                `;
            ul.appendChild(newLi);
        }
        total.innerHTML = precioTotal;
    })
    .catch(error => console.log(error));
}

const cambiarCantidad = async (producto, cantidad, operacion) => {
    let accion = cantidad === 0 ? "borrar": 
                operacion === "DEC" ? "restar" : "sumar";
    // Mandamos información a base de datos
    let datos = new FormData();
    datos.append("id_usuario", hidden.value);
    datos.append("id_producto", producto);
    datos.append("accion", accion);
    await fetch("php/modificarCarrito.php", {
        method: "post",
        body: datos
    })
    .then(response => response.text())
    .then(response => {
        if(response === "OK"){
            cargarCarrito();
        } else{
            alert("Error");
        }
    })
}

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    cargarCarrito();
});