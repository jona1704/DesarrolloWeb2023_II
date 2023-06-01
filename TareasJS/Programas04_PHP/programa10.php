<?php 
function media($array){
    $n = count($array);
    $suma = 0;
    for($i=0; $i<$n; $i++){
        $suma += $array[$i];
    }
    return $suma/$n;
}

function procesar($array){
    $nuevo_arr = array_slice($array, 0, 5);
    return $nuevo_arr;
}

function procesar_inverso($array){
    $nuevo_arr = array_slice($array, -5);
    return $nuevo_arr;
}


$arr = [78, 60, 62, 68, 71, 68, 73, 85, 66, 
64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 
74, 62, 62, 65, 64, 68, 73, 75, 79, 73];

echo "<b>Temperatura promedio: </b>". media($arr) ."<br>";
sort($arr);
// Ordenar ascendentemente
echo "<b>Lista de cinco temperaturas menores: </b>".implode(", ", procesar($arr))."<br>";
// Ordenar descendentemente
echo "<b>Lista de cinco temperaturas mayores: </b>".implode(", ", procesar_inverso($arr));

?>