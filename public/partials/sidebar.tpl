
<div class="row header-bar sticky-top" style="background: white;">
  <div class="col-4">
    <img src="{$logo}" alt="" >
  </div>
  <div  class="col-4 mt-3">
    <a id="link_previus" onclick="link_previus()" class="link-leccion-direction" >Lección anterior</a>
  </div>
  <div  class="col-4">

    <div class="row">
      <div class="col-6 mt-3">
        <a id="link_next" onclick="link_next()" class="link-leccion-direction" >Lección siguiente</a>
      </div> 
      <div class="col-6 text-end" id="startValuesAndTargetExample">
          <h1 style="margin: 0px;" class="values"></h1>
      </div>
    </div>

  </div>
</div>


<div class="sidebar" id="sidebar">

  <div class="row">
    <div class="col-12 box-title-course">
      <div class="icon-course-title"><i class="fa-solid fa-file"></i></div>
      <div><h3 onclick="showClass(-1 , 'show_main')" class="title-course">{$curso->nombre}</h3></div>
    </div>
  </div>


  <div class="row sidebar-row">
  {$i = 0}
  {$count_item = 0}
  {foreach $sidebar_menu as $button}

    {if $button->tipo == 'modulo'}
      <div class="col-12 button-sideba-modulo">
        <p class="text-sidebar-modulo">{$button->nombre}</p>
      </div>
    {else}

      {$count_item = $count_item + 1}

      {if $button->tipo == 'video'}
      <div class="col-12 button-sidebar">
        {if $button->done == true}
          <div id="box_icon_check_{$i}" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
        {else}
          <div id="box_icon_not_check_{$i}" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        {/if}
        <div><p id="link_video_{$i}" class="text-sidebar" onclick="showClass({$i} , 'show_video_{$i++}')" >{$button->nombre}</p></div>
      </div>
      {/if}
      {if $button->tipo == 'apunte'}
      <div class="col-12 button-sidebar">
        {if $button->done == true}
          <div id="box_icon_check_{$i}" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
        {else}
          <div id="box_icon_not_check_{$i}" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        {/if}
        <div><p id="link_apunte_{$i}" class="text-sidebar" onclick="showClass({$i} , 'show_apunte_{$i++}')" >{$button->nombre}</p></div>
      </div>
      {/if}
      {if $button->tipo == 'texto'}
      <div class="col-12 button-sidebar">
        {if $button->done == true}
          <div id="box_icon_check_{$i}" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
        {else}
          <div id="box_icon_not_check_{$i}" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        {/if}
        <div><p id="link_texto_{$i}" class="text-sidebar" onclick="showClass({$i} , 'show_texto_{$i++}')">{$button->nombre}</p></div>
      </div>
      {/if}
      {if $button->tipo == 'cuestionario'}
      <div class="col-12 button-sidebar">
        {if $button->done == true}
          <div id="box_icon_check_{$i}" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
        {else}
          <div id="box_icon_not_check_{$i}" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        {/if}
        <div><p id="link_cuestionario_{$i}" class="text-sidebar" onclick="showClass({$i} , 'show_cuestionario_{$i++}')">{$button->nombre}</p></div>
      </div>
      {/if}
      {if $button->tipo == 'foro'}
      <div class="col-12 button-sidebar">
        
        <div id="box_icon_not_check_{$i}" class="icon-check"><i class="fa-solid fa-comment"></i></div>
       
        <div><p id="link_foro_{$i}" class="text-sidebar" onclick="showClass({$i}, 'show_foro_{$i++}')">{$button->nombre}</p></div>
      </div>
      {/if}
    {/if}
    
  {/foreach}
  </div>

</div>



