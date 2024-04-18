var timer = new Timer();

var count = -1;

var quills = [];

var in_test = false;

jQuery(document).ready( function(){

    jQuery("#link_previus").css("display" , "none");
    
    jQuery("#openbtn").click(function(){

        var position = jQuery("#sidebar").offset();

        if(position.left == -300){
            jQuery("#openbtn").html('<i class="openbtn fa-solid fa-circle-chevron-left"></i>');
            jQuery("#openbtn").css("transform", "translateX(0px)");
            jQuery("#sidebar").css("transform", "translateX(0px)");
            jQuery("#contenido").css("margin-left", "300px");
        }else{
            jQuery("#openbtn").html('<i class="openbtn fa-solid fa-circle-chevron-right"></i>');
            jQuery("#openbtn").css("transform", "translateX(-295px)");
            jQuery("#sidebar").css("transform", "translateX(-300px)");
            jQuery("#contenido").css("margin-left", "0");
        }

    });


    jQuery('#modalProfile').on('show.bs.modal', function (event) {
        
        const urlParams = new URLSearchParams(window.location.search);
        const id_curso = urlParams.get('curso');

        data = {
            "curso" : id_curso
        }

        jQuery.ajax({
            type : "post",
            data : data,
            url : wp_ajax_sinapsis_platform.ajax_url_profile_data,
            error: function(response){
                console.log(response);
            },
            success: function(response) {
                
                console.log(response.response);
                let html = '';
                let complete = 0;
                let nonbre_recuperativa = '';
                let recuperativa = true;
                let recu_string = '';
                if(response.response.status == true){
                    
                    Object.values(response.response.pruebas).forEach(element => {
                        
                        if(element.estado == "aprobado"){

                            html += '<div class="col-12 col-lg-4">'+
                            '<div class="card border-success mb-3" style="max-width: 18rem;">'+
                              '<div class="card-header text-center">'+element.nombre+'</div>'+
                              '<div class="card-body text-success">'+
                                '<h5 style="margin-top: 0px; margin-bottom: 20px;">Aprobado <i class="fa-solid fa-circle-check"></i></h5>'+
                                '<p><strong>Puntaje requerido: </strong>'+element.aprobacion+' pts.</p>'+
                                '<p><strong>Puntaje obtenido: </strong>'+element.puntaje+' pts.</p>'+
                                '<p><strong>Ponderación: </strong>'+element.porcentaje_ponderacion+' %</p>'+
                                '<p><strong>Puntaje ponderado: </strong>'+element.puntos_ponderados+' pts.</p>'+
                              '</div>'+
                            '</div>'+
                          '</div>';
                        
                          if(element.clase == "recuperativa"){
                            recuperativa = false;
                          }
                          

                        }else if(element.estado == "no aprobado"){

                            html += '<div class="col-12 col-lg-4">'+
                            '<div class="card border-danger mb-3" style="max-width: 18rem;">'+
                              '<div class="card-header text-center">'+element.nombre+'</div>'+
                              '<div class="card-body text-danger">'+
                                '<h5 style="margin-top: 0px; margin-bottom: 20px;">No aprobado <i class="fa-solid fa-circle-xmark"></i></h5>'+
                                '<p><strong>Puntaje requerido: </strong>'+element.aprobacion+' pts.</p>'+
                                '<p><strong>Puntaje obtenido: </strong>'+element.puntaje+' pts.</p>'+
                                '<p><strong>Ponderación: </strong>'+element.porcentaje_ponderacion+' %</p>'+
                                '<p><strong>Puntaje ponderado: </strong>'+element.puntos_ponderados+' pts.</p>'+
                              '</div>'+
                            '</div>'+
                          '</div>';

                          if(element.clase == "recuperativa"){
                            recuperativa = false;
                          }


                        }else if(element.estado == null && element.clase != "recuperativa"){
                            if(element.clase == "final"){
                                complete = complete + 1;
                            }
                            
                            html += '<div class="col-12 col-lg-4">'+
                                '<div class="card border-dark mb-3" style="max-width: 18rem;">'+
                                '<div class="card-header text-center">'+element.nombre+'</div>'+
                                '<div class="card-body text-dark">'+
                                    '<h5 style="margin-top: 0px; margin-bottom: 20px;">Pendiente <i class="fa-solid fa-question"></i></h5>'+
                                    '<p><strong>Puntaje requerido: </strong></p>'+
                                    '<p><strong>Puntaje obtenido: </strong></p>'+
                                    '<p><strong>Ponderación: </strong></p>'+
                                    '<p><strong>Puntaje ponderado: </strong></p>'+
                                '</div>'+
                                '</div>'+
                            '</div>';

                        }else if(element.clase == "recuperativa"){
                            nonbre_recuperativa = element.nombre;
                        }
                    });
                }

                if(complete == 0){

                    if(response.response.notas_finales.estado_final == "aprobado"){
                        html += '<div class="col-12 box_nota_final_curso">'+
                        '<div class="card">'+
                          '<div class="card-header">'+
                            'Evaluación final del curso'+
                          '</div>'+
                          '<div class="card-body">'+
                            '<blockquote class="blockquote mb-0">'+
                              '<h3 class="text-success">¡Felicidades!</h3>'+
                              '<p class="text-success">Has aprobado el curso con '+response.response.notas_finales.suma_puntos_ponderados+' puntos ponderados.</p>'+
                              '<footer class="blockquote-footer text-success">Enviaremos tu certificado al correo <cite title="Source Title">'+response.response.datos_usuario.email+'</cite></footer>'+
                            '</blockquote>'+
                          '</div>'+
                        '</div>'+  
                      '</div>';
                    }


                    if(response.response.notas_finales.estado_final == "no aprobado"){


                        if(nonbre_recuperativa != ''){
                            html += '<div class="col-12 col-lg-4">'+
                            '<div class="card border-dark mb-3" style="max-width: 18rem;">'+
                            '<div class="card-header text-center">'+nonbre_recuperativa+'</div>'+
                            '<div class="card-body text-dark">'+
                                '<h5 style="margin-top: 0px; margin-bottom: 20px;">Pendiente <i class="fa-solid fa-question"></i></h5>'+
                                '<p><strong>Puntaje requerido: </strong></p>'+
                                '<p><strong>Puntaje obtenido: </strong></p>'+
                                '<p><strong>Ponderación: </strong></p>'+
                                '<p><strong>Puntaje ponderado: </strong></p>'+
                            '</div>'+
                            '</div>'+
                        '</div>';
                        }

                        if (recuperativa) {
                            recu_string = "<footer class='blockquote-footer'>Puedes realizar una prueba recuperativa haciendo click <strong data-bs-dismiss='modal' aria-label='Close' onclick=\"showClass('recuperativa' , 'show_cuestionario_recuperativa')\" class='link_recuperativa'>aquí.</strong></footer>";
                        }
                        
                        html += '<div class="col-12 box_nota_final_curso">'+
                        '<div class="card">'+
                          '<div class="card-header">'+
                            'Evaluación final del curso'+
                          '</div>'+
                          '<div class="card-body">'+
                            '<blockquote class="blockquote mb-0">'+
                              '<h3>No aprobado</h3>'+
                              '<p>Obtuviste un total de '+response.response.notas_finales.suma_puntos_ponderados+' pts.</p>'+
                              '<p>No lograste obtener el mínimo de '+response.response.notas_finales.nota_aprobacion+' puntos ponderados.</p>'+
                              recu_string+
                            '</blockquote>'+
                          '</div>'+
                        '</div>'+  
                      '</div>';
                    }


                    

                }


                jQuery("#show_data_profile").html(html);

               
            },
            beforeSend: function (qXHR, settings) {
                jQuery('#loading_info_profile').fadeIn();
                jQuery('#show_data_profile').fadeOut();
            },
            complete: function () {
                jQuery('#loading_info_profile').fadeOut();
                jQuery('#show_data_profile').fadeIn();
            },
        })


    });


})


