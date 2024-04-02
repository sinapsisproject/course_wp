jQuery(document).ready( function(){

    var urlParams = new URLSearchParams(window.location.search);
    var id_curso = urlParams.get('curso');

    data = {"id_curso" : id_curso}

    jQuery.ajax({
        type : "POST",
        url : wp_ajax_sinapsis_platform.ajax_url_validate_course_user,
        data : data,
        error: function(response){
            console.log(response);
        },
        success: function(response) {
            
            console.log(response);
           if(response.status == false){
                //window.location.replace("/");
           }
        },
        beforeSend: function (qXHR, settings) {
            
        },
        complete: function () {
           
        },
    })

})