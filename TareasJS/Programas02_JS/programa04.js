function comoArreglo1(obj){
    return Object.entries(obj);
} 

let comoArreglo2 = (obj) => Object.entries(obj); 

// Declarando objetos
let obj1 = {
    a:1,
    b:2
};

let obj2 = {
    mayor:17,
    menor:10
};

let obj3 = {};

console.log(comoArreglo1(obj1));
console.log(comoArreglo2(obj2));
console.log(comoArreglo1(obj3));