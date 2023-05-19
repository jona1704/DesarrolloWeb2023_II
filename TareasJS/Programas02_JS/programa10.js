// Objetos de Dinosaurios
let dino1 = { 
    nombre: "Tiranosaurio Rex",
    periodo: "Mesozoico",
    dieta: "carnívoro",
    caminaEnCuatroPatas: false,
    anioDescubierto: 1902,
    popularidad: 999
};
  
let dino2 = { 
    nombre: "Braquiosaurio",
    periodo: "Jurásico",
    dieta: "herbívoro",
    caminaEnCuatroPatas: true,
    anioDescubierto: 1900,
    popularidad: 959
};

let dino3 = { 
    nombre: "Parasaurolophus",
    periodo: "Cretáceo",
    dieta: "herbívoro",
    caminaEnCuatroPatas: true,
    anioDescubierto: 1922,
    popularidad: 500
};
  
let dino4 = { 
    nombre: "Stegosaurus",
    periodo: "Jurásico",
    dieta: "herbívoro",
    caminaEnCuatroPatas: true,
    anioDescubierto: 1876,
    popularidad: 903
};

// Crear Función para la Solicitud 1
const solicitud1 = (periodo, dieta, arr) => {
    const dinosaurios = arr.filter(dino => dino.periodo === periodo && dino.dieta === dieta);
    return dinosaurios;
}  

console.log(solicitud1("Jurásico", "herbívoro", [dino1, dino2, dino3, dino4]));

// Crear Función para la Solicitud 2
const solicitud2 = (arr) => {
    const ordenar = arr.sort((a, b) => b.popularidad - a.popularidad);
    const dinosaurios = ordenar.slice(0, 3);
    return dinosaurios;
}

console.log(solicitud2([dino1, dino2, dino3, dino4]));

// Exploración adicional

// Crear Funciones para la Solicitud 1
const adicional_sol1_1 = (periodo, dieta, arr) => {
    const filtrados = arr.filter(dino => dino.periodo === periodo && dino.dieta === dieta);
    const dinosaurios = filtrados.sort((a, b) => a.anioDescubierto - b.anioDescubierto);
    return dinosaurios;
}  

console.log(adicional_sol1_1("Jurásico", "herbívoro", [dino1, dino2, dino3, dino4]));

const adicional_sol1_2 = (arr) => {
    const ordenar = arr.sort((a, b) => b.popularidad - a.popularidad);
    const dinosaurios = ordenar.filter(dino => dino.popularidad > 500);
    return dinosaurios;
}

console.log(adicional_sol1_2([dino1, dino2, dino3, dino4]));

const adicional_sol1_3 = (periodo, dieta, arr) => {
    const filtrados = arr.filter(dino => dino.periodo === periodo && dino.dieta === dieta);
    const dinosaurios = filtrados.slice(0, 50);
    return dinosaurios;
}

console.log(adicional_sol1_3("Jurásico", "herbívoro", [dino1, dino2, dino3, dino4]));

// Crear Funciones para la Solicitud 2
const adicional_sol2_1 = (arr) => {
    const ordenar = arr.sort((a, b) => b.popularidad - a.popularidad);
    const dinosaurios = ordenar.slice(0, 3);
    return dinosaurios;
}

console.log(adicional_sol2_1([dino1, dino2, dino3, dino4]));

const adicional_sol2_2 = (arr) => {
    const ordenar = arr.sort((a, b) => b.popularidad - a.popularidad);
    const filtro_sup = ordenar.filter(dino => dino.popularidad > 900)
    let aleatorio = Math.floor((Math.random() * 50) + 1);
    const dinosaurios = filtro_sup.slice(0, aleatorio);
    return dinosaurios;
}

console.log(adicional_sol2_2([dino1, dino2, dino3, dino4]));

const adicional_sol2_3 = (arr) => {
    const herviboros = arr.filter(dino => dino.dieta === "herbívoro");
    const carnivoros = arr.filter(dino => dino.dieta === "carnívoro");
    const mayor_herviboro = herviboros.reduce((a,b) => a.popularidad > b.popularidad ? a: b);
    const mayor_carnivoro = carnivoros.reduce((a,b) => a.popularidad > b.popularidad ? a: b);
    return { herviboro_mas_popular: mayor_herviboro.nombre , carnivoro_mas_popular: mayor_carnivoro.nombre };
}

console.log(adicional_sol2_3([dino1, dino2, dino3, dino4]));
  