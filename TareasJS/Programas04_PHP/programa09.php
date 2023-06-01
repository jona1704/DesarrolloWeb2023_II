<?php 
$arr = array("Sophia"=>"31","Jacob"=>"41","William"=>"39","Ramesh"=>"40");
// Orden ascendente por valor
asort($arr);
print_r($arr);
echo "<br>";
// Orden ascendente por clave
ksort($arr);
print_r($arr);
echo "<br>";
// Orden descendente por valor
arsort($arr);
print_r($arr);
echo "<br>";
// Orden descendente por clave
krsort($arr);
print_r($arr);

?>