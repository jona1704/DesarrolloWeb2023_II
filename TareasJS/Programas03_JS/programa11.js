let concatenar = (...arreglos) => {
    return arreglos.flat();
}

console.log(concatenar([1, 2, 3], [4, 5], [6, 7]));
console.log(concatenar([1], [2], [3], [4], [5], [6], [7]));
console.log(concatenar([1, 2], [3, 4]));
console.log(concatenar([4, 4, 4, 4, 4]));