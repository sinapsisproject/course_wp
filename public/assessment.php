<?php 
require(dirname(__FILE__) .'/../../../../wp-load.php');

$id_test = $_POST["id_test"];

$user_id = get_current_user_id();
$token = get_user_meta($user_id, 'tokensinapsisplatform', true);

$evaluacion = RfCoreCurl::curl('/api/questionary/assessment/'.$id_test , 'GET' , $token, null);

wp_send_json(array(
    'status' => true,
    'response' => $evaluacion
));

?>