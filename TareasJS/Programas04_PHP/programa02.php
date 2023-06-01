<?php
    $cadena = "";
    for($i=1; $i<=10; $i++){
        $cadena .= strval($i);
        if($i != 10) $cadena .= "-"; 
    }
    echo $cadena;
?>