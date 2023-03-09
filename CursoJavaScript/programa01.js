/* 
    Indicaciones:
    - Declarar dos variables a y b
    - Crear una función que reciba como argumentos las variables a y b:
    - La función debe evaluar lo siguiente:
        - Si a>0 y a<10:
            - Retornar suma(a, b)
        - Si a>10 y a<=50:
            - Retornar resta(a, b)
        - Si a>50 y a<100:
            - Incrementar b en 10
            - Retornar Multiplica(a, b)
        - Si a>100:
            - Dividir(a, b)
*/

function operaciones(a, b){
    var respuesta;
    if(a>0 && a<10){
        respuesta = a+b;
    } else if(a>=10 && a<=50){
        respuesta = a-b;
    } else if(a>50 && a<100){
        b += 10;
        respuesta = a*b;
    } else{
        respuesta = a/b;
    }
    return respuesta;
}

console.log(operaciones(9, 10)); // 19
console.log(operaciones(34, 10)); // 24
console.log(operaciones(76, 10)); // 20*76
console.log(operaciones(120, 10)); // 120/10
console.log(operaciones(120, 0)); // infinity
console.log(operaciones(-120, 50)); // -2.4

var respuesta = operaciones(36, 67);
console.log(respuesta);
