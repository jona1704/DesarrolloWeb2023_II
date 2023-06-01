<?php
    // Función para calcular la media aritmética
    function media($array){
        $n = count($array);
        $suma = 0;
        for($i=0; $i<$n; $i++){
            $suma = $suma + $array[$i];
        }
        $media = $suma / $n;
        return $media;
    }
    
    
    $arr = [];
    for($i=0; $i<50; $i++){
        $arr[$i] = rand(1, 100);
    }

    echo "La media aritmética es: " . media($arr);
    
?>