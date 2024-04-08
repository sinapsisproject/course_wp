var timer = new Timer();

var count = -1;

var quills = [];

jQuery(document).ready( function(){

    jQuery("#link_previus").css("display" , "none");

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


function showClass(c , attr){

    console.log(c);

    if(attr.includes("show_foro") && quills[c] == undefined){
        quills[c] = new Quill('#new_question_foro_'+(c+1), {
            theme: 'snow'
        });
    }
    

    count = c;
    if(count > 0){
        jQuery("#link_previus").css("display" , "block");
        jQuery('[id^="show_"]').css("display", "none");
        jQuery("#"+attr).fadeIn();

        jQuery('[id^="link_"]').css("color" , "#495255");
        jQuery('[id^="link_"]').css("font-weight" , "400");

        jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
        jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");

    }else{
        jQuery("#link_previus").css("display" , "none");
        jQuery('[id^="show_"]').css("display", "none");
        jQuery("#"+attr).fadeIn();


        jQuery('[id^="link_"]').css("color" , "#495255");
        jQuery('[id^="link_"]').css("font-weight" , "400");

        jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
        jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");
    }
}


function showClassQuestions(attr, c , id_test, minutes){


    //jQuery('[id^="show_questions"]').css("display", "none");
    jQuery("#"+attr).fadeIn();

    
    timer.start({precision: 'seconds', startValues: {minutes: 0}, target: {minutes: minutes}});
    
    jQuery('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());
    
    timer.addEventListener('secondsUpdated', function (e) {
        jQuery('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());
        // jQuery('#startValuesAndTargetExample .progress_bar').html(jQuery('#startValuesAndTargetExample .progress_bar').html() + '.');
    });
    
    timer.addEventListener('targetAchieved', function (e) {
       // jQuery('#startValuesAndTargetExample .progress_bar').html('COMPLETE!!');

       
       Swal.fire({
        icon: "warning",
        title: "Tiempo terminado",
        text: "Se enviarán tus respuesta",
        confirmButtonText: "Enviar",
        didClose: () => {
                response_form_test(c , id_test);
        },
        })

    });
   
}


function actualizarCronometro() {
    document.getElementById("cronometro").innerHTML = timer.getTimeValues().toString();
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
                
                console.log(response);

                if(response.status == true){
                    jQuery("#buttonSaveResponse").prop("disabled", false);
                    jQuery("#new_response_foro_"+id_pregunta).replaceWith('<hr><div class="col-12 mb-4"><p style="margin-left: 30px; font-size: 15px; margin-bottom: 0px; color: #445AFF;"><i style="margin-right: 7px;" class="fa-solid fa-user"></i>'+response.nombre_usuario+" / "+response.fecha+'</p><p style="margin-left: 30px; margin-top: 10px;">- '+response.entrada+'</p></div><div id="new_response_foro_'+response.id_pregunta+'"></div>');
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

    let i = n_item - 1;
 
    var trimEntrada = quills[i].getText().trim();
    var entrada = quills[i].root.innerHTML;

    var data = {
        "entrada" : entrada,
        "id_usuario"    : id_usuario,
        "nombre_usuario": nombre_usuario,
        "id_foro"   : id_foro
    }

    if(trimEntrada == ""){
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
                    html += '<div class="row">';
                    html += '<div class="col-12 mb-1">';
                    html += '<p style="font-size: 12px; padding-bottom: 10px; color: #445AFF;"><i style="margin-right: 7px;" class="fa-regular fa-calendar-days"></i> '+response.fecha+'</p>';
                    html += '<p style="margin: 0px; color: #445AFF;"><i style="margin-right: 7px;" class="fa-solid fa-user"></i> '+response.nombre_usuario+'</p>';
                    html += '</div>';
                    html += '<div class="col-12 mb-4">';
                    html += '<p class="h5" style="padding: 10px">'+response.entrada+'</p>';
                    html += '</div>';
                    html += '</div>';
                    html += '<div id="new_question_'+n_item+'"></div>';
    
                    jQuery("#new_question_"+n_item).replaceWith(html);


                    jQuery(".new_question_foro_"+n_item).val("");
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



function response_form_test(c , id_test){

    timer.stop();
    jQuery("#button_send_response_cues_"+c).attr("disabled" , true);
    jQuery("#loading_response_cuestionary_"+c).css("display" , "inline-block");

    var respuesta = [];
    
    jQuery(".pregunta_"+c).each(function(index) {
        var id_respuesta = jQuery(this).find("input[type='radio']:checked").val();

        respuesta.push({"id_respuesta" : id_respuesta});
    });

    data = {
        "respuestas" : respuesta,
        "id_test"    : id_test
    }
    
    jQuery.ajax({
        type : "post",
        url : wp_ajax_sinapsis_platform.ajax_url_response_questionary,
        data : data,
        error: function(response){
            console.log(response);
        },
        success: function(res) {
            
            jQuery("#loading_response_cuestionary_"+c).css("display" , "none");

            if(res.status == true){


                Swal.fire({
                    icon: "success",
                    title: "Respuestas enviadas",
                    confirmButtonText: "Corregir",
                    didClose: () => {
                        
                        if(res.response.correccion){
                            Object.values(res.response.correccion).forEach(element => {
                                if(element.opcion == "correcta"){
                                    jQuery("#label_alternative_"+element['id']).css('color' , '#18db18');
                                }
                                if(element.opcion == "incorrecta"){
                                    jQuery("#label_alternative_"+element['id']).css('color' , '#ff3333');
                                }
                            })
                        }


                        Object.values(res.response.justificacion).forEach(element =>{
                            jQuery("#box-justified-question_"+element['id']).html(element['justificacion']);
                            jQuery("#justificacion-block_"+element['id']).fadeIn();
                        });


                    },
                    });
                

            }else{
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    footer: 'Contacta a soporte'
                  });
            }
           
        },
        beforeSend: function (qXHR, settings) {
            //jQuery('#loading_response_foro_'+id_pregunta).fadeIn();
        },
        complete: function () {
            //jQuery('#loading_response_foro_'+id_pregunta).fadeOut();
        },
    })

}


function progressItemRegister(c, id_item, nombre_item, id_curso){

    jQuery("#next_item_button_"+c).attr("disabled" , "true");

    data = {
        "id_curso" : id_curso,
        "id_item"  : id_item,
        "nombre_item" : nombre_item
       }
    
        jQuery.ajax({
            type : "post",
            url : wp_ajax_sinapsis_platform.ajax_url_progress,
            data : data,
            error: function(response){
                console.log(response);
            },
            success: function(response) {
                
                if(response.status == true){

                    jQuery("#box_icon_not_check_"+(c-1)).replaceWith('<div id="box_icon_check_'+(c-1)+'" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>');

                    jQuery("#box_delete_select_item_"+(c)).css("display", "block");
                    jQuery("#box_register_select_item_"+(c)).css("display" , "none");

                    count = c;
                    jQuery('[id^="show_"]').css("display", "none");
                    jQuery('[id^="show_"][id$="_'+c+'"]').fadeIn();

                    jQuery('[id^="link_"]').css("color" , "#495255");
                    jQuery('[id^="link_"]').css("font-weight" , "400");

                    jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
                    jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");

                }
               
            },
            beforeSend: function (qXHR, settings) {
                jQuery('#loading_next_item_'+c).fadeIn();
            },
            complete: function () {
                jQuery('#loading_next_item_'+c).fadeOut();
            },
    })

}


function progressItemDelete(c, id_item, nombre_item, id_curso){
    jQuery("#delete_item_button_"+c).attr("disabled" , "true");

    data = {
        "id_curso" : id_curso,
        "id_item"  : id_item,
        "nombre_item" : nombre_item
       }

       jQuery.ajax({
        type : "post",
        url : wp_ajax_sinapsis_platform.ajax_url_progress_delete,
        data : data,
        error: function(response){
            console.log(response);
        },
        success: function(response) {
            
            if(response.status == true){
                jQuery("#box_icon_check_"+(c-1)).replaceWith('<div id="box_icon_not_check_'+(c-1)+'" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>');
                jQuery("#box_delete_select_item_"+(c)).css("display", "none");
                jQuery("#box_register_select_item_"+(c)).css("display" , "block");
            }
        
           
        },
        beforeSend: function (qXHR, settings) {
            jQuery('#loading_delete_item_'+c).fadeIn();
        },
        complete: function () {
            jQuery('#loading_delete_item_'+c).fadeOut();
        },
})

}




function link_next(){
   
    
    count++;

    console.log(count);

    if(count == 0){
        jQuery("#link_previus").css("display" , "none");
        jQuery('[id^="show_"]').css("display", "none");
        jQuery('[id^="show_"][id$="_'+count+'"]').fadeIn();
    
    
        jQuery('[id^="link_"]').css("color" , "#495255");
        jQuery('[id^="link_"]').css("font-weight" , "400");
    
        jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
        jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");
    }else{
        jQuery("#link_previus").css("display" , "block");
        jQuery('[id^="show_"]').css("display", "none");
        jQuery('[id^="show_"][id$="_'+count+'"]').fadeIn();
    
    
        jQuery('[id^="link_"]').css("color" , "#495255");
        jQuery('[id^="link_"]').css("font-weight" , "400");
    
        jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
        jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");
    }
    
}

function link_previus(){
    
    
    count--;
    if(count == 0){
        jQuery("#link_previus").css("display" , "none");

        jQuery('[id^="show_"]').css("display", "none");
        jQuery('[id^="show_"][id$="_'+count+'"]').fadeIn();
       

        jQuery('[id^="link_"]').css("color" , "#495255");
        jQuery('[id^="link_"]').css("font-weight" , "400");

        jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
        jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");
    }else{
        
        jQuery('[id^="show_"]').css("display", "none");
        jQuery('[id^="show_"][id$="_'+count+'"]').fadeIn();
       

        jQuery('[id^="link_"]').css("color" , "#495255");
        jQuery('[id^="link_"]').css("font-weight" , "400");

        jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
        jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");
        
        
    }
    
}




