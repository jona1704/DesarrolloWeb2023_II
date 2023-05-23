<?php 
    session_start();
    if(!isset($_SESSION["usuario"])){
        header("location: index.html");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <link rel="shortcut icon" href="img/www.png" type="image/x-icon">
    <link rel="stylesheet" href="css/productos.css">
</head>
<body>
<header>
        <h1>Almacenes MacFES</h1>
        <div class="shopping">
            <a href="mostrarCarrito.php">
                <img src="img/shopping.svg">
                <span class="cantidad">0</span>
            </a>
        </div>
    </header>
    <main>
        <input type="hidden" id="getUser" name="getUser" value="<?php echo $_SESSION["id"]; ?>">
        <div class="flexbox">
            <a class="back" href="home.php">Regresar</a>
            <ul class="carrito"></ul>
        </div> 
    </main>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://kit.fontawesome.com/f9a38f1ae4.js" crossorigin="anonymous"></script>
    <script src="js/productos.js"></script>
</body>
</html>