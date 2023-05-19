const productos = [
    { nombre: "Producto 1", precio: 20, categoria: "Electrónicos" },
    { nombre: "Producto 2", precio: 30, categoria: "Ropa" },
    { nombre: "Producto 3", precio: 40, categoria: "Electrónicos" },
    { nombre: "Producto 4", precio: 50, categoria: "Ropa" },
    { nombre: "Producto 5", precio: 60, categoria: "Ropa" },
    { nombre: "Producto 6", precio: 70, categoria: "Electrónicos" },
    { nombre: "Producto 7", precio: 80, categoria: "Ropa" },
    { nombre: "Producto 8", precio: 90, categoria: "Electrónicos" }
  ];
  

/* Usar map para crear un diccionario con categoría como clave
y un arreglo de productos como el valor */
const productosPorCategoria = productos.reduce((acc, producto) => {
    const categoria = producto.categoria;
    if(!acc[categoria]){
        acc[categoria] = [];
    }
    acc[categoria].push(producto);
    return acc;
}, {});

// Usamos map para calcular el precio promedio de cada categoría
const promedioPrecioPorCategoría = Object.keys(productosPorCategoria).map(categoria => {
    const suma = productosPorCategoria[categoria].reduce((acc, producto) => acc + producto.precio, 0);
    return {categoria: categoria, precio_promedio: suma / productosPorCategoria[categoria].length };
});

// Filtramos aquellas categorias con precio promedio mayor a 50
const filtradoPromedio = promedioPrecioPorCategoría.filter(categoria => categoria.precio_promedio > 50);

console.log(filtradoPromedio);