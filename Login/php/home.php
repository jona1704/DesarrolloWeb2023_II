<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Principal</title>
    <link rel="shortcut icon" href="img/www.png" type="image/x-icon">
    <link rel="stylesheet" href="../css/home.css">
</head>
<body>
    <?php
        session_start();

        if(!isset($_SESSION["usuario"])){
            header("location: ../login.html");
        }

        echo "<h1>Bienvenido ". $_SESSION["usuario"]. "</h1>";
        echo "<br><br>";
        echo "<img class='fotoPerfil' src='../img/pngwing.com.png'>";
        echo "<br><br>";

        echo "<a class='btnLogout' href='logout.php'>Cerrar Sesión</a>";
        echo "<a class='btnEditar' href='perfil.php'>Editar Perfil</a>";
    ?>
</body>
</html>