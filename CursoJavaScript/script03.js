// var vs let

/* var la cual define una variable global o local en una 
función sin importar el ámbito del bloque. */

/* let te permite declarar variables limitando su 
alcance (scope) al bloque */

/* Var nos permite declarar variables con el mismo nombre: 
var nombre = "Juan";
var nombre = "Mateo"; */

/* Let solo nos permite declarar variables con nombre único */
let nombre = "Juan";
console.log(nombre);

// Ambitos locales y globales
var miVariable = 9;

/* 
    Proceso mediante el cual el intérprete parece 
    mover la declaración de funciones, variables o clases a 
    la parte superior de su alcance, antes de la ejecución 
    del código
*/

function miFuncion(){
    console.log(miVariable); // Undefined debido al hoisting
    var miVariable = 19;
    console.log(miVariable); // 19
}

miFuncion();
console.log(miVariable);

// let esta restringido al ambito donde es declarado
for(let i=0; i<10; i++){
    console.log(i);
}

//console.log(i); // Con let hay error con var no


// Constantes

// Una buena práctica de programación es declarar
// las constantes con mayúsculas
function areaCirculo(radio){
    const PI = 3.1416;
    //let area = PI * radio * radio;
    let area = Math.PI * Math.pow(radio, 2);
    return area;
}

console.log(`El area del circulo de radio 5 es: ${areaCirculo(5)}`);


const CALIFICACION_FINAL = 6;
//CALIFICACION_FINAL = 9; // Las constantes son inmutables (no se puede modificar su valor)
console.log(CALIFICACION_FINAL); 

// Constantes y los arreglos
const arreglo = [1, 2, 4, 7, 8];

// Longitud del arreglo
console.log(arreglo.length);
// Los arreglos no son constantes, lo que estamos
// declarando es una referencia constante a ese arreglo
// Por lo tanto, podemos cambiar los elementos del arreglo
arreglo[4] = 9;
console.log(arreglo);

// Tratando de reasignar la variable arreglo a otro arreglo
//arreglo = [7, 8, 9, 10];
//console.log(arreglo); // Marca error por tratar de cambiar la referencia constante

// Pregunta?
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let valor;
if(arr1 != arr2){
    // Retorna false ya que son objetos en distintas zonas de memoria
    console.log(arr1 == arr2);
}

// Verificar variables

// Operador de igualdad regular ==
// Operador de igualdad estricta ===

let a = 5;
let b = "5";
console.log(a == b); // True (El contenido es el mismo)
console.log(a === b); // False (El contenido y el tipo deben ser el mismo)

