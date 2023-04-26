<?php 
$cd = [
   ["artista" => 'Adele', 
   "precio" => 420, 
   "puntuacion" => 4],
   ["artista" => 'BTS', 
   "precio" => 325, 
   "puntuacion" => 3.5],  
   ["artista" => 'One Direction', 
   "precio" => 425, 
   "puntuacion" => 4.2],    
];

// print_r($cd);

// Funcion que imprime un arreglo asociativo
function imprimir($arr, $clave){
    echo "<ul>";
    foreach($arr as $key){
        echo "<li>".$key[$clave]."</li>";
    }
    echo "</ul>";
}

imprimir($cd, "artista");

// Funcion que imprime artista con mayor precio
function mayor_precio($arr, $clave){
    foreach($arr as $key=>value){
        $mayor_precio = $arr[$key][$clave]
        if($arr[$key][$clave] > $mayor_precio){
            $mayor_precio = $arr[$key][$clave];
        }  
    }
    return $mayor_precio;
}

echo "<br><br>";
echo mayor_precio($cd, "precio");

?>