<?php
    require 'conexion.php';

    if(isset($_POST["id"]) && !empty($_POST["id"]) 
    && isset($_POST["nombre"]) && !empty($_POST["nombre"])
    && isset($_POST["apellido"]) && !empty($_POST["apellido"])
    && isset($_POST["usuario"]) && !empty($_POST["usuario"])
    && isset($_POST["correo"]) && !empty($_POST["correo"])){

        session_start();
        
        // Capturando variables
        $id = $_POST["id"];
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $usuario = $_POST["usuario"];
        $correo = $_POST["correo"];
        $operacion = intval($_POST["operacion"]);

        // Usando MySQLi Orientado a Objeto
        if($operacion === 1){
            // Consulta para editar datos del usuario
            $sql = "UPDATE usuarios SET nombre='$nombre', apellido='$apellido', usuario='$usuario', correo='$correo' WHERE id='$id'";
        } 
        
        if($conn->query($sql) === true){
            $_SESSION["nombre"] = $nombre;
            $_SESSION["apellido"] = $apellido;
            $_SESSION["usuario"] = $usuario;
            $_SESSION["email"] = $correo;
            echo json_encode(array('exito' => 1));
        } else{
            echo json_encode(array('exito' => 0));
        }

        // Cerrar las conexiones
        $conn->close();
    }
?>