<?php

require(dirname(__FILE__) .'/../../../../wp-load.php');

    $respuestas = $_POST["valores"];

    $body = ["respuestas" => $respuestas];

    $user_id = get_current_user_id();
    $token   = get_user_meta($user_id, 'tokensinapsisplatform', true);

    $response = RfCoreCurl::curl('/api/formulario/respuestas_formulario' , 'POST' , $token, $body);


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