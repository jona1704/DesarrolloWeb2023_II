<?php

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$pais = $_POST["pais"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];

echo json_encode(array("OK" => 1));

?>