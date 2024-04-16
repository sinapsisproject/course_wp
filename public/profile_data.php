<?php 
require(dirname(__FILE__) .'/../../../../wp-load.php');


$id_curso = (int)$_POST["curso"];
$token = get_option('tokensinapsisplatform');

$response = RfCoreCurl::curl('/api/questionary/assessment_final/'.$id_curso , 'GET' , $token, NULL);

wp_send_json(array(
    'status' => true,
    'response' => $response
));

?>