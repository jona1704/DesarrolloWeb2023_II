<head>
    <style>
        .exito{
            color: green;
        }

        .error{
            color: red;
        }
    </style>   
</head>
<body onunload="endSession()">
<?php 
    session_start(); 
?>
<h1>Registrar Artículo</h1><br>
<form action="guardar.php" method="post" enctype="multipart/form-data">
    <?php 
        if(isset($_SESSION["mensaje"])){
            echo '<h4>'.$_SESSION["mensaje"].'</h4>';
        } else{
            echo '<h4></h4>';
        }
    ?>
    <label><b>Artículo: </b></label><br>
    <input type="text" name="articulo"><br><br>
    <label><b>Descripción: </b></label><br>
    <input type="text" name="descripcion"><br><br>
    <label><b>Precio: </b></label><br>
    <input type="number" step="0.01" name="precio"><br><br>
    <label><b>Subir Imagen: </b></label><br>
    <input type="file" name="imagen" accept="image/*"><br><br>
    <input type="submit" name="registrar" value="Registrar Articulo">
</form>
<br>
<a href="mostrar.php">Mostrar Articulos Registrados</a>
<script>
    function endSession(){
        fetch("cerrarSesion.php")
    }
</script>
</body>
