// Creando funcion
let histograma = (arr, simbolo) => {
    arr.forEach((elemento) => {
        let cadena = "";
        for(let i=0; i<elemento; i++){
            cadena += simbolo;
        }
        console.log(cadena);
    })
}


let arr = [1, 3, 4];
histograma(arr, '*');

