<?php
    require 'conexion.php';
    
    if(isset($_POST["id_usuario"]) && isset($_POST["id_producto"]) && isset($_POST["accion"])){
        $usuario = $_POST["id_usuario"];
        $producto = $_POST["id_producto"];
        $accion = $_POST["accion"];
        // Empezando la consulta
        $sql = "";
        if($accion == "borrar"){
            $sql = "DELETE FROM carrito WHERE id_producto = $producto AND id_usuario = $usuario";
        } else if($accion == "restar"){
            $sql = "UPDATE carrito SET cantidad = cantidad - 1 WHERE id_producto = $producto AND id_usuario = $usuario";
        } else{
            $sql = "UPDATE carrito SET cantidad = cantidad + 1 WHERE id_producto = $producto AND id_usuario = $usuario";
        }

        if($conn->query($sql) === true){
            echo "OK";
        } else{
            echo "ERROR";
        }
    }
?>