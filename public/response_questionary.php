<?php 
require(dirname(__FILE__) .'/../../../../wp-load.php');


    $respuestas = $_POST["respuestas"];
    $id_test    = (int)$_POST["id_test"];
    $listado = [];

    $token = get_option('tokensinapsisplatform');
    $id    = get_option('idusersinapsisplatform');

    if($respuestas != null){
        
        foreach ($respuestas as $respuesta) {

            array_push($listado, (int)$respuesta["id_respuesta"]);

            $body = ["id_usuario" => (int)$id , "id_alternativa" => (int)$respuesta["id_respuesta"]];

            $response = RfCoreCurl::curl('/api/response_questionary' , 'POST' , $token, $body);

            if($response->status == false){
                wp_send_json(array(
                    'status' => false,
                    'error' => $respuestas
                ));
            }

        }

        $body = ["alternativas" => $listado , "id_test" => $id_test];
        
        $correcion = RfCoreCurl::curl('/api/response_questionary/correction_alternative' , 'POST' , $token, $body);

        if($correcion->status == true){
            wp_send_json(array(
                'status' => true,
                'response' => $correcion->response
            ));
        }else{
            wp_send_json(array(
                'status' => false,
                'error' => $correcion
            ));
        }

        


    }else{

        $body = ["alternativas" => $listado , "id_test" => $id_test];
        
        $correcion = RfCoreCurl::curl('/api/response_questionary/correction_alternative' , 'POST' , $token, $body);

        if($correcion->status == true){
            wp_send_json(array(
                'status' => true,
                'response' => $correcion->response
            ));
        }else{
            wp_send_json(array(
                'status' => false,
                'error' => $correcion
            ));
        }

    }
  






?>