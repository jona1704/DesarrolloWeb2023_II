<?php 
    session_start(); 

    require "conexion.php";

    if(isset($_POST["registrar"])){
        if(!empty($_POST["articulo"]) && !empty($_POST["descripcion"]) 
            && !empty($_POST["precio"]) 
            && ($_FILES["imagen"]["error"] !== 0 || $_FILES["imagen"]["size"] !== 0)){
            // Asignar variables
            $articulo = $_POST["articulo"];
            $descripcion = $_POST["descripcion"];
            $precio = $_POST["precio"];
            $imagen = $_FILES["imagen"];
            $tmp_img = $imagen["tmp_name"];
            $nombre_img = $imagen["name"];
            if($imagen["size"] < 5000000){
                // La imagen debe ser no mayor a 5 MB
                // Ahora extraemos la extensión de la imagen
                $img_ext = pathinfo($nombre_img, PATHINFO_EXTENSION);
                 // Convirtiendo extension a minuscula
                 $img_ext_lw = strtolower($img_ext);
                 // Asignando nuevo nombre a la imagen
                 $nuevo_nombre = uniqid("img-", true).'.'.$img_ext_lw;
                 // Asignando la nueva ruta de la imagen
                 $ruta_imagen = "imagenes/".$nuevo_nombre;
                 // Moviendo la imagen a la carpeta imagenes
                 if(move_uploaded_file($tmp_img, $ruta_imagen)){
                    $sql = "INSERT INTO productos (articulo, descripcion, precio, imagen) VALUES('$articulo', '$descripcion', $precio, '$nuevo_nombre')";
                    if($conn->query($sql) === true){
                        $_SESSION["mensaje"] = "<b class='exito'>Registro Exitoso</b>";
                        header("Location: cargaProductos.php");
                    }    
                } else{
                    $_SESSION["mensaje"] = "<b class='error'>Error</b>";
                    header("Location: cargaProductos.php");
                }
            } else {
                $_SESSION["mensaje"] = "<b class='error'>La imagen no debe ser mayor a 5 MB</b>";
                header("Location: cargaProductos.php");
            }
        } else{
            $_SESSION["mensaje"] = "<b class='error'>Campos vacios</b>";
            header("Location: cargaProductos.php");
        }
    }

?>