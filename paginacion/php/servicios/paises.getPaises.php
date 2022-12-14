<?php
//error_reporting(0);
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;

sleep(1);

// Retorna un json
header('Content-Type: application/json;charset=utf-8');

// Contamos cuantos paises hay
$total = Database::get_valor_query("SELECT count(*) as cuantos FROM paises","cuantos");
$total = intval($total);

// Dado el total (240 paises), contra el numero de paginas
$totalpaginas = $total / 20;
$totalpaginas = ceil($totalpaginas); // redondear al siguiente 

// Determinar la pagina inicial
$pagina = $request['pagina'];
if( $pagina < 1 ){
	$pagina = 1;
}
$pagina -=1;
$pagina = 20 * $pagina;


// Cargar por paginsa
$sql  = "SELECT * FROM paises limit $pagina,20";
$paises = Database::get_arreglo($sql);

//Respuesta enviada al front
$respuesta = json_encode( 
			array('err' => false, 
				  'total'=> $total,
				  'totalpaginas'=> $totalpaginas,
				  'data' => $paises )
		);


echo $respuesta;



?>