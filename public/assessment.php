<?php 
require(dirname(__FILE__) .'/../../../../wp-load.php');

$id_test = $_POST["id_test"];

$token = get_option('tokensinapsisplatform');

$evaluacion = RfCoreCurl::curl('/api/questionary/assessment/'.$id_test , 'GET' , $token, null);

wp_send_json(array(
    'status' => true,
    'response' => $evaluacion
));

?>