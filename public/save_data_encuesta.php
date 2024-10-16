<?php 

    require(dirname(__FILE__) .'/../../../../wp-load.php');

    $respuestas = $_POST["respuestas"];
    $id_encuesta = $_POST["id_encuesta"];
    $user_id = get_current_user_id();
    $token = get_user_meta($user_id, 'tokensinapsisplatform', true);

    // Verifica si ya existen respuestas para este usuario y encuesta.
    $existe_respuesta = RfCoreCurl::curl(
        "/api/encuesta/verificar_respuesta?usuario=$user_id&encuesta=$id_encuesta",
        'GET',
        $token
    );

    if ($existe_respuesta->status == true) {
        wp_send_json(array(
            'status' => false,
            'response' => 'Ya has enviado respuestas para esta encuesta.'
    ));
    exit;
    }

    // Si no existen respuestas previas, guarda las nuevas.
    $body = ["respuestas" => $respuestas];
    $response = RfCoreCurl::curl('/api/encuesta/insert_response_formularios', 'POST', $token, $body);

    if ($response->status == true) {
    wp_send_json(array('status' => true, 'response' => $response->response));
    } else {
    wp_send_json(array('status' => false, 'response' => $response->response));
    }

?>


