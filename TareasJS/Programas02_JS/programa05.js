let sumaCuadrados = arr => arr.reduce((acumulador, numero) => acumulador + Math.pow(numero,2), 0);

console.log(sumaCuadrados([0,1,2,3,4]));

