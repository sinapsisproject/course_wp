<div class="row justify-content-center mt-5">
    <div class="blue-box-content-course col-10">
        <h3>Contenido del curso</h3>
        <p>Revisa lo que aprenderas durante el curso y las distintas unidades de contenidos:</p>
        <a href="{$curso->link_programa}" style="border-width: 0px;" target="_blank" class="button-download-content-complete mt-3" type="button">Descarga el contenido completo <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></a>
    </div>

    <div class="content-course-data col-9 mb-3 pb-3 shadow">
        {$c=0}
        {foreach $content as $data}
        <p style="display : none;">{$c++}</p>
        <div class="content-course-data-item shadow">
                <div class="accordion " id="accordion_{$c}">
                
                        <div class="col-12 ">
                            <div class="row pb-2">

                                <div class="accordion-header col-10">
                                    <p class="text-title-header-accordeon">{$data->nombre}</p>
                                </div>
                                <div class="col-2 text-center">
                                    <i data-bs-toggle="collapse" data-bs-target="#collapseOne_{$c}" aria-expanded="true" aria-controls="collapseOne" class="fa-solid fa-plus button-show-accordeon-course"></i>
                                </div>

                            </div>
                        </div>
                    
                        
                        <div id="collapseOne_{$c}" class="accordion-collapse collapse col-12" data-bs-parent="#accordion_{$c}">
                            <div class="accordion-body">
                                {foreach $data->contenido as $contenido}
                                <p class="text-accordeon-body"><i style="margin-right: 10px; color: #445AFF;" class="fa-solid fa-circle-arrow-right"></i> {$contenido->nombre}</p>
                                {/foreach}
                            </div>
                        </div>
                       
                </div>
            </div>
        {/foreach}
        
    </div>
</div>



