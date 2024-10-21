var timer = new Timer();

var count = -1;

var quills = [];

var in_test = false;

jQuery(document).ready( function(){

    //CAMBIAR ESTILO DE BORDE AL SELECCIONAR UN RADIO BUTTON
    jQuery("input[type='radio']").change(function() {
        if (jQuery(this).is(":checked")) {
            var valorSeleccionado = jQuery(this).val();
            var radioId = jQuery(this).attr("id");
            if(jQuery("#label_alternative_"+valorSeleccionado).find("#"+radioId).length){
                jQuery(".box_"+radioId).css("border-color", "#cdcdcd");
                jQuery("#label_alternative_"+valorSeleccionado).css("border-color" , "blue");
            }
        }
    });

    if(jQuery(window).width() <= 991){
        jQuery("#sidebar").css("transform", "translateX(-300px)");
        jQuery("#openbtn").html('<i class="openbtn fa-solid fa-circle-chevron-right"></i>');
        jQuery("#openbtn").css("transform", "translateX(-295px)");
    }


    jQuery("#button_previus").css("display" , "none");
    
    jQuery("#openbtn , #btnOpenMobile").click(function(){

        var position = jQuery("#sidebar").offset();

        if(position.left == -300){
            jQuery("#openbtn").html('<i class="openbtn fa-solid fa-circle-chevron-left"></i>');
            jQuery("#openbtn").css("transform", "translateX(0px)");
            jQuery("#sidebar").css("transform", "translateX(0px)");
            jQuery("#btnOpenMobile").css("color", "#445AFF");
            

            if(jQuery(window).width() <= 991){
                jQuery("#contenido").css("transform", "translateX(0px)");
            }else{
                jQuery("#contenido").css("margin-left", "300px");
            }

        }else{
            jQuery("#openbtn").html('<i class="openbtn fa-solid fa-circle-chevron-right"></i>');
            jQuery("#openbtn").css("transform", "translateX(-295px)");
            jQuery("#sidebar").css("transform", "translateX(-300px)");
            jQuery("#btnOpenMobile").css("color", "black");

            if( jQuery(window).width() <= 991){
                jQuery("#contenido").css("transform", "translateX(0px)");
            }else{
                jQuery("#contenido").css("margin-left", "0");
            }
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
                              //recu_string+
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
            jQuery("#button_previus").css("display" , "block");
            jQuery('[id^="show_"]').css("display", "none");
            jQuery("#"+attr).fadeIn();
    
            jQuery('[id^="link_"]').css("color" , "#495255");
            jQuery('[id^="link_"]').css("font-weight" , "400");
    
            jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
            jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");
    
        }else{
            jQuery("#button_previus").css("display" , "none");
            jQuery('[id^="show_"]').css("display", "none");
            jQuery("#"+attr).fadeIn();
    
    
            jQuery('[id^="link_"]').css("color" , "#495255");
            jQuery('[id^="link_"]').css("font-weight" , "400");
    
            jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
            jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");
        }


    }
}


function showClassQuestions(attr, c , id_test, minutes, id_curso, clase , total_progress){

    jQuery("#button_init_question_"+c).css("display", "none");

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
                    response_form_test(c , id_test, id_curso, total_progress);
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

                if(response.status == true){
                    jQuery("#buttonSaveResponse").prop("disabled", false);

                    let html = '<hr>'+
                    '<div class="col-12 mb-4">'+
    
                      '<div class="row">'+
                        '<div class="col-12 col-sm-3 col-md-2 col-xl-1 text-end">'+
                          '<i style="font-size: 40px; color: #445AFF;" class="fa-solid fa-circle-user"></i>'+
                        '</div>'+
                        '<div class="col-12 col-sm-9 col-md-10 col-xl-11">'+
                          '<p style="font-size: 17px; color: #445AFF; font-weight: bold;">'+
                            response.nombre_usuario+
                          '</p>'+
                          '<p style="font-size: 10px; color: #445AFF;">'+
                            response.fecha+
                          '</p>'+
                          '<p style="margin-top: 10px;">'+response.entrada+'</p>'+
                        '</div>'+
                      '</div>'+
                      
                    '</div>'+
                    '<div id="new_response_foro_'+response.id_pregunta+'"></div>';

                    jQuery("#new_response_foro_"+id_pregunta).replaceWith(html);
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

                    let html = '<div id="new_question_'+n_item+'"></div>'+
                                '<div class="box-question-response col-12 border">'+
                                '<div class="row">'+
                                    '<div class="col-12 mb-1">'+
                    
                                    '<div class="row">'+
                                        '<div class="col-12 col-sm-3 col-md-2 col-xl-1 text-end">'+
                                        '<i style="font-size: 45px; color: #445AFF;" class="fa-solid fa-circle-user"></i>'+
                                        '</div>'+
                                        '<div class="col-12 col-sm-9 col-md-10 col-xl-11 pt-1">'+
                                        '<p style="font-weight: bold; color: #445AFF; font-size: 18px; ">'+response.nombre_usuario+'</p>'+
                                        '<p style="font-size: 11px; color: #445AFF;"><i style="margin-right: 7px;" class="fa-regular fa-calendar-days"></i> '+response.fecha+'</p>'+
                                        '</div>'+
                                    '</div>'+
                    
                                    '</div>'+
                    
                                    '<div class="col-12 mb-4">'+
                                    '<p class="h5" style="padding: 10px">'+response.entrada+'</p>'+
                                    '</div>'+
                                '</div>'+
                                '</div>';

    
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



function response_form_test(c , id_test, id_curso, total_progress){

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

            console.log(res);
            
            jQuery("#loading_response_cuestionary_"+c).css("display" , "none");
            jQuery("#button_send_response_cues_"+c).css("display" , "none");

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
                                    progress_line(id_curso, total_progress);
                                    assessment(id_test);
                                    

                                    if(res.response.correccion){
                                        Object.values(res.response.correccion).forEach(element => {
                                            if(element != null){
                                                if(element.opcion == "correcta"){
                                                    jQuery("#label_alternative_"+element['id']).css('border-color' , '#18db18');
                                                }
                                                if(element.opcion == "incorrecta"){
                                                    jQuery("#label_alternative_"+element['id']).css('border-color' , '#ff3333');
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

                let clase = response.response.response[0].clase;
                let html = '';
                let estado = response.response.estado == 'aprobado' ? '<p style="font-size: 24px;color: #5cdd5c;"><i style="color: #5cdd5c;" class="fa-solid fa-circle-check"></i> Aprobado</p>' : '<p style="font-size: 24px;color: #f06666;"><i class="fa-solid fa-circle-xmark"></i> No aprobado</p>';

                if(clase != 'formativo'){
                    html =  '<div class="box_assessment col-12 mb-4 mt-5" style="background: #445AFF;  color: white; border-radius: 10px; padding: 24px; border-radius: 10px; font-size: 20px;">'+
                            '<p>Respondiste correctamente '+response.response.correctas+' de '+response.response.preguntas+' preguntas.</p>'+
                            '<p>Obtuviste '+response.response.puntaje+' puntos.</p>'+
                            '<h3 style="color : white;">'+estado+'</h3>'+
                            '</div>';
                }else{
                    html =  '<div class="box_assessment col-12 mb-4 mt-5" style="background: #445AFF;  color: white; border-radius: 10px; padding: 24px; border-radius: 10px; font-size: 20px;">'+
                            '<p style="margin: 0px;">Respondiste correctamente '+response.response.correctas+' de '+response.response.preguntas+' preguntas.</p>'+
                            '</div>';
                }
                

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
            
            jQuery("#button_display_content_test_"+id_test).css("display" , "none");

            if(response.status == true){

                let clase = response.response.response[0].clase;
                console.log(clase);

                let estado = response.response.estado == 'aprobado' ? '<p style="font-size: 24px;color: #5cdd5c;"><i style="color: #5cdd5c;" class="fa-solid fa-circle-check"></i> Aprobado</p>' : '<p style="font-size: 24px;color: #f06666;"><i class="fa-solid fa-circle-xmark"></i> No aprobado</p>';

                let html_1 = '';
                if(clase != 'formativo'){
                    html_1 =  '<div class="box_assessment col-12 mb-4 mt-2" style="background: #445AFF;  color: white; border-radius: 10px; padding: 24px; border-radius: 10px; font-size: 20px;">'+
                            '<p>Respondiste correctamente '+response.response.correctas+' de '+response.response.preguntas+' preguntas.</p>'+
                            '<p>Obtuviste '+response.response.puntaje+' puntos.</p>'+
                            '<h3 style="color : white;">'+estado+'</h3>'+
                            '</div>';
                }else{
                    html_1 =  '<div class="box_assessment col-12 mb-4 mt-2" style="background: #445AFF;  color: white; border-radius: 10px; padding: 24px; border-radius: 10px; font-size: 20px;">'+
                            '<p style="margin: 0px;">Respondiste correctamente '+response.response.correctas+' de '+response.response.preguntas+' preguntas.</p>'+
                            '</div>';
                }

                let html_2 = '';
                
                let c = 0;

                

                response.response.response[0].pregunta.forEach(element => {
                    
                    if(clase != 'formativo'){
                        html_2 +=   '<div class="row mt-5">'+
                        '<div class="col-12 mb-1">'+
                        '<div style="display: inline-flex;"><h4><strong class="mt-5"><p>Pregunta '+(++c)+':</p></strong></h4><label style="position: relative;top: 14px;left: 10px;font-size: 19px;">('+element.puntaje+ 'pts.)</label></div>'+
                        '<p>'+element.pregunta+'</p>'+
                        '</div>'+
                        '</div>';
                    }else{
                        html_2 +=   '<div class="row mt-5">'+
                        '<div class="col-12 mb-1">'+
                        '<div style="display: inline-flex;"><h4><strong class="mt-5"><p>Pregunta '+(++c)+'</p></strong></h4></div>'+
                        '<p>'+element.pregunta+'</p>'+
                        '</div>'+
                        '</div>';
                    }


                    element.alternativas.forEach(resp => {

                        if(resp.opcion == "correcta"){
                            html_2 +=   '<div class="col-12">'+
                                        '<div class="form-check mt-4" style="border-color: rgb(24, 219, 24);">'+
                                        '<input class="form-check-input" type="radio" name="" value="">'+
                                        '<label class="form-check-label">'+
                                        resp.alternativa+
                                        '</label>'+
                                        '</div></div>';
                        }else if(resp.opcion == "incorrecta" && resp.respuesta_cuestionarios.length > 0){
                            html_2 +=   '<div class="col-12">'+
                                        '<div class="form-check mt-4" style="border-color: #f06666;">'+
                                        '<input class="form-check-input" type="radio" name="" value="">'+
                                        '<label class="form-check-label">'+
                                        resp.alternativa+
                                        '</label>'+
                                        '</div></div>';
                        }else{
                            html_2 +=   '<div class="col-12">'+
                                        '<div class="form-check mt-4">'+
                                        '<input class="form-check-input" type="radio" name="" value="">'+
                                        '<label class="form-check-label">'+
                                        resp.alternativa+
                                        '</label>'+
                                        '</div></div>';
                        }

                        
                    });


                     html_2 +=  '<div class="col-12 mb-3 mt-4">'+
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


function progressItemRegister(c, id_item, nombre_item, id_curso, total_progress){

    jQuery("#next_item_button_"+c).attr("disabled" , "true");
    jQuery("#delete_item_button_"+c).removeAttr("disabled");

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

                    progress_line(id_curso , total_progress);

                    let progress_breadcrumbs_html = '<div class="etiqueta_estado_completado text-center"><p>COMPLETADO</p></div>';

                    jQuery('#progress_breadcrumbs_'+c).html(progress_breadcrumbs_html);
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


function progressItemDelete(c, id_item, nombre_item, id_curso, total_progress){
    jQuery("#delete_item_button_"+c).attr("disabled" , "true");
    jQuery("#next_item_button_"+c).removeAttr("disabled");

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

                progress_line(id_curso , total_progress);

                let progress_breadcrumbs_html = '<div class="etiqueta_estado_progreso text-center"><p>EN PROGRESO</p></div>';

                jQuery('#progress_breadcrumbs_'+c).html(progress_breadcrumbs_html);
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
        jQuery("#button_previus").css("display" , "none");
        jQuery('[id^="show_"]').css("display", "none");
        jQuery('[id^="show_"][id$="_'+count+'"]').fadeIn();
    
    
        jQuery('[id^="link_"]').css("color" , "#495255");
        jQuery('[id^="link_"]').css("font-weight" , "400");
    
        jQuery('[id^="link_"][id$="_'+count+'"]').css("color" , "#445AFF");
        jQuery('[id^="link_"][id$="_'+count+'"]').css("font-weight" , "bold");
    }else{
        jQuery("#button_previus").css("display" , "block");
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
        jQuery("#button_previus").css("display" , "none");

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



function progress_line(id_curso , total_progress){

    console.log(id_curso);
    console.log(total_progress);

    data = {
        "id_curso" : parseInt(id_curso),
        "total_progress" : parseInt(total_progress)
    }

    jQuery.ajax({
        type : "post",
        url : wp_ajax_sinapsis_platform.ajax_url_progress_bar,
        data : data,
        error: function(response){
            console.log(response);
        },
        success: function(response) {

           if(response.response.status == true){

            let progress_html = '<div class="col-12">'+
            '<p style="position: relative; top: 11px; color: #445AFF; font-weight: bold;">'+response.response.porcentaje+'% COMPLETADO '+response.response.items+'/'+response.response.total_items+' pasos</p>'+
            '</div>'+
            '<div class="col-12">'+
            '<div style="height: 8px;" class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">'+
            '<div class="progress-bar" style="width: '+response.response.porcentaje+'%"></div>'+
            '</div>'+
            '</div>';

            jQuery('#progress_box').html(progress_html);

           }
           
        },
        beforeSend: function (qXHR, settings) {
            jQuery('#loading_progress_bar').fadeIn();
        },
        complete: function () {
            jQuery('#loading_progress_bar').fadeOut();
        },
})

}


function procesar_respuestas_formulario(c, id_formulario, id_curso, total_progress) {

    var data = {};
    var all_data = [];
    var p = 0;
    var i = 0;

    // Procesar respuestas de tipo textarea
    jQuery(".formulario_textarea_" + id_formulario).find("textarea").map(function () {
        p = p + 1;
        var respuesta = jQuery(this).val();
        var id_pregunta = jQuery(this).attr("id_pregunta");

        // Si la respuesta está vacía, se almacena igualmente
        if (respuesta == "") {
            jQuery("#error_textarea_" + id_pregunta).html("<p style='color: orange;'>Esta pregunta no ha sido respondida, pero se almacenará vacía.</p>");
        } else {
            jQuery("#error_textarea_" + id_pregunta).html('');
        }

        // Guardar la respuesta, incluso si está vacía
        data = {
            "id_pregunta": parseInt(id_pregunta),
            "respuesta": respuesta,
        };

        console.log(data);

        all_data.push(data);
        i = i + 1;  // Incrementamos i, ya que estamos procesando todas las respuestas
    });

    // Procesar respuestas de tipo input[text]
    jQuery(".formulario_input_text_" + id_formulario).find("input[type='text']").map(function () {
        p = p + 1;

        var respuesta = jQuery(this).val();
        var id_pregunta = jQuery(this).attr("id_pregunta");
        var palabras = respuesta.trim().split(/\s+/);

        // Si la respuesta está vacía, se almacena igualmente
        if (respuesta == "") {
            jQuery("#error_input_" + id_pregunta).html("<p style='color: orange;'>Esta pregunta no ha sido respondida, pero se almacenará vacía.</p>");
        } else if (palabras.length > 3) {
            jQuery("#error_input_" + id_pregunta).html("<p style='color: red;'>Solo puedes usar 3 palabras para responder.</p>");
        } else {
            jQuery("#error_input_" + id_pregunta).html('');
        }

        // Guardar la respuesta, incluso si está vacía
        data = {
            "id_pregunta": parseInt(id_pregunta),
            "respuesta": respuesta,
        };

        all_data.push(data);
        i = i + 1;  // Incrementamos i para todas las respuestas
    });

    // Si todas las respuestas han sido procesadas (sean vacías o no)
    if (p == i) {
        var data = {
            "valores": all_data
        };

        jQuery.ajax({
            type: "post",
            url: wp_ajax_sinapsis_platform.ajax_save_data_formulario,
            data: data,
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                if (response.status == true) {
                    Swal.fire({
                        icon: "success",
                        title: "Respuestas enviadas",
                        confirmButtonText: "ok",
                        didClose: () => {
                            link_next();
                            jQuery("#box_icon_not_check_" + (c - 1)).replaceWith('<div id="box_icon_check_' + (c - 1) + '" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>');

                            let progress_breadcrumbs_html = '<div class="etiqueta_estado_completado text-center"><p>COMPLETADO</p></div>';
                            jQuery('#progress_breadcrumbs_' + c).html(progress_breadcrumbs_html);

                            let data_progres = {
                                "id_curso": id_curso,
                                "id_item": id_formulario,
                                "nombre_item": "formulario"
                            };

                            jQuery.ajax({
                                type: "post",
                                url: wp_ajax_sinapsis_platform.ajax_url_progress,
                                data: data_progres,
                                error: function (response) {
                                    console.log(response);
                                },
                                success: function (response) {
                                    console.log(response);
                                    progress_line(id_curso, total_progress);
                                }
                            });
                        },
                    });
                }
            },
            beforeSend: function (qXHR, settings) {
                jQuery('#loading_formulario_button_' + id_formulario).fadeIn();
            },
            complete: function () {
                jQuery('#loading_formulario_button_' + id_formulario).fadeOut();
            },
        });
    }
}


function procesar_respuestas_encuesta(c , id_encuesta , id_curso, total_progress){

    let array_data = [];
    

    // Recorre las preguntas de la encuesta y guarda las respuestas seleccionadas.
    jQuery(".pregunta_formulario"+c).each(function(index) {

        var id_respuesta = jQuery(this).find("input[type='radio']:checked").val();
        array_data.push(id_respuesta); // Guarda el ID de la respuesta seleccionada.

    });

    // Crea un objeto de datos con las respuestas.
    let data = {
        "respuestas" : array_data,
        "id_encuesta": id_encuesta,
        "id_usuario": wp_ajax_sinapsis_platform.user_id
    }
       
    jQuery.ajax({
        type : "post",
        url : wp_ajax_sinapsis_platform.ajax_save_data_encuesta,
        data : data, // Envía las respuestas al servidor.
        error: function(response){
            console.log(response);
        },
        success: function(response) {

            if(response.status == true){

                Swal.fire({
                    icon: "success",
                    title: "Respuestas enviadas",
                    confirmButtonText: "ok",
                    didClose: () => {

                        link_next();
                        jQuery("#box_icon_not_check_"+(c-1)).replaceWith('<div id="box_icon_check_'+(c-1)+'" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>');

                        let data_progres = {
                            "id_curso" : id_curso,
                            "id_item"  : id_encuesta,
                            "nombre_item" : "encuesta"
                           }

                           console.log("data progres");
                           console.log(data_progres);
                        
                           // Envía datos de progreso al servidor mediante AJAX.
                           jQuery.ajax({
                            type : "post",
                            url : wp_ajax_sinapsis_platform.ajax_url_progress,
                            data : data_progres,
                            error: function(response){
                                console.log("response2");
                                console.log(response);
                            },
                            success: function(response) {
                                console.log(response);
                                progress_line(id_curso, total_progress);
                            }
                           })

                    },
                });

            }else{

            }
           
        },
        beforeSend: function (qXHR, settings) {
            jQuery('#loading_encuesta_button_'+id_encuesta).fadeIn();
        },
        complete: function () {
            jQuery('#loading_encuesta_button_'+id_encuesta).fadeOut();
        },
    })
    
    


}

