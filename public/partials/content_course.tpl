<div class="m-2">

    <div class="row justify-content-center mt-5">

        <div class="blue-box-content-course col-12 col-md-9">
            <h3>Contenido del curso</h3>
            <p>Revisa lo que aprenderas durante el curso y las distintas unidades de contenidos:</p>
            <!-- <a href="{$curso->link_programa}" style="border-width: 0px;" target="_blank" class="button-download-content-complete mt-3" type="button">Descarga el contenido completo <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></a> -->
        </div>

        
        <div class="content-course-data col-11 col-md-8 mb-3 pb-3 shadow">
            {$c=0}
            {foreach $content->modulos as $data}
            <p style="display : none;">{$c++}</p>
            <div class="content-course-data-item shadow">
                    <div class="accordion " id="accordion_{$c}">
                    
                            <div class="col-12">
                                <div class="row">

                                    <div class="accordion-header col-9 col-md-10">
                                        <p class="text-title-header-accordeon">{$data->nombre}</p>
                                    </div>
                                    <div class="col-3 col-md-2 text-center align-self-center">
                                        <i data-bs-toggle="collapse" data-bs-target="#collapseOne_{$c}" aria-expanded="true" aria-controls="collapseOne" class="fa-solid fa-plus button-show-accordeon-course"></i>
                                    </div>

                                </div>
                            </div>
                        
                            
                            <div id="collapseOne_{$c}" class="accordion-collapse collapse col-12" data-bs-parent="#accordion_{$c}">
                                <div class="accordion-body">
                                    {foreach $data->objetivos as $objetivo}
                                    <p class="text-accordeon-body"><i style="margin-right: 10px; color: #445AFF;" class="fa-solid fa-circle-arrow-right"></i> {$objetivo->texto}</p>
                                    {/foreach}
                                </div>
                            </div>
                        
                    </div>
                </div>
            {/foreach}
            
        </div>
        
        {if $content->tipo == 'encuesta'}

        <div class="row justify-content-center">
          <div class="col-12"></div>
          <div class="col-12 col-md-8">
        
            <!-- Botón para ver resultados, inicialmente oculto -->
            <div style="display: none;" id="btn_ver_resultados_container_{$content->id}">
              <button id="btn_ver_resultados_{$content->id}" class="btn btn-info mt-3">
                Ver Resultados
              </button>
            </div>
        
            <!-- Formulario de encuesta (oculto inicialmente) -->
            <div style="display: none;" id="show_encuesta_{$content->id}">
              <div><h2>{$content->nombre}</h2></div>
              <div><p class="content-description">{$content->texto}</p></div>
        
              <!-- Preguntas de la encuesta -->
              {$i = 1}
              {foreach $content->encuesta_pregunta as $question}
                <div class="col-12 mt-5 mb-5 pregunta_formulario{$c}">
                  <p>{$question->pregunta}</p>
                  {foreach $question->encuesta_alternativas as $alternative}
                    <div class="form-check mt-4 box_response_cues_{$question->id}">
                      <input class="form-check-input" type="radio" 
                             name="encuesta_respuesta_{$question->id}" 
                             value="{$alternative->id}" 
                             id="encuesta_respuesta_{$question->id}">
                      <label class="form-check-label">
                        {$alternative->alternativa}
                      </label>
                    </div>
                  {/foreach}
                </div>
              {/foreach}
        
              <!-- Botón para enviar las respuestas -->
              <div class="col-12">
                <button style="display: inline-flex;" 
                        onclick="procesar_respuestas_encuesta({$c}, {$content->id}, {$id_curso}, {$progress->total_items})" 
                        type="button">
                  <div id="loading_encuesta_button_{$content->id}" 
                       style="margin-top: 5px; margin-right: 10px; width: 1rem; height: 1rem; display: none;" 
                       class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  Enviar
                </button>
              </div>
            </div>
        
          </div>
        </div>
        
        {/if}

    </div>

</div>




