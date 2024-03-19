jQuery(document).ready( function(){

    jQuery("#sidebar").css("width", "300px");
    jQuery("#contenido").css("margin-left", "300px");

    
    jQuery("#openbtn").click(function(){

        var width = jQuery("#sidebar").width();

        if(width == 0){
            jQuery("#sidebar").css("width", "300px");
            jQuery("#contenido").css("margin-left", "300px");
        }else{
            jQuery("#sidebar").css("width", "0");
            jQuery("#contenido").css("margin-left", "0");
        }


    });

})


function showClass(attr){
    jQuery('[id^="show_"]').css("display", "none");
    jQuery("#"+attr).fadeIn();
}


function showClassQuestions(attr){
    //jQuery('[id^="show_questions"]').css("display", "none");
    jQuery("#"+attr).fadeIn();
}


function saveResponseQuestionForo(id_usuario, id_pregunta, nombre_usuario, n_item ){

    jQuery("#buttonSaveResponse").prop("disabled", true);

    var entrada = jQuery("#response_question_foro_"+id_pregunta).val();

    var data = {
        "entrada" : entrada,
        "id_usuario"    : id_usuario,
        "id_pregunta"   : id_pregunta,
        "nombre_usuario": nombre_usuario
    }

    if(entrada == ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes ingresar un texto"
          });
        jQuery("#buttonSaveResponse").prop("disabled", false);
    }else{

        jQuery.ajax({
            type : "post",
            url : wp_ajax_sinapsis_platform.ajax_url_foro_response,
            data : data,
            error: function(response){
                console.log(response);
            },
            success: function(response) {
                
                if(response.status == true){
                    jQuery("#buttonSaveResponse").prop("disabled", false);
                    jQuery("#new_response_foro_"+id_pregunta).replaceWith('<div class="col-12"><p style="margin-left: 30px; font-size: 12px; margin-bottom: 0px;"><i style="margin-right: 7px;" class="fa-solid fa-user"></i>'+response.nombre_usuario+'</p><p style="margin-left: 30px;">- '+response.entrada+'</p></div><div id="new_response_foro_'+response.id_pregunta+'"></div>');
                }

                jQuery("#response_question_foro_"+id_pregunta).val("");
                jQuery("#buttonSaveResponse").prop("disabled", false);
               
            },
            beforeSend: function (qXHR, settings) {
                jQuery('#loading_response_foro_'+id_pregunta).fadeIn();
            },
            complete: function () {
                jQuery('#loading_response_foro_'+id_pregunta).fadeOut();
            },
        })

    }

}

function saveQuestionForo(id_foro , id_usuario, nombre_usuario, n_item){

    jQuery("#buttonSaveQuestion").prop("disabled", true);

    var entrada = jQuery("#new_question_foro_"+n_item).val();


    var data = {
        "entrada" : entrada,
        "id_usuario"    : id_usuario,
        "nombre_usuario": nombre_usuario,
        "id_foro"   : id_foro
    }

    if(entrada == ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes ingresar una pregunta"
          });

        jQuery("#buttonSaveQuestion").prop("disabled", false);
        
    }else{

        jQuery.ajax({
            type : "post",
            url : wp_ajax_sinapsis_platform.ajax_url_foro_question,
            data : data,
            error: function(response){
                console.log(response);
            },
            success: function(response) {
                
                if(response.status == true){
    
                    jQuery("#buttonSaveQuestion").prop("disabled", false);
    
                    var html = '';
                    html += '<div class="box-question-response col-12 border">';
                    html += '<div class="col-12 mb-4">';
                    html += '<p style="margin: 0px;"><i style="margin-right: 7px;" class="fa-solid fa-user"></i>'+response.nombre_usuario+'</p>';
                    html += '<p class="h5">'+response.entrada+'</p>';
                    html += '</div>';
                    html += '</div>';
                    html += '<div id="new_question_'+n_item+'"></div>';
    
                    jQuery("#new_question_"+n_item).replaceWith(html);


                    jQuery("#new_question_foro_"+n_item).val("");
                    jQuery("#buttonSaveQuestion").prop("disabled", false);


                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Ocurrió un error",
                        footer: 'Inténtalo de nuevo'
                      });
                }
               
            },
            beforeSend: function (qXHR, settings) {
                jQuery('#loading_question_foro_'+n_item).fadeIn();
            },
            complete: function () {
                jQuery('#loading_question_foro_'+n_item).fadeOut();
            },
        })

    }

}