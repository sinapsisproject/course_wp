<?php 


/*
    Plugin Name: [Sinapsis] Course
    Plugin URI: https://sinapsis.com
    Description: Plugin para visualización de cursos de plataforma Sinapsis
    Version: 1.0
    Author: Diego Baeza
    Author URI: https://sisnapsis.com
    License: GPL2
*/
//require dirname(__FILE__) . '/public/assets/smarty/libs/Smarty.class.php';


add_action( 'wp_enqueue_scripts', 'ajax_enqueue_scripts_course' );

    function ajax_enqueue_scripts_course() {

        // wp_enqueue_script(
        //     'sweetalert-sinapsis',
        //     plugins_url( '/public/assets/js/sweetalert.js', __FILE__ ),
        //     array('jquery'),
        //     rand(0, 99),
        //     true
        //     );
        
        //     wp_enqueue_script(
        //     'bootstrap-sinapsis',
        //     plugins_url( '/public/assets/js/bootstrap.js', __FILE__ ),
        //     array('jquery'),
        //     rand(0, 99),
        //     true
        //     );


        // wp_enqueue_style( 
        //     'bootstrap-sinapsis',
        //     plugins_url( '/public/css/bootstrap.css', __FILE__ ),
        //     array(),
        //     rand(0, 99)
        // );

        wp_enqueue_style( 
            'fontawesome-sinapsis',
            plugins_url( '/public/assets/fontawesome/css/all.min.css', __FILE__ ),
            array(),
            rand(0, 99)
        );

        wp_enqueue_script(
            'courses-platform',
            plugins_url( '/public/js/platform.js', __FILE__ ), 
            array('jquery'),
            rand(0, 99),
            true
            );

        wp_enqueue_style( 
            'css-platform-sinapsis',
            plugins_url( '/public/css/platform.css', __FILE__ ),
            array(),
            rand(0, 99)
            );

        wp_enqueue_style( 
            'css-courses-sinapsis',
            plugins_url( '/public/css/courses.css', __FILE__ ),
            array(),
            rand(0, 99)
            );
        wp_enqueue_style( 
            'css-course-sinapsis',
            plugins_url( '/public/css/course.css', __FILE__ ),
            array(),
            rand(0, 99)
            );


        wp_localize_script(
            'courses-platform',
            'wp_ajax_sinapsis_platform',
            array(
                'ajax_url_foro_response' => plugins_url( '/public/foro_response.php' , __FILE__ ),
                'ajax_url_foro_question' => plugins_url( '/public/foro_question.php' , __FILE__ )
            )
        );

    }


    function cargar_plantilla_personalizada($template) {
        // Verifica si es una solicitud de página y si es la página específica donde deseas usar la plantilla
        if (is_page('cursos-sinapsis')) {
            $plugin_template = dirname(__FILE__) .'\..\..\themes\mi_template\index.php';
            return $plugin_template;
        }
        return $template;
    }
    add_filter('template_include', 'cargar_plantilla_personalizada');



    function shortcode_coursePlatform($atts){

        $id_curso = $_GET["curso"];

        $smarty = new Smarty;

        $smarty->setTemplateDir(dirname(__FILE__) . '/public/partials/');
        $smarty->setCompileDir(dirname(__FILE__) .'/public/compile/');

        $token = get_option('tokensinapsisplatform');
        $id    = get_option('idusersinapsisplatform');
        $nombre_usuario = get_option('namesinapsisplatform');

        $logo =  plugins_url( '/public/assets/img/SC.png', __FILE__ );

        $curso = RfCoreCurl::curl('/api/course/get_course_by_id/'.$id_curso , 'GET' , $token, null);
        $sidebar_menu = RfCoreCurl::curl('/api/course/get_sidebar_by_id_course/'.$id_curso , 'GET' , $token, null);

        $smarty->assign('curso', $curso);
        $smarty->assign('sidebar_menu', $sidebar_menu);
        $smarty->assign('logo', $logo);
        $smarty->assign('id_usuario', $id);
        $smarty->assign('nombre_usuario', $nombre_usuario);

        return $smarty->fetch('sidebar.tpl');

        //include 'public/partials/sidebar.php';
    }
    add_shortcode("shortcodecourseplatform" , "shortcode_coursePlatform");


    function shortcode_getcourses($atts){

        $smarty = new Smarty;

        $smarty->setTemplateDir(dirname(__FILE__) . '/public/partials/');
        $smarty->setCompileDir(dirname(__FILE__) .'/public/compile/');

        $cursos = RfCoreCurl::curl('/api/course/' , 'GET' , null , null);

        $smarty->assign('cursos', $cursos);

        return $smarty->fetch('courses.tpl');

    }

    add_shortcode("shortcodegetcourses" , "shortcode_getcourses");


    function shortcode_getdatacourse($atts){

        $id_curso = $_GET["curso"];


        $atts = shortcode_atts(array(
            'output' => 'titulo', // Color predeterminado
        ), $atts, 'shortcodegetdatacourse');


        $smarty = new Smarty;

        $smarty->setTemplateDir(dirname(__FILE__) . '/public/partials/course/');
        $smarty->setCompileDir(dirname(__FILE__) .'/public/compile/');

        $curso = RfCoreCurl::curl('/api/course/get_course_by_id_free_data/'.$id_curso , 'GET' , null , null);

        $smarty->assign('curso', $curso);


        if($atts["output"] == "descripcion"){
            $output = $smarty->fetch('descripcion.tpl');
        }
        if($atts["output"] == "titulo"){
            $output = $smarty->fetch('titulo.tpl');
        }
        if($atts["output"] == "objetivo"){
            $output = $smarty->fetch('objetivo.tpl');
        } 
        if($atts["output"] == "segmento"){
            $output = $smarty->fetch('segmento.tpl');
        }
        if($atts["output"] == "video"){
            $output = $smarty->fetch('video.tpl');
        }
        if($atts["output"] == "instructor"){
            $output = $smarty->fetch('instructor.tpl');
        } 

        return $output;

    }

    add_shortcode("shortcodegetdatacourse" , "shortcode_getdatacourse");



    function shortcode_contentcourse($atts){
        $id_curso = $_GET["curso"];

        $smarty = new Smarty;

        $smarty->setTemplateDir(dirname(__FILE__) . '/public/partials/');
        $smarty->setCompileDir(dirname(__FILE__) .'/public/compile/');

        $content = RfCoreCurl::curl('/api/course/get_content_course/'.$id_curso , 'GET' , null , null);
        $curso = RfCoreCurl::curl('/api/course/get_course_by_id_free_data/'.$id_curso , 'GET' , null , null);

        $smarty->assign('content', $content);
        $smarty->assign('curso', $curso);

        return $smarty->fetch('content_course.tpl');
    }

    add_shortcode("shortcodecontentcourse" , "shortcode_contentcourse");


    function shortcode_plataforma_view($atts){
        $id_curso = $_GET["curso"];

        $smarty = new Smarty;

        $smarty->setTemplateDir(dirname(__FILE__) . '/public/partials/course/');
        $smarty->setCompileDir(dirname(__FILE__) .'/public/compile/');

        $content = RfCoreCurl::curl('/api/course/get_content_course/'.$id_curso , 'GET' , null , null);
        $curso = RfCoreCurl::curl('/api/course/get_course_by_id_free_data/'.$id_curso , 'GET' , null , null);

        $smarty->assign('content', $content);
        $smarty->assign('curso', $curso);

        return $smarty->fetch('plataforma.tpl');
    }

    add_shortcode("shortcodeplataformaview" , "shortcode_plataforma_view");



?>