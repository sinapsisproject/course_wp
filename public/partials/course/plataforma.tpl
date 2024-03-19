<div class="row justify-content-center">

    <div class="link_descarga_programa-box col-8 shadow mt-4 mb-5">
        <div class="row">
            <div class="col-10">
                <a href="{$curso->link_programa}" target="_blank"><span style="margin-left: 10px; color: black;">Descarga el programa completo del curso</span></a>
            </div>
            <div class="col-2 text-end">
                <i class="fa-solid fa-file-arrow-down"></i>
            </div>
        </div>
    </div>

    <div class="row justify-content-center box-button-register-pay">
        <div class="col-6 text-center">
            <p>Este contenido está reservado para los alumnos registrados</p>
            <button type="button">Comprar curso <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button>
            <button type="button">Registrate <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>

    <div class="box-course-for-user-register row justify-content-center">
        <div class="col-12 text-center mb-5">
            {foreach $content as $data}
                <a style="margin: 30px" href="">{$data->nombre}</a>
            {/foreach}
        </div>

        <div class="content-course-data-user-register col-9 mb-3 pb-3 shadow">

            <div class="col-12 text-center mt-4">
                <button type="button">Materiales</button>
                <button type="button">Evaluación</button>
            </div>


            {$c = 0}
            {foreach $content[0]->contenido as $data}
            
            <p style="display: none;">{$c++}</p>
                <div class="content-course-data-item shadow">
                    
                    <div class="accordion " id="accordion_{$c}">
                    
                            <div class="col-12 ">
                                <div class="row pb-2">

                                    <div class="accordion-header col-10">
                                        <p class="text-title-header-accordeon-user-register">{$data->nombre}</p>
                                    </div>
                                    <div class="col-2 text-center">
                                        <i class="fa-solid fa-file button-show-accordeon-course-user-register"></i>
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
                
            {/foreach}
            
        </div>

    </div>

</div>