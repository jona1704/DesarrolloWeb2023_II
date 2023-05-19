// Usando map
let obtenerNotasMasAltas = (arr) => {
    let nuevoAreglo = arr.map((objeto) => {
        return {
            nombre : objeto.nombre,
            notaMasAlta: Math.max(...objeto.notas)
        }
    });
    return nuevoAreglo;
}

// Usando reduce
let obtenerNotasMasAltas2 = (arr) => {
    let nuevoAreglo = arr.reduce((respuesta, objeto) => {
        respuesta.push( {
            nombre : objeto.nombre,
            notaMasAlta: Math.max(...objeto.notas)
        });
        return respuesta;
    }, []);
    return nuevoAreglo;
}


// let objeto = { nombre: "John", notas: [3, 5, 4] };

let arreglo = [
    { "nombre": "John", "notas": [3, 5, 4] },
    { "nombre": "Max", "notas": [1, 4, 6] },
    { "nombre": "Zygmund", "notas": [1, 2, 3] }
];


console.log(obtenerNotasMasAltas(arreglo));

console.log(obtenerNotasMasAltas2(arreglo));

