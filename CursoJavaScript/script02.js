// Cadenas

var escuela = "FES Acatlán";
var dependencia = "UNAM";

// Cocantenar:

// 1. Operador +
console.log(escuela + " " + dependencia);

// 2. Plantillas Literales
console.log(`${escuela} ${dependencia} MAC`);

// Objetos inmutables
var animal = "gcto";
// Cambiando variable
animal[1] = 'a';
console.log(animal);
// Reasignar toda la cadena
animal = "gato";
console.log(animal);

// Arreglos
var arreglo = [1,2,3,4,5];
console.log(arreglo);
// Los arreglos son mutables
arreglo[2] = 34;
console.log(arreglo);
// Añadir elementos
arreglo[5] = 9;
console.log(arreglo);
arreglo[10] = 12;
console.log(arreglo);
console.log(arreglo[6]);
// Añadir usando push (inserta al final)
arreglo.push(8);
console.log(arreglo);
// Añadir usando unshift (inserta al principio)
arreglo.unshift(7);
console.log(arreglo);
// Remover usando pop (borra al final)
arreglo.pop();
console.log(arreglo);
// Remover usando shift (remueve al principio)
arreglo.shift();
console.log(arreglo);

// Arreglos mixtos
var coleccion = [1,"Cuaderno",45.6];
console.log(coleccion);
// Cambiando tipo
coleccion[2] = true;
console.log(coleccion);

// Arreglo bidimensionales
var tienda = [[1,"Cuaderno",45.6],[2,"Pluma",20],[3,"Goma",10]];
console.log(tienda[1]);
console.log(tienda[1][1]); // Pluma

// Contar los elementos de un arreglo
console.log(tienda.length); //

console.log(tienda[2].length); // 3
