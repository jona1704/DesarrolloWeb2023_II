<?php 

$colores = array(
    0 => 'Red',
    1 => 'Green',
    2 => 'White',
    3 => 'Black',
    4 => 'Red',
);

$numeros = array(
    0 => 100,
    1 => 200,
    2 => 100,
    3 => -10,
    4 => -10,
    5 => 0,
);

$unique_colores = array_map("unserialize", array_unique(array_map("serialize", $colores)));
print_r($unique_colores);
echo "<br>";
$unique_numeros = array_map("unserialize", array_unique(array_map("serialize", $numeros)));
print_r($unique_numeros);
?>