<?php
    // Este es un comentario

    /* 
        Este es un comentario de 
        varias líneas
    */

    // Variables
    $nombre = "Jonathan";
    echo $nombre."<br>"; 
    echo gettype($nombre); // string

    echo "<br><br>";

    $edad = 23;
    echo $edad."<br>"; 
    echo gettype($edad); // integer

    echo "<br><br>";

    $calificacion = 6.2;
    echo $calificacion."<br>"; 
    echo gettype($calificacion); // double

    echo "<br><br>";

    $esFake = true; // false
    echo $esFake."<br>"; 
    echo gettype($esFake); // boolean

    echo "<br><br>";

    $arreglo = [1, 2, 4, 6]; 
    echo print_r($arreglo)."<br>"; 
    echo gettype($arreglo); // array

    echo "<br><br>";

    $datos = null;
    echo gettype($datos); // null

    echo "<br><br>";
    $objeto = [
        "nombre" => "Jonathan",
        "edad" => 38
    ]; // Objeto o arreglo asociativo
    echo print_r($objeto)."<br>"; 
    echo gettype($objeto); // null

    // Como imprimir en Javscript
    echo("<br><br>Desarrollo Web");
    print("<br><br> FES Acatlán");
?>