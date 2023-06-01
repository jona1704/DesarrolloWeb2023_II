<?php 
    require "conexion.php";
?>
<head>
    <style>
        table, th, td{
            border: 1px solid black;
        }

        img{
            width: 100px;
            height: 100px;
        }
    </style>
</head>
<?php
    $sql = "SELECT * FROM productos";
    $result = $conn->query($sql);
    if($result->num_rows === 0){
?>
        <h2>No hay registros actualmente</h2>
        <br>
        <a href="cargaProductos.php">Registrar artículo</a>
<?php
    } else {
?>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th></th>
        </tr>
<?php
        $i = 0;
        while($row = $result->fetch_assoc()){
?>
        <tr>
            <td><?php echo $i+1 ?></td>
            <td><?php echo $row['articulo'] ?></td>
            <td><?php echo $row['descripcion'] ?></td>
            <td><?php echo $row['precio'] ?></td>
            <td><img src='imagenes/<?php echo $row['imagen'] ?>'></td>
        </tr>
<?php       
            $i++;    
        }
?>
        </table>
        <br><br>
        <a href="cargaProductos.php">Registrar Otro artículo</a>
<?php
    }
?>



