<?php
/*turn of before production*/
error_reporting(E_ALL);
//error_reporting(0);
require 'db/connect.php';
$link = db_connect();
if($result = $link->query('select * from TestData')){
  if($result->num_rows){
    echo 'Good Query','<br>';
    echo '<ul>';
    while($row = $result->fetch_object()){
	echo '<li>',$row->timestamp, ', ', $row->yaxis, '</li>';
    }
    echo '</ul>';
    $result->free();
  }
}else{
  die($link->error);
} 
if($update = $link->query("UPDATE people SET created = NOW()")){
  echo 'Rows Affected: ', $link->affected_rows , '<br>';
}

mysqli_close($link);
?>
