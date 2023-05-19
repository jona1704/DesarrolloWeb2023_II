// Esta funcion ejecuta la diferencia simétrica

const arrCompuesto = (arr1, arr2) => {
    let nuevoArr = arr1.filter(num => !arr2.includes(num))
                    .concat(arr2.filter(num => !arr1.includes(num)));
    return nuevoArr;
}

console.log(arrCompuesto([3, 5, 6, 9, 2, 14], [2, 5, 6, 9, 2, 1, 3]));