const convertir = (str) => {
    const arr = str.split('');
    // Opcion 2:
    // const arr = [...str];
    // Opcion 3:
    // const arr = Array.from(str);
    // Opcion 4:
    // const arr = Object.assign([], str);
    return arr;
}
console.log(convertir("Hola"));