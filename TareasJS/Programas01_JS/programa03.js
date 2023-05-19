// Concatenar arreglos

function concatenar(...arreglos){
    let arr = [...arreglos];
    let nuevoArreglo = [];
    for(let i=0; i<arr.length; i++){
        nuevoArreglo.push(...arr[i]);
    }

    return nuevoArreglo;
}

// Otras alternativas de solución

/*

function concatenar(...arreglos) {
	return [].concat(...arreglos)
}

function concatenar(...arreglos) {
	return arrglos.flat();
}

function concatenar(...arreglos) {
	let arr = []
	arreglos.forEach(a => arr.push(...a))
	return arr
}

*/

console.log(concatenar([1, 2, 3], [4, 5], [6, 7]));
console.log(concatenar([1], [2], [3], [4], [5], [6], [7]));
console.log(concatenar([1, 2], [3, 4]));
console.log(concatenar([4, 4, 4, 4, 4]));