<div class="contenido" id="contenido">

  <button class="openbtn" id="openbtn">☰ <i class="bi bi-check-circle-fill"></i></button>
  
 

  <div class="row justify-content-center">
    <div class="col-12"></div>
    <div class="col-8">
      <div style="display: block;" id="show_main">

      <div><h2>{$curso->nombre}</h2></div>

      <div class="row">
        <div class="col-12">
          <div class="row mb-4">
            <div class="col-6">
              <a class="button-programa-platform" target="_blank" href="{$curso->link_programa}" type="button">Programa del curso</a>
            </div>
            <div class="col-6 text-end">
              <a class="button-programa-platform" target="_blank" type="button">Foro del curso</a>
            </div>
          </div>
         
        </div>
        <div class="col-12">
            <p class="content-description">{$curso->descripcion}</p>
        </div>
        <div class="col-12">
          <div class="ratio ratio-16x9">
            <iframe allowfullscreen src="{$curso->link_video}" title="{$curso->nombre}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      

      </div>
    </div>
    <div class="col-12"></div>
  </div>

  




  
  {$c = 0}
  {foreach $sidebar_menu as $content}
  
    {if $content->tipo == 'video'}

    <div class="row justify-content-center">
    <div class="col-12"></div>
    <div class="col-8">

      <div style="display: none" id="show_video_{$c++}">
    
        <div><h2>{$content->nombre}</h2></div>

        <div><p class="content-description">{$content->descripcion}</p></div>

        <div class="col-12">
          <div class="ratio ratio-16x9">
            <iframe allowfullscreen src="{$content->link_video}" title="{$content->nombre}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        {if $content->done == true }
        {$displaydelete = 'block'}
        {$displayregister = 'none'}
        {else}
        {$displaydelete = 'none'}
        {$displayregister = 'block'}
        {/if}

          <div id="box_delete_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displaydelete}">
            <button id="delete_item_button_{$c}" onclick="progressItemDelete({$c} , {$content->id} , '{$content->tipo}' , {$id_curso})"  type="button">
            <div id="loading_delete_item_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Quitar como realizado
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        

          <div id="box_register_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displayregister}">
            <button id="next_item_button_{$c}" onclick="progressItemRegister({$c} , {$content->id} , '{$content->tipo}' , {$id_curso})"  type="button">
            <div id="loading_next_item_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Marcar como realizado (Siguiente)
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

       
        
      </div>
        
    </div>
    <div class="class-12"></div>
    </div>


    {/if}

    {if $content->tipo == 'apunte'}

    <div class="row justify-content-center">
    <div class="col-12"></div>
    <div class="col-8">
      <div style="display: none" id="show_apunte_{$c++}">
        <div><h2>{$content->nombre}</h2></div>

        <div><p class="content-description">{$content->descripcion}</p></div>

        
        <a class="btn btn-primary button-big-screen mb-2 mt-3" target="_blank" href="{$content->link_apunte}" role="button">Pantalla completa</a>

        <div class="col-12">
            <div class="ratio ratio-16x9">
              <iframe allowfullscreen src="{$content->link_apunte}" title="{$content->nombre}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        {if $content->done == true }
        {$displaydelete = 'block'}
        {$displayregister = 'none'}
        {else}
        {$displaydelete = 'none'}
        {$displayregister = 'block'}
        {/if}

          <div id="box_delete_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displaydelete}">
            <button id="delete_item_button_{$c}" onclick="progressItemDelete({$c} , {$content->id} , '{$content->tipo}' , {$id_curso})"  type="button">
            <div id="loading_delete_item_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Quitar como realizado
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        

          <div id="box_register_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displayregister}">
            <button id="next_item_button_{$c}" onclick="progressItemRegister({$c} , {$content->id} , '{$content->tipo}' , {$id_curso})"  type="button">
            <div id="loading_next_item_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Marcar como realizado (Siguiente)
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

      </div>

    </div>
    <div class="class-12"></div>
    </div>



    {/if}

    {if $content->tipo == 'texto'}

      <div class="row justify-content-center">
      <div class="col-12"></div>
      <div class="col-8">

      <div style="display: none" id="show_texto_{$c++}">
        <div><h2>{$content->nombre}</h2></div>

        <div class="content-bibliografia">
          {$content->texto}
        </div>

        {if $content->done == true }
        {$displaydelete = 'block'}
        {$displayregister = 'none'}
        {else}
        {$displaydelete = 'none'}
        {$displayregister = 'block'}
        {/if}

          <div id="box_delete_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displaydelete}">
            <button id="delete_item_button_{$c}" onclick="progressItemDelete({$c} , {$content->id} , '{$content->tipo}' , {$id_curso})"  type="button">
            <div id="loading_delete_item_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Quitar como realizado
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        

          <div id="box_register_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displayregister}">
            <button id="next_item_button_{$c}" onclick="progressItemRegister({$c} , {$content->id} , '{$content->tipo}' , {$id_curso})"  type="button">
            <div id="loading_next_item_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Marcar como realizado (Siguiente)
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

      </div>

      </div>
      <div class="class-12"></div>
      </div>
      
    {/if}


    {if $content->tipo == 'cuestionario'}

    <div class="row justify-content-center">
      <div class="col-12"></div>
      <div class="col-8">

      <div style="display: none" id="show_cuestionario_{$c++}">

        <div><h2>{$content->nombre}</h2></div>

        <div class="row">
          <p>{$content->descripcion}</p>
        </div>

        <div class="row box-cuestionario-platform">
          <div class="col-12 head-box-cuestionario-platform">
              <h3>Contenido de la lección</h3>
          </div>
          <div class="col-12 mt-4 body-box-cuestionario-platform">
            <div class="row">
              <div class="col-10">
                <p>Iniciar {$content->nombre}</p>
              </div>
              <div class="col-2 text-end">
                <button onclick="showClassQuestions('show_questions_{$c}' , {$c} , {$content->id} , {$content->tiempo})" type="button" style="position: relative; top: -7px;">Iniciar</button>
              </div>
            </div>
          </div>

          <div style="display: none;" id="show_questions_{$c}" class="col-12">
            <div class="row mt-5">

              {$i = 1}
              {foreach $content->pregunta as $question}
              <div class="col-12 mb-5 pregunta_{$c}">
                
                <strong class="mt-5"><p>Pregunta {$i}:</p></strong>
                <p>{$question->pregunta}</p>

                <strong class="mt-2"><p>Alternativas</p></strong>
                
                  {foreach $question->alternativas as $alternative}

                    <div class="form-check mt-4">
                      <input class="form-check-input" type="radio" name="response_cues_{$question->id}" value="{$alternative->id}" id="response_cues_{$question->id}">
                      <label id="label_alternative_{$alternative->id}" class="form-check-label">
                        {$alternative->alternativa}
                      </label>
                    </div>

                  {/foreach}

                  <div id="justificacion-block_{$question->id}" class="col-12 mt-5" style="display: none;">
                    <h4>Justificación</h4>
                    <div class="box-justified-question shadow">
                     <div id="box-justified-question_{$question->id}"></div>
                    </div>
                  </div>
                

                <p style="display: none;">{$i++}</p> 
              </div>
              <hr>
              {/foreach}


              <div class="box-button_send_response_cues col-12">
                <button id="button_send_response_cues_{$c}" onclick="response_form_test({$c} , {$content->id});" class="button_send_response_cues" type="button">
                  <div id="loading_response_cuestionary_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  Enviar
                </button>
              </div>

            </div>
          </div>

        </div>
        
      </div>

      </div>
      <div class="class-12"></div>
    </div>

    {/if}

    {if $content->tipo == 'foro'}

    <div class="row justify-content-center">
      <div class="col-12"></div>
      <div class="col-8">

      <div style="display: none" id="show_foro_{$c++}">
        <div><h2>{$content->nombre}</h2></div>

        <div class="col-12 mb-5">
          <p>{$content->descripcion}</p>
        </div>

        <div class="col-12 head-box-cuestionario-platform">
          <h3>Debate</h3>
        </div>

        <div class="col-12 mt-5">
          <p>Acá puedes crear una nueva pregunta para el {$content->nombre}</p>
          <div class="input-group">
            <textarea id="new_question_foro_{$c}" class="form-control"></textarea>
            <button id="buttonSaveQuestion" onclick="saveQuestionForo({$content->id} , {$id_usuario} , '{$nombre_usuario}' , {$c})" rows="3" type="button">
          
            <div id="loading_question_foro_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            
            Enviar
            </button>
          </div>
        </div>


        <div id="new_question_{$c}"></div>


        
          {foreach $content->preguntas_foros as $pregunta}
          <div class="box-question-response col-12 border">
              <div class="col-12 mb-4">
                <p style="margin: 0px;"><i style="margin-right: 7px;" class="fa-solid fa-user"></i> {$pregunta->nombre_usuario}</p>
                <p class="h5">{$pregunta->entrada}</p>
              </div>

              {foreach $pregunta->respuestas_foros as $respuesta}
                <div class="col-12">
                  <p style="margin-left: 30px; font-size: 12px; margin-bottom: 0px;"><i style="margin-right: 7px;" class="fa-solid fa-user"></i> {$respuesta->nombre_usuario}</p>
                  <p style="margin-left: 30px;">- {$respuesta->entrada}</p>
                </div>
              {/foreach}

              <div id="new_response_foro_{$pregunta->id}"></div>
             
              <div class="col-12">
                <div class="input-group">
                    <textarea id="response_question_foro_{$pregunta->id}" rows="2" class="form-control"></textarea>
                    <button id="buttonSaveResponse" onclick="saveResponseQuestionForo({$id_usuario} , {$pregunta->id} , '{$nombre_usuario}' , {$c})" type="button">

                    <div id="loading_response_foro_{$pregunta->id}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>

                      Enviar
                    </button>
                </div>
              </div>
            </div>
          {/foreach}
      </div>

      </div>
      <div class="class-12"></div>
    </div>


    {/if}

  {/foreach}

  

  
</div>