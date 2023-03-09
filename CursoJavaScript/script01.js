// alert("HOLA MUNDO");

var a = 5;
console.log(a);
console.log(typeof a);

a = "FES Acatlán";
console.log(a);
console.log(typeof a);
 
a = true; // true o false
console.log(a);
console.log(typeof a);

var b = 13.4;
a = 5;
console.log(b);

// Definir la función
function suma(a, b){
    // var resultado = a+b;
    // return resultado;
    return a+b;
}

// Llamar o invocar a la funcion
console.log(suma(a, b));

// Sentencia if
if(a > b) console.log("a mayor que b");
else console.log("a menor que b");


// switch 
var valor = 4;
switch(valor){
    case 1: 
        console.log("Primavera");
        break;
    case 2:
        console.log("Verano");
        break;
    case 3:
        console.log("Otoño");
        break;
    default: 
        console.log("Invierno");
}

// while
var i=1;
while(i<=10){
    console.log(i);
    i++;
}

console.log();

// do-while
i = 1;
do{
    console.log(i);
    i++;
} while(i <= 10);

console.log();

// for
for(i=1; i<=10; i++){
    console.log(i);
}
