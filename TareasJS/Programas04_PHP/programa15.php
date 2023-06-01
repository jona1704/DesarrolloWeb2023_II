<form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
    <label>Usuario: </label><br>
    <input type="text" name="usuario"><br>
    <label>Contraseña: </label><br>
    <input type="password" name="password"><br><br>
    <input type="submit" name="login" value="Iniciar Sesión">
</form>
<?php 
    if(isset($_POST['login'])){
        $usuario = $_POST["usuario"]; 
        $pass = $_POST["password"];
        if($usuario == "admin" && $pass == "godsgift"){
            echo "<b>BIENVENIDO $usuario</b>";
        } else{
            header("Location: programa15.php");
        }
    }
?>