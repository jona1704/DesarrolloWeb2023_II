<?php

require 'auxiliares.php';
require 'conexion.php';

if(isset($_POST["id_usuario"])){
    $usuario = $_POST["id_usuario"];
    $cant = contarProductos($usuario, $conn);
    if($cant != 0){
        echo json_encode(array('exito' => 1, 'cant' => $cant));
    } else{
        echo json_encode(array('exito' => 0, 'cant' => 0));
    }
}


?>