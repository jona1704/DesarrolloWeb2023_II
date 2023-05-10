<?php
    require 'conexion.php';

    if(isset($_POST["id"]) && !empty($_POST["id"])){

        $id = $_POST["id"];

        // Usando MySQLi Orientado a Objeto
        $sql = "DELETE FROM usuarios WHERE id='$id'";

        if($conn->query($sql) === true){
            echo "OK";
        } else{
            echo "ERROR";
        }

        // Cerrar las conexiones
        $conn->close();
    }

?>