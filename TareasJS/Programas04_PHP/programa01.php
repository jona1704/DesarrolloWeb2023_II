<form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
    <input type="text" name="nombre">
    <input type="submit" name="enviar" value="ENVIAR">
</form>
<?php
   if(isset($_POST['enviar'])){
        $nombre = $_POST['nombre'];
        echo $nombre;
   } 
?>