const sumaDigitos = (num) => {
    let suma = num.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    return suma;
}

console.log(sumaDigitos(76351)); // 22