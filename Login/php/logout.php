<?php

session_start();
session_destroy(); // Destruyendo todas las variables de sesion
header("location: ../index.html");

?>