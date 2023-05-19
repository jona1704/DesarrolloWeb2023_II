let programacion = {
    lenguajes: ["JavaScript", "Python", "Ruby"],
    esDesafiante: true,
    esGratificante: true,
    dificultad: 8,
    bromas:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// a) Escriba el comando para agregar el lenguaje "Go" al final del arreglo de lenguajes.
programacion["lenguajes"].push("Go");
console.log(programacion);

// b) Cambie el valor de dificultad a 7.
programacion.dificultad = 7;
console.log(programacion);

// c) Usando la palabra reservada delete, escriba la sentencia para eliminar la clave de bromas del objeto programacion.
delete programacion.bromas;
console.log(programacion);

// d) Escriba la sentencia para agregar una nueva clave llamada esDivertido y un valor de true al objeto programacion.
programacion.esDivertido = true;
console.log(programacion);

console.log("\n");

// e) Usando un bucle, itere sobre el arreglo de lenguajes e imprima todos los lenguajes.
programacion.lenguajes.forEach(lenguaje => {
    console.log(lenguaje);
});

console.log("\n");

// f) Mediante un bucle, imprima todas las claves en el objeto programacion.
for(const clave in programacion){
    console.log(`${clave}`);
}

console.log("\n");

// Alternativamente basta con usar Object.keys
let claves = Object.keys(programacion);
console.log(claves);

console.log("\n");

// g) Usando un bucle, imprima todos los valores en el objeto programacion.
for(const clave in programacion){
    console.log(`${programacion[clave]}`);
}

console.log("\n");

// Alternativamente basta con usar Object.keys
let valores = Object.values(programacion);
console.log(valores);

console.log("\n");