function showClass(c , attr){


    if(in_test){

        Swal.fire({
            icon: "warning",
            title: "No permitido",
            text: "Si sales del test perderás tus avances y no se reiniciará el tiempo",
            confirmButtonText: "ok"
            })


    }else{

        jQuery('#startValuesAndTargetExample .values').empty('');
        jQuery('.toast-container').css("display" , "none");

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
}


function showClassQuestions(attr, c , id_test, minutes, id_curso, clase){


    jQuery("#button_init_question_"+c).prop("disabled", true);

    in_test = true;

    //jQuery('[id^="show_questions"]').css("display", "none");
    jQuery("#"+attr).fadeIn();

    if(clase == "sumativa" || clase == "final" || clase == "recuperativa"){


        const toastLiveExample = document.getElementById('liveToast_'+id_test);

        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        jQuery('.toast-container').css("display" , "block");
        toastBootstrap.show();
        


        timer.start({precision: 'seconds', startValues: {minutes: 0}, target: {minutes: minutes}});
        
        jQuery('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());
        
        timer.addEventListener('secondsUpdated', function (e) {
            jQuery('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());
            // jQuery('#startValuesAndTargetExample .progress_bar').html(jQuery('#startValuesAndTargetExample .progress_bar').html() + '.');
        });
        
        timer.addEventListener('targetAchieved', function (e) {
        // jQuery('#startValuesAndTargetExample .progress_bar').html('COMPLETE!!');
        in_test = false;
        toastBootstrap.hide();

        Swal.fire({
            icon: "warning",
            title: "Tiempo terminado",
            text: "Se enviarán tus respuesta",
            confirmButtonText: "Enviar",
            didClose: () => {
                    response_form_test(c , id_test, id_curso);
            },
            })

        });
    }
   
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



function response_form_test(c , id_test, id_curso){

    timer.stop();
    in_test = false;
    jQuery("#button_send_response_cues_"+c).attr("disabled" , true);
    jQuery("#loading_response_cuestionary_"+c).css("display" , "inline-block");

    var respuesta = [];

    jQuery(".pregunta_"+c).each(function(index) {

        var id_respuesta = jQuery(this).find("input[type='radio']:checked").val();
        
        if(id_respuesta == undefined){
            respuesta.push({"id_respuesta" : null});
        }else{
            respuesta.push({"id_respuesta" : id_respuesta});
        }

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

                jQuery("#box_icon_not_check_"+(c-1)).replaceWith('<div id="box_icon_check_'+(c-1)+'" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>');

                //guardar en base de datos el progreso

                data_progres = {
                    "id_curso" : id_curso,
                    "id_item"  : id_test,
                    "nombre_item" : "cuestionario"
                   }

                   jQuery.ajax({
                    type : "post",
                    url : wp_ajax_sinapsis_platform.ajax_url_progress,
                    data : data_progres,
                    error: function(response){
                        console.log(response);
                    },
                    success: function(response) {
                        
                        if(response.status == true){

                            jQuery('.toast-container').css("display" , "none");

                            Swal.fire({
                                icon: "success",
                                title: "Respuestas enviadas",
                                confirmButtonText: "Corregir",
                                didClose: () => {
                                    
                                    assessment(id_test);
                                    

                                    if(res.response.correccion){
                                        Object.values(res.response.correccion).forEach(element => {
                                            if(element != null){
                                                if(element.opcion == "correcta"){
                                                    jQuery("#label_alternative_"+element['id']).css('color' , '#18db18');
                                                }
                                                if(element.opcion == "incorrecta"){
                                                    jQuery("#label_alternative_"+element['id']).css('color' , '#ff3333');
                                                }
                                            }
                                        })
                                    }
            
                                    Object.values(res.response.justificacion).forEach(element =>{
                                        jQuery("#box-justified-question_"+element['id']).html(element['justificacion']);
                                        jQuery("#justificacion-block_"+element['id']).fadeIn();
                                    });
            
                                },
                                });


                        }
                       
                    }
                })

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


function assessment(id_test){

    data = {
        "id_test" : id_test
    }

    jQuery.ajax({
        type : "post",
        url : wp_ajax_sinapsis_platform.ajax_url_assessment,
        data : data,
        error: function(response){
            console.log(response);
        },
        success: function(response) {
            
            if(response.status == true){

                let estado = response.response.estado == 'aprobado' ? '<p style="font-size: 24px;color: #5cdd5c;"><i class="fa-solid fa-circle-check"></i> Aprobado</p>' : '<p style="font-size: 24px;color: #f06666;"><i class="fa-solid fa-circle-xmark"></i> No aprobado</p>';

                let html =  '<div class="box_assessment col-12 mb-4 mt-5" style="background: #445AFF;  color: white; border-radius: 10px; padding: 24px; border-radius: 10px; font-size: 20px;">'+
                            '<p>Respondiste correctamente '+response.response.correctas+' de '+response.response.preguntas+' preguntas.</p>'+
                            '<p>Obtuviste '+response.response.puntaje+' puntos.</p>'+
                            '<h3 style="color : white;">'+estado+'</h3>'+
                            '</div>';

                jQuery('#assessment_'+id_test).html(html);
            }
        }
    })

    jQuery("#row_cuestionario_"+id_test).remove();

}

function showClassResponsesAssessment(id_test){

    data = {
        "id_test" : id_test
    }

    jQuery.ajax({
        type : "post",
        url : wp_ajax_sinapsis_platform.ajax_url_assessment,
        data : data,
        error: function(response){
            console.log(response);
        },
        success: function(response) {
            
            if(response.status == true){

                let estado = response.response.estado == 'aprobado' ? '<p style="font-size: 24px;color: #5cdd5c;"><i class="fa-solid fa-circle-check"></i> Aprobado</p>' : '<p style="font-size: 24px;color: #f06666;"><i class="fa-solid fa-circle-xmark"></i> No aprobado</p>';

                let html_1 =  '<div class="box_assessment col-12 mb-4 mt-5" style="background: #445AFF;  color: white; border-radius: 10px; padding: 24px; border-radius: 10px; font-size: 20px;">'+
                            '<p>Respondiste correctamente '+response.response.correctas+' de '+response.response.preguntas+' preguntas.</p>'+
                            '<p>Obtuviste '+response.response.puntaje+' puntos.</p>'+
                            '<h3 style="color : white;">'+estado+'</h3>'+
                            '</div>';


                console.log(response.response.response[0].pregunta);

                let html_2 = '';
                let c = 0;
                response.response.response[0].pregunta.forEach(element => {
                    
                    html_2 +=   '<div class="row mt-5">'+
                                '<div class="col-12 mb-1">'+
                                '<h4><strong class="mt-5"><p>Pregunta '+(++c)+':</p></strong></h4>'+
                                '<p>'+element.pregunta+'</p>'+
                                '</div>'+
                                '</div>'+
                                '<div class="col-12 mb-3">'+
                                '<h4>Justificación</h4>'+
                                '<div class="box-justified-question shadow">'+
                                '<p>'+element.justificacion+'</p>'+
                                '</div>'+
                                '</div>'
                    });



                jQuery('#assessment_'+id_test).html(html_1 + html_2);
            }
        },
        beforeSend: function (qXHR, settings) {
            jQuery('#loading_responses_assessment_'+id_test).fadeIn();
        },
        complete: function () {
            jQuery('#loading_responses_assessment_'+id_test).fadeOut();
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




