<?php

$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "tarea";

// Crear un objeto mysqli
$conn = new mysqli($servidor, $usuario, $password, $bd);

// Verificar la conexion
if($conn->connect_error){
    die("Fallo la conexion: ". $conn->connect_error);
}

// echo "Conexión Exitosa";

?>