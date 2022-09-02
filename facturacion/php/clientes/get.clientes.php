<?php
error_reporting(0);
//Incluir el archivo de bd
include_once("../clases/class.Database.php");

$respuesta = Database::get_todo_paginado( 'clientes' );

echo json_decode( $respuesta );

?>