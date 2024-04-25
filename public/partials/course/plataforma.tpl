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

    {if $perfil_user == false}
    <div class="row justify-content-center box-button-register-pay">
        <div class="col-6 text-center">
            <p>Este contenido está reservado para los alumnos inscritos al curso {$perfil_user}</p>
            <button onclick="create_transaction({$curso->id} , 'register')" type="button">
                <div style="width: 1rem; height: 1rem; margin-right: 6px; display: none;" class="spinner-border loading_create_transaction_user_1" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                Me quiero inscribir <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
            <button style="margin-left: 30px; background: white; color: #445AFF;" class="ml-3" onclick="create_transaction({$curso->id}, 'login')" type="button">
                <div style="width: 1rem; height: 1rem; margin-right: 6px; display: none;" class="spinner-border loading_create_transaction_user_2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                Iniciar sesión <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
    {/if}

    {if $perfil_user == false}
    <div class="box-course-for-user-register row justify-content-center" style="filter: blur(5px); pointer-events: none;">
    {else}
    <div class="box-course-for-user-register row justify-content-center">
    {/if}
        <div class="col-12 text-center mb-5">
            {foreach $content as $data}
                <a style="margin: 30px"  href="/cursos-sinapsis/?curso={$curso->id}">{$data->nombre}</a>
            {/foreach}
        </div>

        <div class="content-course-data-user-register col-9 mb-3 pb-3 shadow">

            <div class="col-12 text-center mt-4">
                <a href="/cursos-sinapsis/?curso={$curso->id}"><button type="button">Materiales</button></a>
                <a href="/cursos-sinapsis/?curso={$curso->id}"><button type="button">Evaluación</button></a>
            </div>


            {$c = 0}
            {foreach $content[0]->contenido as $data}
            
            <p style="display: none;">{$c++}</p>
                <div class="content-course-data-item shadow">
                    
                    <div class="accordion " id="accordion_{$c}">
                    
                            <div class="col-12 ">
                                <div class="row pb-2">

                                    <div class="accordion-header col-10">
                                        <a href="/cursos-sinapsis/?curso={$curso->id}"><p class="text-title-header-accordeon-user-register">{$data->nombre}</p></a>
                                    </div>
                                    <div class="col-2 text-center">
                                        <a href="/cursos-sinapsis/?curso={$curso->id}"><i class="fa-solid fa-file button-show-accordeon-course-user-register"></i></a>
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
                
            {/foreach}
            
        </div>

    </div>

</div>