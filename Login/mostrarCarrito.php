<?php 
    session_start(); 

    if(!isset($_SESSION["usuario"])){
        header("location: login.html");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito de Compras</title>
    <link rel="shortcut icon" href="img/www.png" type="image/x-icon">
    <link rel="stylesheet" href="css/carrito.css">
</head>
<body>
<header>
        <h1>Almacenes MacFES</h1>
        <div class="shopping">
            <a href="mostrarProductos.php">
                <img src="img/online-shopping-icon.svg">
            </a>
        </div>
    </header>
    <main>
        <input type="hidden" id="getUser" name="getUser" value="<?php echo $_SESSION["id"]; ?>">
        <div class="flexbox">
            <div class="total">
                <div class="obtenerPrecio"><div class="rotulo_total">Precio Total: $</div><span class="precioTotal"> 0 </span></div>
                <button class="comprar">Comprar</button>
            </div>
            <ul class="listarCarrito"></ul>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://kit.fontawesome.com/f9a38f1ae4.js" crossorigin="anonymous"></script>
    <script src="js/carrito.js"></script>
</body>
</html>