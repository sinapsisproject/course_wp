<?php 

require(dirname(__FILE__) .'/../../../../wp-load.php');

    $id_curso       = $_POST["id_curso"];
    $id_item        = $_POST["id_item"];
    $nombre_item    = $_POST["nombre_item"];

    $body = [
        "id_curso" => $id_curso,
        "id_item"   => $id_item,
        "nombre_item" => $nombre_item,
    ];

    $token = get_option('tokensinapsisplatform');

    $response = RfCoreCurl::curl('/api/progress' , 'DELETE' , $token, $body);

    if($response->status == true){
        wp_send_json(array(
            'status' => true,
            'response' => $response->rows
        ));
    }else{
        wp_send_json(array(
            'status' => false,
            'error' => "Error en el servicio"
        ));
    }

?>