function ordenarProducto(producto){
    // Tarea comun: crear la promesa dentro de la funcion y retornarla
    //  Así el programa puede esperar a que se complete la promesa
    // al llamar a la funcion
    return new Promise((resolve, rejected) => {
        //console.log(`Ordenando: ${producto} de FES Acatlán`);
        setTimeout(() => {
            // Simulamos verificar si el producto esta en el inventario
            if(producto === "gomiboing"){
                resolve('Ordenando bebida de Boing congelado en envase');
            } else{
                rejected("Este producto no esta disponible actualmente.");
            }
        }, 2000);
    }); // Retornamos una promesa
}

// La promesa de ordenarProducto pasaría a procesarPedido
// respuesta proviene de ordenarProducto
function procesarPedido(respuesta){
    // No siempre es necesario llamar a ambos resolve, rejected
    // En este caso solo procesamos resolve
    return new Promise((resolve) => {
        // Solo se va a cumplir resolve
        console.log("Procesando respuesta ...");
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(()=>{
            resolve("Gracias por su compra. Disfruta tu producto de FES Acatlán");
        }, 4000)
    })
}

// Asyn: La funcion es asincrona
// todas las funciones con Async retornan una promesa
async function realizarPedido(producto){
    // await permite que un proceso asincrono se 
    // complete antes de continuar con la funcion
    try{
        const respuesta = await ordenarProducto(producto);
        console.log("Respuesta recibida");
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch(error){
        console.log(error);
    } 
}

realizarPedido("gomiboing");