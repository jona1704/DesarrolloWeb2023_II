/* 
    Indicaciones:
    - Crear una función que reciba como argumentos dos numeros (a y b) y un caracter (c)
    - La función debe realizar lo siguiente:
        - Crear un objeto que trabaje de acuerdo al siguiente criterio:
		- Si la propiedad es "s" el valor debe ser la suma de a y b		
		- Si la propiedad es "r" el valor debe ser la resta de a y b
		- Si la propiedad es "m" el valor debe ser la multiplicación de a y b
		- Si la propiedad es "d" el valor debe ser la division de a y b
		- Si la propiedad es "e" el valor debe ser el modulo de a y b
	  - Comparar el caracter c con las propiedades o claves del objeto creado.
		- Si c existe en las propiedades del objeto la función debe retornar la operación indicada por c
	  - Si el caracter c no existe en las propiedades del objeto la función debe retornar 0. 
*/


const operaciones = (a, b, c) => {
    let resultados = {
        "s": a + b,
        "r": a - b,
        "m": a * b,
        "d": a / b,
        "e": a % b
    }

    // return resultados[c] ? resultados[c]: 0
    return c in resultados ? resultados[c]: 0
}

console.log(operaciones(4, 5, "m")); // 20
console.log(operaciones(4, 5)); // 