<?php
    function intercambiar($str){
        $fin = strlen($str);
        $temp = $str[0];
        $str[0] = $str[$fin-1];
        $str[$fin-1] = $temp;
        return $str;
    }


    print(intercambiar("Hola Mundo"));
?>