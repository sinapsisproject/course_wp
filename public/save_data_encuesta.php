<?php 

    require(dirname(__FILE__) .'/../../../../wp-load.php');

    $respuestas = $_POST["respuestas"];

    $user_id = get_current_user_id();
    $token   = get_user_meta($user_id, 'tokensinapsisplatform', true);

    $body = [
        "respuestas" => $respuestas
    ];
    
    $response = RfCoreCurl::curl('/api/encuesta/insert_response_formularios' , 'POST' , $token, $body);


    if($response->status == true){
        wp_send_json(array(
            'status'   => true,
            'response' => $response->response
        ));
    }else{
        wp_send_json(array(
            'status'    => false,
            'response'  => $response->response
        ));
    }


?>


