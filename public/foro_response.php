<?php 
require(dirname(__FILE__) .'/../../../../wp-load.php');


    $entrada = $_POST["entrada"];
    $nombre_usuario = $_POST["nombre_usuario"];
    $id_pregunta = $_POST["id_pregunta"];
    $id_usuario = $_POST["id_usuario"];


    if(esc_attr($_POST["entrada"]) == ''){
        wp_send_json(array(
            'status' => false,
            'response' => "Error! Dato no ingresado"
        ));
    }else{

        $token = get_option('tokensinapsisplatform');

        $body = [
            "entrada" => $entrada,
            "id_usuario" => $id_usuario,
            "id_pregunta" => $id_pregunta,
            "nombre_usuario" => $nombre_usuario
        ];

        $response = RfCoreCurl::curl('/api/response_foro' , 'POST' , $token, $body);

        if($response->status == true){
            wp_send_json(array(
                'status' => true,
                'entrada' => $entrada,
                'nombre_usuario' => $nombre_usuario,
                'id_usuario' => $id_usuario,
                'fecha' => date("d-m-Y", strtotime($response->response->createdAt))
            ));
        }else{
            wp_send_json(array(
                'status' => false,
                'response' => "Error en la consulta"
            ));
        }

    }


?>