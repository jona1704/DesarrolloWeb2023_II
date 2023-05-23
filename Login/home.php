<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Principal</title>
    <link rel="shortcut icon" href="img/www.png" type="image/x-icon">
    <link rel="stylesheet" href="css/home.css">
</head>
<body>
    <?php
        require 'php/conexion.php';

        if(!isset($_SESSION["usuario"])){
            header("location: index.html");
        }

        $usuario = $_SESSION["usuario"];

        $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
        $result = $conn->query($sql);
        $data = $result->fetch_assoc();
        $path = "";
        if(isset($data['imagen']) && !empty($data['imagen'])){
            $imagen = $data['imagen'];
            $path = "uploads/$imagen";
        } else{
            $path = "img/pngwing.com.png";
        }

        echo "<h1>Bienvenido ". $_SESSION["usuario"]. "</h1>";
        echo "<br><br>";
        echo "<img class='fotoPerfil' src='". $path . "'>";
        echo "<br><br>";

        echo "<a class='btnLogout' href='php/logout.php'>Cerrar Sesión</a>";
        echo "<a class='btnEditar' href='perfil.php'>Configuración</a>";
        echo "<a class='btnMostrar' href='mostrarProductos.php'>Productos</a>";

        $conn->close();
    ?>
</body>
</html>