<?php
$server = "localhost";
$user = "root";
$pass = "";
$db = "db-soporte-web";
$conexion = mysqli_connect($server, $user, $pass, $db);
mysqli_set_charset($conexion, "utf8");

if (!$conexion) {
    die("Connection failed: " . mysqli_connect_error());
}
