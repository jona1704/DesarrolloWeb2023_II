<?php 

require 'conexion.php';

$sql = "SELECT * FROM productos";
$result = $conn->query($sql);
$data = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);

$conn->close();

?>