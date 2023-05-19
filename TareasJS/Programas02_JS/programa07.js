var obtenerPrecioTotal = (arr) => {
    let precio = arr.reduce((acumulador, objeto) => acumulador + (objeto.cantidad * objeto.precio), 0);
    return precio;
}

// 1 bote de leche:
console.log(obtenerPrecioTotal([{ producto: "Leche", cantidad: 1, precio: 1.50 }]));

// 1 bote de leche y 1 caja de cereal:
console.log(obtenerPrecioTotal([
    { producto: "Leche", cantidad: 1, precio: 1.50 },
    { producto: "Cereal", cantidad: 1, precio: 2.50 }
  ]
  ));

// 3 botes de leche:
console.log(obtenerPrecioTotal([{ producto: "Leche", cantidad: 3, precio: 1.50 }]));

// Varios comestibles:
console.log(obtenerPrecioTotal([
    { producto: "Leche", cantidad: 1, precio: 1.50 },
    { producto: "Huevos", cantidad: 12, precio: 0.10 },
    { producto: "Pan", cantidad: 2, precio: 1.60 },
    { producto: "Queso", cantidad: 1, precio: 4.50 }
  ]));

  // Algunos dulces baratos:
  console.log(Math.round(obtenerPrecioTotal([
    { producto: "Chocolate", cantidad: 1, precio: 0.10 },
    { producto: "Piruleta", cantidad: 1, precio: 0.20 }
 ]) * 10) / 10);
