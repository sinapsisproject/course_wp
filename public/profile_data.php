<?php 
require(dirname(__FILE__) .'/../../../../wp-load.php');


$id_curso = (int)$_POST["curso"];

$user_id = get_current_user_id();
$token = get_user_meta($user_id, 'tokensinapsisplatform', true);

$response = RfCoreCurl::curl('/api/questionary/assessment_final/'.$id_curso , 'GET' , $token, NULL);

wp_send_json(array(
    'status' => true,
    'response' => $response
));

?>