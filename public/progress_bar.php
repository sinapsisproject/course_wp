<?php 

require(dirname(__FILE__) .'/../../../../wp-load.php');

$id_curso = $_POST["id_curso"];
$total_progress = $_POST["total_progress"];

$body = [
    "id_curso" => $id_curso,
    "total_progress" => $total_progress
];

$token = get_option('tokensinapsisplatform');

$response = RfCoreCurl::curl('/api/progress/progress_data' , 'POST' , $token, $body);

if($response->status == true){
    wp_send_json(array(
        'status' => true,
        'response' => $response
    ));
}

?>