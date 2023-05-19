<?php
    require 'conexion.php';

    if(isset($_POST["id"]) && isset($_POST['password'])){
        $id = intval($_POST["id"]);
        $pass = $_POST['password'];
        // Empezando las consultas

        // Empezamos revisando si la contraseña ya existe
        $sql01 = "SELECT * FROM usuarios WHERE pass = '$pass'";
        $result = $conn->query($sql01);
        if($result->num_rows > 0){
            echo "EXISTE";
        } else{
            $sql02 = "UPDATE usuarios SET pass='$pass' WHERE id_usuario=$id";
            if($conn->query($sql02) === true){
                echo "OK";
            } else{
                echo "ERROR";
            }
        }
        
        $conn->close();
    }
?>