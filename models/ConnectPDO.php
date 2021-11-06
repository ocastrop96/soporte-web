<?php
class Conexion{
	static public function conectar(){
		$link = new PDO("mysql:host=localhost;dbname=db-soporte-web",
			            "adm-soporte",
			            "jgRxPZ99**Qp&j8rkN6b");
		$link->exec("set names utf8");
		return $link;
	}
}