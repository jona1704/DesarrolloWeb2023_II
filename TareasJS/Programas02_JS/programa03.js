let insertarGuiones = (numero) => {
    let cadena = numero.toString();
    let nuevoArreglo = [cadena[0]];
    if(cadena.length > 0){
        for(let i=0; i<cadena.length; i++){
            if(cadena[i]%2 === 0 && cadena[i+1]%2 === 0){
                nuevoArreglo.push('-', cadena[i+1]);
            } else{
                nuevoArreglo.push(cadena[i+1]);
            }
        }
    }
    return nuevoArreglo.join('');  
}

let numero1 = 224578;
console.log(insertarGuiones(numero1));
let numero2 = 25468;
console.log(insertarGuiones(numero2));

