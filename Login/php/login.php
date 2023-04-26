<?php

require 'conexion.php';

if(isset($_POST["usuario"]) && !empty($_POST["usuario"]) 
&& isset($_POST["password"]) && !empty($_POST["password"])){

    session_start();

    $usuario = $_POST["usuario"];
    $pass = $_POST["password"];

    $sql = "SELECT * FROM usuarios WHERE (usuario = '$usuario' AND pass = '$pass')";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        $_SESSION["usuario"] = $_POST["usuario"];
        echo json_encode(array('exito' => 1));
    } else{
        echo json_encode(array('exito' => 0));
    }
} 

?>