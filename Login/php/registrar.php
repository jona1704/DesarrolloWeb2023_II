<?php

require 'conexion.php';

if(isset($_POST["nombre"]) && !empty($_POST["nombre"])
&& isset($_POST["apellido"]) && !empty($_POST["apellido"])
&& isset($_POST["usuario"]) && !empty($_POST["usuario"])
&& isset($_POST["email"]) && !empty($_POST["email"]) 
&& isset($_POST["password"]) && !empty($_POST["password"])){

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $usuario = $_POST["usuario"];
    $email = $_POST["email"];
    $pass = $_POST["password"];

    $sql = "INSERT INTO usuarios (nombre, apellido, usuario, correo, pass) VALUES ('$nombre', '$apellido', '$usuario', '$email', '$pass')";
    if ($conn->query($sql) === true) {
        echo json_encode(array('exito' => 1));
    } else {
        echo json_encode(array('exito' => 0));
    }

    $conn->close();
}
?>