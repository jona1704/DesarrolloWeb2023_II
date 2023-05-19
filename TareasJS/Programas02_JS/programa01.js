let imparOPar = (valor) => {
    let suma = 0;
    while(valor){
        suma += valor % 10;
        valor = Math.floor(valor / 10);
    }

    return suma%2===0?"Par":"Impar";
}

console.log(imparOPar(2367));
console.log(imparOPar(12468));
console.log(imparOPar(7543));
console.log(imparOPar(10568));