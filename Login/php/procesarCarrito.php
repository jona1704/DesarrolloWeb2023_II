<?php
    require 'conexion.php';
    
    if(isset($_POST['id_usuario'])){
        $id = intval($_POST['id_usuario']);
        // Empezando a hacer la consulta
        $sql = "SELECT productos.id_producto, productos.nombre_producto AS nombre,";
        $sql .= "productos.precio, carrito.cantidad, productos.imagen FROM productos "; 
        $sql .= "JOIN carrito ON productos.id_producto = carrito.id_producto ";
        $sql .= "JOIN usuarios ON usuarios.id_usuario = carrito.id_usuario WHERE usuarios.id_usuario = $id";
        $result = $conn->query($sql);
        $data = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);

        $conn->close();
    }
?>