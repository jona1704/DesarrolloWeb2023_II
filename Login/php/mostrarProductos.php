<?php 
    session_start();
    if(!isset($_SESSION["usuario"])){
        header("location: ../index.html");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <link rel="shortcut icon" href="../img/www.png" type="image/x-icon">
    <link rel="stylesheet" href="../css/productos.css">
</head>
<body>
    
</body>
</html>