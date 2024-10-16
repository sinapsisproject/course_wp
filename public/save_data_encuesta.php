<?php 

require(dirname(__FILE__) .'/../../../../wp-load.php');

// Verifica si la solicitud es para guardar o recuperar respuestas.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    guardar_respuestas();
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    obtener_respuestas();
}

// Función para guardar las respuestas.
function guardar_respuestas() {
    $respuestas = $_POST["respuestas"];
    $user_id = get_current_user_id();
    $token = get_user_meta($user_id, 'tokensinapsisplatform', true);

    $body = [
        "respuestas" => $respuestas
    ];

    $response = RfCoreCurl::curl('/api/encuesta/insert_response_formularios', 'POST', $token, $body);

    if ($response->status == true) {
        wp_send_json([
            'status'   => true,
            'response' => $response->response
        ]);
    } else {
        wp_send_json([
            'status'   => false,
            'response' => $response->response
        ]);
    }
}

// Función para obtener respuestas guardadas del usuario.
function obtener_respuestas() {
    $id_encuesta = $_GET['encuesta'];
    $user_id = get_current_user_id();
    $token = get_user_meta($user_id, 'tokensinapsisplatform', true);

    $body = [
        "id_encuesta" => $id_encuesta
    ];

    $response = RfCoreCurl::curl('/api/encuesta/get_user_responses', 'POST', $token, $body);

    if ($response->status == true) {
        wp_send_json([
            'status'   => true,
            'respuestas' => $response->respuestas
        ]);
    } else {
        wp_send_json([
            'status'   => false,
            'message'  => 'No se encontraron respuestas.'
        ]);
    }
}


?>
