const resultado = false;

const promesa = new Promise((resolve, rejected) => {
    setTimeout(() => {
        if(resultado){
            resolve('Promesa cumplida');
        } else{
            rejected('Promesa fallida');
        }
    }, 3000);
});

promesa
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))