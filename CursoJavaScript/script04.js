// Objetos en JavaScript

// Es una colección de claves (o propiedades) y valores
// Las claves pueden ser númericas o cadenas
// Los valores pueden ser cualquier tipo permitido por JavaScript

const miGato = {
    "nombre": "Mishi",
    "raza": "Siames",
    "edad": 4,
    "juguetes": ["Sonaja", "Campanillas"],
    "esPequeño": true
};

console.log(miGato);

// Accediendo a los valores con notación de punto
console.log(miGato.nombre);
// Accediendo a los valores con notación de corchetes
console.log(miGato["raza"]);

// Los valores tambien pueden ser numericos
let objetos = {
    1: "🏈",
    2: "🏆",
    3: "🏋",
    4: "🏍"
}

console.log(objetos[1]);

console.log();

// Object.entries()

const gato = Object.entries(miGato);
console.log(gato);

// Desestructuracion de un arreglo
let arr = [1, 2, 3, 4, 5, 6, 7];

// Elementos individuales
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
[a, b, c, ...d] = arr;
console.log(a);
console.log(b);
console.log(c);

console.log("\n");

// Intercambio de variables
let a1 = 6;
let b1 = 7;
[b1, a1] = [a1, b1];
console.log(a1);
console.log(b1);

console.log("\n");


// Iterar sobre un objeto

//1.- for ... of
for(const [key, value] of Object.entries(miGato)){
     console.log(`${key}: ${value}`);
}

// Funciones Flecha

// Funcion Normal
function suma(a, b){
    return a+b;
}

function multiplicarEscalar(num){
    const escalar = 4;
    return escalar * num;
}

// Funcion Flecha
const suma2 = (a, b) => a+b;

console.log("La suma es: " + suma2(45, 23));

const multiplicarEscalar2 = num => {
    const escalar = 4;
    return escalar * num;

}

// Funciones con valores por defecto
const suma3 = (a, b, c=1) => a+b+c;

console.log("La suma3 de (4, 5, 6) es " + suma3(4, 5, 6));
console.log("La suma3 de (7, 8) es " + suma3(7, 8));
    

console.log("La funcion escalar es: " + multiplicarEscalar2(45));

//2.- forEach
Object.entries(objetos).forEach((key, value) => {
    console.log(`${key}: ${value}`);
})


// Manipulación de Objetos
let mochila = {
    color: "Azul",
    tamaño: "mediano",
    contenido: ["botella de agua", "cuaderno"]
}

// Añadir elementos al objeto
mochila.peso = 250.56;

console.log(mochila);

// Borrar una propiedad
delete mochila.tamaño;
console.log(mochila);

// Actualizar el contenido
mochila.color = "Roja"
console.log(mochila);

// Objetos en vez de switch
function buscarElementoQuimico(simbolo){
    let simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio"
    }
    return simbolosQuimicos[simbolo]? simbolosQuimicos[simbolo]: "No existe el valor";
}

console.log(buscarElementoQuimico('Al')); // Aluminio

console.log(buscarElementoQuimico('Mg')); // No existe valor


// in
let arr2 = [1, 2, 3, 4, 5];
console.log(7 in arr2);