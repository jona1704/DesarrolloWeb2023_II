const ordenar = (arr) => arr.sort();
/* 
Otras alternativas de solucion:

const ordenar = arr => arr.sort((a,b) => a - b);

const ordenar = arr => arr.sort((a, b) => a - (typeof b === 'object' ? b[0] : b));

const ordenar = (arr) => {
    return arr.sort((a, b) => {
      return a - b;
    });
  };

*/

console.log(ordenar([4, 1, 3]));
console.log(ordenar([[4], [1], [3]]));
console.log(ordenar([4, [1], 3]));
console.log(ordenar([[4], 1, [3]]));
console.log(ordenar([[3], 4, [2], [5], 1, 6]));