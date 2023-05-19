const estudiantes = [
    { nombre: "Alice", puntuaciones: [90, 85, 92] },
    { nombre: "Bob", puntuaciones: [75, 80, 85] },
    { nombre: "Charlie", puntuaciones: [90, 95, 85] },
    { nombre: "David", puntuaciones: [100, 100, 100] }
];

const promedioEstudiantes = estudiantes.map(estudiante => {
    const suma = estudiante.puntuaciones.reduce((acc, puntuacion) => acc + puntuacion);
    return {nombre: estudiante.nombre, promedio: suma / estudiante.puntuaciones.length};
});

// Usamos filter para obtener solomente los estudiantes con promedio mayor a 90
const altoPromedio = promedioEstudiantes.filter(estudiante => estudiante.promedio > 90);

// Imprimimos resultado
console.log(altoPromedio);