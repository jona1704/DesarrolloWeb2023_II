<?php
    require 'conexion.php';

    if(isset($_POST["id"]) && isset($_POST['password'])){
        $id = intval($_POST["id"]);
        $pass = $_POST['password'];
        // Empezando la consulta
        $sql = "SELECT * FROM usuarios WHERE id_usuario=$id AND pass='$pass'";
        $result = $conn->query($sql);
        if($result->num_rows != 0){
            echo "OK";
        } else{
            echo "ERROR";
        }
        $conn->close();
    }
?>