// Callbacks

// Una callback en JavaScript es una función que debe 
// ejecutarse después de que otra función haya terminado de 
// ejecutarse. Una definición más formal es: cualquier 
// función que se pasa como argumento a otra función para 
// que pueda ejecutarse en esa otra función.
// Es es nombrada como función callback.

function operar(numero1, numero2, operacion){
        operacion(numero1, numero2)    
}


function suma(n1, n2){
    setTimeout(function () {
        console.log(n1 + n2)
    }, 4000);
}

function resta(n1, n2){
    console.log(n1 - n2);
}

function multiplicacion(n1, n2){
    console.log(n1 * n2);
}

function division(n1, n2){
    console.log(n1 / n2);
}

operar(3, 4, suma);
operar(3, 4, resta);
operar(3, 4, multiplicacion);
operar(3, 4, division);

// Otra Ejemplo de Callback con asincronía

// setTimeout: Este método establece un temporizador 
// que ejecuta una función o una pieza de código 
// específica una vez que expira el temporizador.
// El tiempo de retraso es en milisegundos

function ejemplo01(){
    setTimeout(function (){
        console.log("Hola");
    }, 3000);    
}

function ejemplo02(){
    console.log("FES Acatlán");
}

ejemplo01();
ejemplo02();