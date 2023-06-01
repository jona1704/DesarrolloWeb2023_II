<?php

$ceu = array(
    "Italia"=>"Roma", "Luxemburgo"=>"Luxemburgo", "Bélgica"=> "Bruselas",
    "Dinamarca"=>"Copenhague", "Finlandia"=>"Helsinki", "Francia" => "París",
    "Eslovaquia"=>"Bratislava", "Eslovenia"=>"Liubliana", "Alemania" => "Berlín",
    "Grecia" => "Atenas", "Irlanda"=>"Dublin", "Países Bajos"=>"Amsterdam",
    "Portugal"=>"Lisboa", "España"=>"Madrid", "Suecia"=>"Estocolmo", "Reino
    Unido"=>"Londres", "Chipre"=>"Nicosia", "Lituania"=>"Vilna", "República
    Checa"=>"Praga", "Estonia"=>"Tallin", "Hungria"=>"Budapest",
    "Latonia"=>"Riga", "Malta"=>"Valeta", "Austria" => "Viena",
    "Polonia"=>"Varsovía") ;

    // Ordenando el arreglo por valor
    asort($ceu);
    foreach($ceu as $clave => $valor){
        echo "La capital de ". $clave." es ". $valor . "<br>";
    }
?>