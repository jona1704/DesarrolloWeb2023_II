<?php

/* 

Suponer que contamos con el siguiente arreglo:

$frutas = [
    [
        "nombre" => "naranja",
        "precio" => 34.5
    ],
    [
        "nombre" => "limón",
        "precio" => 56.9
    ],
    [
        "nombre" => "platano",
        "precio" => 36.5
    ],
]

a) Listar todos los nombres de las frutas en venta
b) Listar todos los nombres de mayor precio a menor precio
c) Listar todos los nombres de menor precio a mayor precio
d) Cambiar la naranja por pera

*/

$frutas = [
    [
        "nombre" => "naranja",
        "precio" => 34.5
    ],
    [
        "nombre" => "limón",
        "precio" => 56.9
    ],
    [
        "nombre" => "platano",
        "precio" => 36.5
    ],
];

// Funcion que imprime un arreglo asociativo
function imprimir($arr, $clave){
    echo "<ul>";
    foreach($arr as $key){
        echo "<li>".$key[$clave]."</li>";
    }
    echo "</ul>";
}

// a) Listar todos los nombres de las frutas en venta
echo "a) Listar todos los nombres de las frutas en venta";

imprimir($frutas, "nombre");

// b) Listar todos los nombres de mayor precio a menor precio
echo "b) Listar todos los nombres de mayor precio a menor precio";

// Ordenando los nombres ocupando el método de la burbuja
for($i=0; $i<sizeof($frutas); $i++){
    for($j=0; $j<sizeof($frutas)-1; $j++){
        if($frutas[$j]["precio"] < $frutas[$j+1]["precio"]){
            $temp = $frutas[$j];
            $frutas[$j] = $frutas[$j+1];
            $frutas[$j+1] = $temp;
        }
    }
}

imprimir($frutas, "nombre");

// c) Listar todos los nombres de menor precio a mayor precio
echo "c) Listar todos los nombres de menor precio a mayor precio";

// Ordenando los nombres ocupando el método de la burbuja
for($i=0; $i<sizeof($frutas); $i++){
    for($j=0; $j<sizeof($frutas)-1; $j++){
        if($frutas[$j]["precio"] > $frutas[$j+1]["precio"]){
            $temp = $frutas[$j];
            $frutas[$j] = $frutas[$j+1];
            $frutas[$j+1] = $temp;
        }
    }
}

imprimir($frutas, "nombre");

// d) Cambiar la naranja por pera
echo "d) Cambiar la naranja por pera";

foreach($frutas as $key=>$fruta){
    if($fruta["nombre"] == "naranja"){
        $frutas[$key]["nombre"] = "pera";
    }
}

imprimir($frutas, "nombre");

?>