// Calculadora

function calculadora(num1, op, num2){
    let resultado;
    if(op === "+") resultado = num1 + num2;
    else if(op === "-") resultado = num1 - num2;
    else if(op === "*") resultado = num1 * num2;
    else if(op === "/" && num2 === 0) resultado = "No se puede dividir entre 0";
    else if(op === "/") resultado = num1 / num2;
    else resultado = "Operacion Inválida";
    return resultado;
}

console.log(calculadora(2,"+", 2)); // 4
console.log(calculadora(2,"*", 2)); // 4
console.log(calculadora(4,"/", 2)); // 2
console.log(calculadora(4,"/", 0)); // No se puede dividir entre 0
console.log(calculadora(5,"?", 8)); // Operacion Inválida