<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>
    <link rel="shortcut icon" href="../img/www.png" type="image/x-icon">
    <link rel="stylesheet" href="../css/perfil.css">
</head>
<body>
    <h1>Configuración</h1>
    <div class="controles">
        <a id="backButton" href='home.php'>Regresar</a>
        <button id="editarDatos">Editar Datos Personales</button>
        <button id="editarPassword">Cambiar Contraseña</button>
        <button id="editarFoto">Editar Foto de Perfil</button>
        <button id="removerPerfil">Eliminar Cuenta</button>
    </div>
    <!-- Ventana Modal Editar Datos -->
    <div id="registerModal" class="modal">
        <div class="modalContent">
            <span class="closeButton">&times;</span>
            <h3>Editar Información</h3>
            <p>Modifique la información requerida</p>
            <form id="formRegister">
                <input type="hidden" id="id" name="id" value="<?php echo $_SESSION["id"]; ?>">
                <div class="formGroup">
                    <div class="formField">
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value="<?php echo $_SESSION["nombre"]; ?>" placeholder="Ingrese Nombre ...">
                    </div>
                    <div class="formField">
                        <label for="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" value="<?php echo $_SESSION["apellido"]; ?>" placeholder="Ingrese Apellido ...">
                    </div>
                </div>
                <div class="formGroup">
                    <div class="formField">
                        <label for="usuario">Usuario:</label>
                        <input type="text" id="usuario" name="usuario" value="<?php echo $_SESSION["usuario"]; ?>" placeholder="Ingrese Usuario ...">
                    </div>
                    <div class="formField">
                        <label for="correo">Correo:</label>
                        <input type="email" id="correo" name="correo" value="<?php echo $_SESSION["email"]; ?>" placeholder="Ingrese Correo Electrónico ...">
                    </div>
                </div>
                <div class="formGroup" style="justify-content: flex-start; gap: 8px">
                    <button id="btnRegistrar">Registrar Cambios</button>
                    <button id="btnCancelar">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
    <!-- Fin de Ventana Modal Editar Datos  -->
    <script src="../js/perfil.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>

