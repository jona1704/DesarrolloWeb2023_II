// Para obtener aleatorio en un rango:
// Math.floor(Math.random() * (max - min + 1)) + min;

const arreglo = (n) => Array(n).fill().map(() => Math.floor(Math.random() * n) + 1);

console.log(arreglo(20));
