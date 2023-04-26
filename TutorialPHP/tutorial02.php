<?php 
// Sentencias condicionales
$temperatura = 37;
if($temperatura < 15){
    echo "Temperatura Fria<br>";
} else if($temperatura>15 && $temperatura<30){
    echo "Clima templado<br>";
} else{
    echo "Clima caluroso<br>";
}

echo "<br><br>";

$dia = "Jueves";
switch($dia){
    case "Lunes": echo "Es Lunes";
                  break;
    case "Martes": echo "Es Martes";
                  break;
    case "Miercoles": echo "Es Miercoes";
                  break;
    case "Jueves": echo "Es Jueves";
                  break;
    case "Viernes": echo "Es Viernes";
    break;
}

echo "<br><br>";

// Loops o Bucles
for($i=0; $i<10; $i++){
    echo $i+1;
    echo " ";
}

echo "<br><br>";

$i=0;
while($i<10){
    echo $i*2;
    echo " ";
    $i++;
}

echo "<br><br>";

$i=0;
do{
    echo $i*2;
    echo " ";
    $i++; 
} while($i<10);

echo "<br><br>";

// Arreglo
$arr = [24, 56, 78, 12];

foreach($arr as $valor){
    echo $valor;
    echo " ";
}

echo "<br><br>";

// Objetos o Arreglos asociativos
$articulos = [
    [
        "nombre" => "Television",
        "precio" => 10000,
        "disponible" => true
    ],
    [
        "nombre" => "Mini-componente",
        "precio" => 5000,
        "disponible" => false
    ]
];

// Acceder a los elementos del objeto
echo $articulos[0]["nombre"];

// Recorrer todos los elementos del objeto
foreach($articulos as $articulo){
    echo $articulo["nombre"]."<br>";
    echo $articulo["precio"]."<br>";
    echo $articulo["disponible"]."<br>";
    echo "<br>";
}

echo "<br><br>";

// Informacion sobre alguna variable
var_dump($articulos);


?>