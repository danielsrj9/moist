<?php

//turn off before production
error_reporting(0);
//error_reporting(E_ALL);

function db_connect(){
	$connection = new mysqli('localhost', 'root', '', 'app');
	if($connection->connect_errno){
	  echo $connection->connect_errno;
	  die(' - Failed to load Database');
	}else{
	  echo 'Success loading Database','<br>';
	}

	if(!mysqli_select_db($connection,'app')){
		die('No Database Selected');	
	}

	return $connection;

}
?>
