<?php

function contarProductos($usuario, $conn){
    $cant = 0;
    $sql = "SELECT SUM(cantidad) AS total FROM carrito WHERE id_usuario = $usuario";
    $result = $conn->query($sql);
    $dato = $result->fetch_assoc();
    if($dato){
        $cant = intval($dato["total"]);
    }
    $conn->close();

    return $cant;
}

?>