<?php

require 'conexion.php';

if(isset($_POST["usuario"]) && !empty($_POST["usuario"]) 
&& isset($_POST["password"]) && !empty($_POST["password"])){

    session_start();

    $usuario = $_POST["usuario"];
    $pass = $_POST["password"];

    $sql = "SELECT * FROM usuarios WHERE (usuario = '$usuario' AND pass = '$pass')";
    $result = $conn->query($sql);
    $data = $result->fetch_assoc();
    if($data){
        $_SESSION["id"] = $data["id_usuario"];
        $_SESSION["nombre"] = $data["nombre"];
        $_SESSION["apellido"] = $data["apellido"];
        $_SESSION["usuario"] = $data["usuario"];
        $_SESSION["email"] = $data["correo"];
        echo json_encode(array('exito' => 1));
    } else{
        echo json_encode(array('exito' => 0));
    }
} 

?>