<?php

    require(dirname(__FILE__) .'/../../../../wp-load.php');

    $id_curso = (int)$_POST["id_curso"];
    $token = get_option('tokensinapsisplatform');

    $curso = RfCoreCurl::curl('/api/course/get_course_by_id/'.$id_curso , 'GET' , $token, null);

    if($curso->status == false && $curso->code == 403) {
        wp_send_json(array(
            'status' => false,
            "status" => $curso->status,
            "code" => $curso->code
        ));
    }else{
        wp_send_json(array(
            'status' => true,
            "status" => $curso->status,
            "code" => $curso->code
        ));
    }


?>