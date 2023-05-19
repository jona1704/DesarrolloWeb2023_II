let contarPalabras = (texto) => {
    const arr = texto.split(' ');
    return arr.filter(palabra => palabra !== '').length;
}

console.log(contarPalabras('Facultad de Estudios Superiores Acatlán'));
console.log(contarPalabras('La felicidad no brota de la razón, sino de la imaginación'));