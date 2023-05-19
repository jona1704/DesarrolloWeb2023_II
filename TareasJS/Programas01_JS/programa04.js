// Convertir objeto a arreglo

function miFuncion(objeto){
    let claves = Object.keys(objeto);
    return [claves, claves.map(clave => objeto[clave])];
}

/*
    Otras alternativas de solución


    function miFuncion(objeto) {
	    const arreglos = [Object.keys(objeto), Object.values(objeto)];
	    return arreglos;
    }

    function miFuncion(objeto) {
        return [Object.keys(objeto), Object.keys(objeto).map(x => objeto[x])];
    }
*/

console.log(miFuncion({ a: 1, b: 2, c: 3 })); // [["a", "b", "c"], [1, 2, 3]]
console.log(miFuncion({ a: "Apple", b: "Microsoft", c: "Google" })); // [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(miFuncion({ key1: true, key2: false, key3: undefined })); // [["key1", "key2", "key3"], [true, false, undefined]]