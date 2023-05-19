<?php

    require 'conexion.php';

    if(isset($_FILES['imagen']) && isset($_POST['id'])){
        // Información de la Imagen
        $nombre_img = $_FILES['imagen']['name'];
        $tmp_img = $_FILES['imagen']['tmp_name'];
        $error_img = $_FILES["imagen"]["error"];
        $size_img = $_FILES["imagen"]["size"];
        if($error_img === 0){
            if($size_img > 4000000){
                // La imagen debe ser no mayor a 4 MB
                echo "ERROR_SIZE";
            } else{
                // Extrae la extensión de la imagen
                $img_ext = pathinfo($nombre_img, PATHINFO_EXTENSION);
                // Convirtiendo extension a minuscula
                $img_ext_lw = strtolower($img_ext);
                // Creando arreglo de extensiones permitidas
                $ext_permitidas = array("jpg","jpeg","png");
                if(in_array($img_ext_lw, $ext_permitidas)){
                    $nuevo_nombre = uniqid("img-", true).'.'.$img_ext_lw;
                    // NOTA: Importante checar permisos para subir archivos a la carpeta
                    $ruta_imagen = "../uploads/".$nuevo_nombre;
                    if(move_uploaded_file($tmp_img, $ruta_imagen)){
                        $id = $_POST['id'];
                        $sql = "UPDATE usuarios SET imagen='$nuevo_nombre' WHERE id='$id'";
                        $conn->query($sql);
                        $conn->close();
                        echo "OK";
                    } else{
                        echo "ERROR";
                    }
                } else{
                    echo "EXTENSION_INVALIDA";
                }
            }
        } else{
            echo "ERROR";
        }
    } else{
        echo "ERROR";
    }
?>