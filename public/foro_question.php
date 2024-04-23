<?php 

require(dirname(__FILE__) .'/../../../../wp-load.php');

    $entrada = $_POST["entrada"];
    $nombre_usuario = $_POST["nombre_usuario"];
    $id_usuario = $_POST["id_usuario"];
    $id_foro = $_POST["id_foro"];


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
            "nombre_usuario" => $nombre_usuario,
            "id_foro" => $id_foro
        ];
    
        $question = RfCoreCurl::curl('/api/question_foro' , 'POST' , $token, $body);
    
        if($question->status == true){
            wp_send_json(array(
                'status' => true,
                'entrada' => $entrada,
                'nombre_usuario' => $nombre_usuario,
                'id_usuario' => $id_usuario,
                'fecha' => date("d-m-Y", strtotime($question->response->createdAt))
            ));
        }else{
            wp_send_json(array(
                'status' => false,
                'error' => "Error en la api"
            ));
        }
    }
    
?>