<?php
    
    require 'auxiliares.php';
    require 'conexion.php';
    
    if(isset($_POST["id_usuario"]) && isset($_POST["id_producto"]) && isset($_POST["cantidad"])){
        $usuario = intval($_POST["id_usuario"]);
        $producto = intval($_POST["id_producto"]);
        $cantidad = intval($_POST["cantidad"]);
        // Obteniendo respuesta
        $respuesta = false;
        // Verificar que no exista el producto
        $sql01 = "SELECT * FROM carrito WHERE id_producto = $producto AND id_usuario = $usuario";
        $result = $conn->query($sql01);
        if($result->num_rows > 0){
            $sql02 = "UPDATE carrito SET cantidad = cantidad + 1 WHERE id_producto = $producto AND id_usuario = $usuario";
            $respuesta = $conn->query($sql02) ? true: false;
        } else{
            // Preparando Insercion de datos
            //$sql03 = "INSERT INTO carrito (id_usuario, id_producto, cantidad, fecha) VALUES ($usuario, $producto, $cantidad, current_timestamp())";
            $sql03 = "INSERT INTO carrito (id_usuario, id_producto, cantidad) VALUES ($usuario, $producto, $cantidad)";
            $respuesta = $conn->query($sql03) ? true: false;
        }
        
        if($respuesta === true){
            $cant = contarProductos($usuario, $conn);
            if($cant != 0){
                echo json_encode(array('exito' => 1, 'cant' => $cant));
            } else{
                echo json_encode(array('exito' => 0, 'cant' => 0));
            }
            
            /*$sql04 = "SELECT SUM(cantidad) AS total FROM carrito WHERE id_usuario = $usuario";
            $result = $conn->query($sql04);
            $dato = $result->fetch_assoc();
            $cant = intval($dato["total"]);
            echo json_encode(array('exito' => 1, 'cant' => $cant)); */
        } else{
            echo json_encode(array('exito' => 0, 'cant' => 0));
        }
    } 
    //$conn->close();
?>