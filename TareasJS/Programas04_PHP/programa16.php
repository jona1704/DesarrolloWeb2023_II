<form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
    <label>Usuario: </label><br>
    <input type="text" name="usuario"><br>
    <label>Contraseña: </label><br>
    <input type="password" name="contrasena"><br><br>
    <input type="submit" name="login" value="Iniciar Sesión">
</form>
<?php
    if(isset($_POST['login'])){
        // Obtener datos del formulario
        $usuario = $_POST['usuario'];
        $contrasena = $_POST['contrasena'];

        // Validar autenticación en base de datos (esto es solo un ejemplo, asume que usarías una conexión a base de datos real)
        if($usuario === "admin" && $contrasena === "12345") {
            // Si las credenciales son correctas, guardar datos en una cookie
            setcookie("usuario", $usuario, time()+3600*24); // Cookie expira en 24 horas
            setcookie("contrasena", md5($contrasena), time()+3600*24); // Guardar hash MD5 de la contraseña
            echo "¡Bienvenido $usuario! Has iniciado sesión exitosamente.";
        } else {
            echo "Error de autenticación. Por favor, intenta de nuevo.";
        }
    }
?>