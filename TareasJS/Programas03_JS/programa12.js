const arregloDeMultiplos = (num, longitud) => {
    return [...Array(longitud).keys()].map(i => (i + 1) * num);
}

console.log(arregloDeMultiplos(7, 5));
console.log(arregloDeMultiplos(12, 10));
console.log(arregloDeMultiplos(17, 6));