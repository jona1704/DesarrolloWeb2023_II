<?php
//Calcular el triangulo de Floyd
$n = 7;
$valor = 1;
for($i=1; $i<=$n; $i++) {
    for($j=1; $j<=$i; $j++) {
      echo "$valor "; 
      $valor++;
    }
    echo "<br>"; 
}


?>