// Perímetro

function perimetro(letra, num){
    if(letra === "s") return 4 * num;
    else if(letra === "c") return (2 * Math.PI * num).toFixed(2);
    else return "Valor no definido";
}

console.log(perimetro("s", 7)); // 28
console.log(perimetro("c", 4)); // 25.12
console.log(perimetro("c", 9)); // 56.52
console.log(perimetro("d", 8)); // 56.52