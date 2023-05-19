const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];

const contarOcurrencias = (input) =>  {
    let cuenta = input.reduce((acc, arr) => {
        for(const item of arr){
            acc[item] = acc[item] !== undefined ? acc[item]+1: 1     
        }
        return acc
    }, {})
    return cuenta;
}

console.log(contarOcurrencias(input));