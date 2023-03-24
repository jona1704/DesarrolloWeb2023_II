// Arreglo de objetos 

const arreglo = [
    {id: "DW1", nombre: "Lechuga", precio: 30},
    {id: "DW2", nombre: "Manzana", precio: 50},
    {id: "DW3", nombre: "Naranja", precio: 25},
    {id: "DW4", nombre: "Apio", precio: 24}
]

console.log("Acceder a los elementos de un arreglo: \n\n");
// Acceder a los elementos de un arreglo de objetos
console.log(arreglo[2]);
// Acceder a una propiedad en especifico
console.log(arreglo[2].nombre);
console.log(arreglo[2]["precio"]);
// console.table
console.table(arreglo[3]);

// Ordenamiento de los objetos por alguna propiedad
console.log("\n\nOrdenamiento de los elementos de un arreglo de objetos: ");
console.log("\nOrdenamiento Ascendente por precio: ");
arreglo.sort((a, b) => b.precio - a.precio);
console.table(arreglo);
console.log("\nOrdenamiento Descendente por precio: ");
arreglo.sort((a, b) => a.precio - b.precio);
console.table(arreglo);
// Ordenar por nombre
console.log("\nOrdenamiento Ascendente por nombre: ");
arreglo.sort((a, b) => {
    let nuevo_a = a.nombre.toLowerCase();
    let nuevo_b = b.nombre.toLowerCase();
    if(nuevo_a > nuevo_b) return -1;
    else if(nuevo_a < nuevo_b) return 1;
    else return 0;
})
console.table(arreglo);

console.log("\nOrdenamiento Descendente por nombre: ");
arreglo.sort((a, b) => {
    let nuevo_a = a.nombre.toLowerCase();
    let nuevo_b = b.nombre.toLowerCase();
    if(nuevo_a > nuevo_b) return 1;
    else if(nuevo_a < nuevo_b) return -1;
    else return 0;
})
console.table(arreglo);

// map
console.log("\nMétodo map() ");
const arreglo2 = [10, 34, 56, 75];
// Crear un arreglo que doble cada elemento del arreglo 2
console.log("\nCrear un nuevo arreglo que doble cada elemento de otro arreglo");
const nuevo_arreglo2 = arreglo2.map((elemento/*, posicion, arreglo2*/) => {
    return elemento * 2;
})

console.log("Arreglo Original: " + arreglo2);
console.log("Nuevo arreglo: " + nuevo_arreglo2);

// Aplicar un descuento a todos los elementos
// mayores a 25
console.log("\n-- Aplicar un descuento a todos los elementos con precio mayor o igual a 25");
console.log("\nArreglo antes: ");
console.table(arreglo);

const productosConDescuento = arreglo.map((elemento) => {
    // console.log(elemento)
    if(elemento.precio <= 25) return elemento;
    return {
        ...elemento,
        precio: elemento.precio * 0.5
    }     
})
console.log("\nArreglo despues: ");
console.table(arreglo);
console.log("\nArreglo Nuevo de productos con descuento: \n");
console.table(productosConDescuento);

// Operador spread (...)
console.log("\n\nOperador spread (...)");
const arreglo_numerico = [1, 4, 5, 3, 8, 0, 9];
// Crear un arreglo nuevo pero descartando los dos primeros numeros
console.log("\nCrear un arreglo nuevo pero descartando los dos primeros numeros de otro arreglo: \n\n");
const [ , , ...arregloNuevo] = arreglo_numerico;
console.log("Arreglo Original: " + arreglo_numerico);
console.log("Nuevo Arreglo: " + arregloNuevo);

// Podemos añadir elementos de un arreglo a otro arreglo
console.log("\nAñadir elementos de un arreglo a otro arreglo: \n\n");
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7 ,8];
console.log("Arreglo 1: " + array1);
console.log("Arreglo 2: " + array2);
array1.push(...array2);
console.log("Arreglo 1: " + array1);

// Obtener el mayor y menor de un arreglo de numeros
console.log("\nBuscar el arreglo mayor y menor de un elemento de numeros: \n\n");
const valores = [1, 3, 6, 17, 8, 2, 4, 10, 12];
console.log("Arreglo: " + valores);
console.log("Elemento Mayor: " + Math.max(...valores));
console.log("Elemento Menor: " + Math.min(...valores));

console.log("\nMezclar dos arreglos: \n\n");
const valores1 = [2, 4, 6, 8, 10];
const valores2 = [1, 3, 5, 7, 9];
const merge = [0, ...valores1, ...valores2];
console.log("Arreglo 1: " + valores1);
console.log("Arreglo 2: " + valores2);
console.log("Arreglo Mezclado: " + merge);
console.log("Arreglo Mezclado Ordenado: " + merge.sort((a,b) => a-b));

// Filter
console.log("\nMétodo filter() ");
console.log("\nEncontrar los elementos con precio menor o igual a 30 y que sean naranjas");
const filtrado = arreglo.filter(elemento => elemento.precio <= 30 && elemento.nombre === "Naranja");
console.log(filtrado);

// Eliminar duplicados en un arreglo de numeros
console.log("\nRemover valores duplicados de un arreglo de numeros");
const arr1 = [1, 4, 6, 3, 7, 3, 6, 9];
const arr1_nuevo = arr1.filter((numero, posicion, arr1) => {
    return posicion === arr1.indexOf(numero);
})
console.log(arr1_nuevo);

// Metodo reduce 
console.log("\nMétodo reduce() ");

console.log("\n-- Sumar los elementos de un arreglo");
const arr2 = [1, 4, 5, 7, 8];
const suma = arr2.reduce((acumulador, elemento/*, posicion, arr2*/) => {
    let total = acumulador + elemento;
    return total;
}, 0);
console.log(suma);

// Operador spread
console.log("\n-- Sumar los argumentos que recibe una función");
function suma_varios(...args){
    return args.reduce((a, b) => a + b, 0)
}

console.log("La suma es: " + suma_varios(1, 6, 7, 3, 7, 4, 3));

// Números aleatorios
console.log("\nNúmeros aleatorios");

console.log("\n-- Generar Fracción aleatoria");
function generarNumeroAleatorio(){
    return Math.random(); // Numero aleatorio entre 0 y 1
}
console.log(generarNumeroAleatorio());

console.log("\n-- Generar Entero aleatorio entre 0 y 19");
function generarEnteroAleatorio(){
    return Math.floor(Math.random() * 20); // Numero aleatorio entre 0 y 19
}
console.log(generarEnteroAleatorio());

console.log("\n-- Generar Entero aleatorio entre 0 y LimiteSuperior");
function generarEnteroAleatorioConLimite(limiteSuperior){
    return Math.floor(Math.random() * limiteSuperior); // Numero aleatorio entre 0 y limiteSuperior (sin incluirlo)
}
console.log(generarEnteroAleatorioConLimite(30));

console.log("\n-- Generar Entero aleatorio en un rango");
function generarEnteroAleatorioRango(limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior; // Numero aleatorio entre 0 y limiteSuperior (sin incluirlo)
}
console.log(generarEnteroAleatorioRango(10, 40));