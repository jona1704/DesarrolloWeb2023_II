/* 
    Indicaciones:
    - Crear un arreglo de tres elementos
    - Crear una función que reciba como argumentos
      el arreglo creado y un valor booleano.
    - La función debe trabajar de la siguiente manera:
        - Si el arreglo contiene un 7 y el valor booleano
          es true debe retornar "Número Ganador"
        - Si el arreglo contiene un 7 y el valor booleano
          es false debe retornar "Sigue Participando"
        - En caso contrario debe retornar "Hoy no es un buen día"
*/

var arreglo = [4, 6, 9];
var condicion = false;

console.log(leerArreglo(arreglo, condicion));

function leerArreglo(a, b){
    var num_elem = a.length;
    for(var i=0; i<num_elem; i++){
        if(a[i]==7 && b==true){
            return "Número Ganador";
        } else if(a[i]==7 && b==false){
            return "Sigue participando";
        }
    }
    return "Hoy no es un buen día";
}

