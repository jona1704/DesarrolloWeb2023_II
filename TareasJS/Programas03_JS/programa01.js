const obtenerPositivos = (arr) => {
    const arrPos = arr.filter(num => num > -1);
    return arrPos;
}

let arr = [1, 5, 7, -2, -6, 9, 21, -14, 9];
console.log(obtenerPositivos(arr));