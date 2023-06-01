<?php

$color = array ( "color" => array ( "a" => "Rojo", "b" => "Verde", "c" => "Blanco"),
"numeros" => array ( 1, 2, 3, 4, 5, 6 ),
"agujeros" => array ( "Primero", 5 => "Segundo", "Tercero"));

// Imprimir segundo
echo $color["agujeros"][5]."<br>";

// Imprimir Rojo
echo $color["color"]["a"];

?>