
{if $curso->estado == 'activo'}

{if $validate_user == true}
<div class="row header-bar sticky-top" style="background: white;">


  <div class="col-2 border-end d-none d-md-block">
    <a href="https://sinapsisclinica.com/mi-perfil/">
      <img src="{$logo}" alt="Logo del sitio">
    </a>
  </div>


  <div class="col-12 col-md-4 border-end">

    <div class="row">

      <div class="col-1" id="loading_progress_bar" style="display: none;">
        <div style="width: 1rem; height: 1rem; margin-right: 6px; position: relative; top: 14px; color: #445AFF;" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="col-12 col-md-11">
        <div id="progress_box" class="row">

          <div id="btnOpenMobile" class="col-3 d-blok d-md-none text-start" style="padding: 15px;">
            <i class="fa-solid fa-bars" style="font-size: 25px;"></i>
          </div>
          <div class="col-6 col-md-12 text-progress-bar" style="display: inline-flex;">
            <p class="d-none d-md-block" style="position: relative; top: 11px; color: #445AFF; font-weight: bold;">{$progress->porcentaje}% COMPLETADO {$progress->items}/{$progress->total_items} pasos</p>
            <p class="d-block d-md-none" style="position: relative; top: 11px; color: #445AFF; font-weight: bold; font-size: 12px;">{$progress->porcentaje}% COMPLETADO</p>
          </div>
          <div class="col-3 d-block d-md-none text-end" style="padding: 15px;">
            <i class="fa-solid fa-circle-user" style="font-size: 25px;"></i>
          </div>
          
          <div class="col-12">
            <div style="height: 8px;" class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style="width: {$progress->porcentaje}%"></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  
  </div>


  <div  class="col-6 col-md-3 pt-3 border-end">
    <p id="button_previus" onclick="link_previus()" class="link-leccion-direction" ><i style="margin-right: 10px;" class="fa-solid fa-chevron-left"></i> Lección anterior</p>
  </div>

  <div  class="col-6 col-md-3 border-end">

    <div class="row">
      <div class="col-12 col-md-6 mt-3">
        <p id="button_next" onclick="link_next()" class="link-leccion-direction" >Lección siguiente <i style="margin-left: 10px;" class="fa-solid fa-chevron-right"></i></p>
      </div> 
      <div class="col-12 col-md-6 text-end d-none d-md-block">
        <i class="user_profile fa-solid fa-circle-user" data-bs-toggle="modal" data-bs-target="#modalProfile"></i>
      </div>
    </div>

  </div>

</div>

<div class="modal fade" tabindex="-1" id="modalProfile">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        

          <div class="col-6">
            <div class="row">
              <div class="col-12">
                <h5 class="modal-title">{$nombre_usuario}</h5>
              </div>
              <div class="col-12">
                <p>{$email_usuario}</p>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="row">
                <div class="col-12 text-end">
                  <a id="logout_button">
                  <div id="loading_logout" style="width: 1rem; height: 1rem; margin-right: 6px; display: none;" class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                  </div>
                  <!-- <i class="fa-solid fa-power-off"></i> Cerrar sesión -->
                  </a>
                </div>
            </div>
          </div>

        
        
      </div>
      <div class="modal-body">
        
        <div id="loading_info_profile" class="row justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="col-12 text-center">
              Cargando...
            </div>
        </div>
        <div id="show_data_profile" class="row">

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>


<div id="openbtn" class="box-openbtn d-none d-md-block"><i class="openbtn fa-solid fa-circle-chevron-left"></i></div>

<div class="sidebar" id="sidebar">


    <div class="row sidebar-title">
      <div class="col-12 box-title-course align-self-center">
        <h3 onclick="showClass(-1 , 'show_main')" class="title-course">{$curso->nombre}</h3>
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
              {if $button->clase == 'recuperativa'}

              <div class="col-12 button-sidebar">
                {if $button->done == true}
                  <div id="box_icon_check_{$i}" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
                {else}
                  <div id="box_icon_not_check_{$i}" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
                {/if}
                <div><p id="link_cuestionario_{$i}" class="text-sidebar" onclick="showClass('recuperativa' , 'show_cuestionario_recuperativa')">{$button->nombre}</p></div>
              </div>


              {else}
              <div class="col-12 button-sidebar">
                {if $button->done == true}
                  <div id="box_icon_check_{$i}" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
                {else}
                  <div id="box_icon_not_check_{$i}" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
                {/if}
                <div><p id="link_cuestionario_{$i}" class="text-sidebar" onclick="showClass({$i} , 'show_cuestionario_{$i++}')">{$button->nombre}</p></div>
              </div>
              {/if}
            
            {/if}
            {if $button->tipo == 'foro'}
            <div class="col-12 button-sidebar">
              
              <div id="box_icon_not_check_{$i}" class="icon-check"><i class="fa-solid fa-comment"></i></div>
            
              <div><p id="link_foro_{$i}" class="text-sidebar" onclick="showClass({$i}, 'show_foro_{$i++}')">{$button->nombre}</p></div>
            </div>
            {/if}

            {if $button->tipo == 'formulario'}
            <div class="col-12 button-sidebar">
              {if $button->done == true}
                <div id="box_icon_check_{$i}" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
              {else}
                <div id="box_icon_not_check_{$i}" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
              {/if}
              <div><p id="link_formulario_{$i}" class="text-sidebar" onclick="showClass({$i} , 'show_formulario_{$i++}')" >{$button->nombre}</p></div>
            </div>
            {/if}

            {if $button->tipo == 'encuesta'}
            <div class="col-12 button-sidebar">
              
              <div id="box_icon_not_check_{$i}" class="icon-check"><i class="fa-solid fa-clipboard-list"></i></div>
            
              <div><p id="link_encuesta_{$i}" class="text-sidebar" onclick="showClass({$i}, 'show_encuesta_{$i++}')">{$button->nombre}</p></div>
            </div>
            {/if}


          {/if}
          
        {/foreach} 
   </div>
</div>

<div class="contenido" id="contenido">

  <div class="row justify-content-center">
    <div class="col-12"></div>
    <div class="col-12 col-md-8">
      <div style="display: block;" id="show_main">

      <div><h2>{$curso->nombre}</h2></div>

      <div class="row">
        <div class="col-12">
          <!-- <div class="row mb-4">
            <div class="col-6">
              <a class="button-programa-platform" target="_blank" href="{$curso->link_programa}" type="button">Programa del curso</a>
            </div>
            <div class="col-6 text-end">
              <a class="button-programa-platform" target="_blank" type="button">Foro del curso</a>
            </div>
          </div> -->
         
        </div>
        <div class="col-12">
            <p class="content-description">{$curso->descripcion}</p>
        </div>
        <div class="col-12">
          {$curso->link_video}
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
    <div class="col-12 col-md-8">

      <div style="display: none" id="show_video_{$c++}">
    
        <div><h2>{$content->nombre}</h2></div>

        <div><p class="content-description">{$content->descripcion}</p></div>

        <div class="breadcrumbs">
          <div class="row">
            <div class="col-8 col-md-10 align-self-center">
              <p>{$curso->nombre} > {$content->nombre}</p>
            </div>
            <div class="col-4 col-md-2 align-self-center" id="progress_breadcrumbs_{$c}">
                {if $content->done == true}
                  <div class="etiqueta_estado_completado text-center"><p>COMPLETADO</p></div>
                {else}
                <div class="etiqueta_estado_progreso text-center"><p>EN PROGRESO</p></div>
                {/if}
            </div>
          </div>
        </div>

        <div class="col-12">
          {$content->link_video}
        </div>

        {if $content->done == true }
        {$displaydelete = 'block'}
        {$displayregister = 'none'}
        {else}
        {$displaydelete = 'none'}
        {$displayregister = 'block'}
        {/if}

          <div id="box_delete_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displaydelete}">
            <button style="height: 50px;" id="delete_item_button_{$c}" onclick="progressItemDelete({$c} , {$content->id} , '{$content->tipo}' , {$id_curso}, {$progress->total_items})"  type="button">
            <div id="loading_delete_item_{$c}" style="margin-right: 10px; width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <i style="margin-right: 10px;" class="fa-regular fa-circle"></i>
            Lección pendiente
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        

          <div id="box_register_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displayregister}">
            <button style="height: 50px;" id="next_item_button_{$c}" onclick="progressItemRegister({$c} , {$content->id} , '{$content->tipo}' , {$id_curso}, {$progress->total_items})"  type="button">
            <div id="loading_next_item_{$c}" style="margin-right: 10px; width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <i style="margin-right: 10px; color: white;" class="fa-regular fa-circle-check"></i>
            Lección realizada
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
    <div class="col-12 col-md-8">
      <div style="display: none" id="show_apunte_{$c++}">
        <div><h2>{$content->nombre}</h2></div>

        <div><p class="content-description">{$content->descripcion}</p></div>

        <div class="breadcrumbs">
          <div class="row">
            <div class="col-8 col-md-10 align-self-center">
              <p>{$curso->nombre} > {$content->nombre}</p>
            </div>
            <div class="col-4 col-md-2 align-self-center" id="progress_breadcrumbs_{$c}">
                {if $content->done == true}
                  <div class="etiqueta_estado_completado text-center"><p>COMPLETADO</p></div>
                {else}
                <div class="etiqueta_estado_progreso text-center"><p>EN PROGRESO</p></div>
                {/if}
            </div>
          </div>
        </div>

        <a class="button-big-screen mb-2 mt-3" target="_blank" type="button" href="{$content->link_apunte}" role="button">Ver en pantalla completa</a>

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
            <button style="height: 50px;" id="delete_item_button_{$c}" onclick="progressItemDelete({$c} , {$content->id} , '{$content->tipo}' , {$id_curso}, {$progress->total_items})"  type="button">
            <div id="loading_delete_item_{$c}" style="margin-right: 10px; width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <i style="margin-right: 10px;" class="fa-regular fa-circle"></i>
            Lección pendiente
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        

          <div id="box_register_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displayregister}">
            <button style="height: 50px;" id="next_item_button_{$c}" onclick="progressItemRegister({$c} , {$content->id} , '{$content->tipo}' , {$id_curso}, {$progress->total_items})"  type="button">
            <div id="loading_next_item_{$c}" style="margin-right: 10px; width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <i style="margin-right: 10px; color: white;" class="fa-regular fa-circle-check"></i>
            Lección realizada
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
      <div class="col-12 col-md-8">

      <div style="display: none" id="show_texto_{$c++}">
        <div><h2>{$content->nombre}</h2></div>

        <div class="breadcrumbs">
          <div class="row">
            <div class="col-8 col-md-10 align-self-center">
              <p>{$curso->nombre} > {$content->nombre}</p>
            </div>
            <div class="col-4 col-md-2 align-self-center" id="progress_breadcrumbs_{$c}">
                {if $content->done == true}
                  <div class="etiqueta_estado_completado text-center"><p>COMPLETADO</p></div>
                {else}
                <div class="etiqueta_estado_progreso text-center"><p>EN PROGRESO</p></div>
                {/if}
            </div>
          </div>
        </div>



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
            <button style="height: 50px;" id="delete_item_button_{$c}" onclick="progressItemDelete({$c} , {$content->id} , '{$content->tipo}' , {$id_curso}, {$progress->total_items})"  type="button">
            <div id="loading_delete_item_{$c}" style="margin-right: 10px; width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <i style="margin-right: 10px;" class="fa-regular fa-circle"></i>
            Lección pendiente
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        

          <div id="box_register_select_item_{$c}" class="col-12 mt-4 text-end" style="display : {$displayregister}">
            <button style="height: 50px;" id="next_item_button_{$c}" onclick="progressItemRegister({$c} , {$content->id} , '{$content->tipo}' , {$id_curso}, {$progress->total_items})"  type="button">
            <div id="loading_next_item_{$c}" style="margin-right: 10px; width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <i style="margin-right: 10px; color: white;" class="fa-regular fa-circle-check"></i>
            Lección realizada
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
      <div class="col-12 col-md-8">

      {if $content->clase == 'recuperativa'}
        <div style="display: none" id="show_cuestionario_recuperativa">
        {$c = $c +1}
      {else}
        <div style="display: none" id="show_cuestionario_{$c++}">
      {/if}
      
        <div><h2>{$content->nombre}</h2></div>

        <div class="row">
          <p>{$content->descripcion}</p>
        </div>

        <div class="breadcrumbs">
          <div class="row">
            <div class="col-8 col-md-10 align-self-center">
              <p>{$curso->nombre} > {$content->nombre}</p>
            </div>
            <div class="col-4 col-md-2 align-self-center" id="progress_breadcrumbs_{$c}">
                {if $content->done == true}
                  <div class="etiqueta_estado_completado text-center"><p>COMPLETADO</p></div>
                {else}
                <div class="etiqueta_estado_progreso text-center"><p>EN PROGRESO</p></div>
                {/if}
            </div>
          </div>
        </div>

        <div class="box-cuestionario-platform">

          <div class="row" id="row_cuestionario_{$content->id}">
            <!-- <div class="col-12 head-box-cuestionario-platform">
                <h3>Contenido de la lección</h3>
            </div> -->

            {if $content->done == false}
            <div class="col-12 body-box-cuestionario-platform">
              <div class="row">
                <!-- <div class="col-10">
                  <p>Iniciar {$content->nombre}</p>
                </div> -->
                <div class="col-2 text-start">
                  <button id="button_init_question_{$c}" onclick="showClassQuestions('view_questions_{$c}' , {$c} , {$content->id} , {$content->tiempo}, {$id_curso}, '{$content->clase}' , {$progress->total_items})" type="button" style="position: relative; top: -7px;">Comenzar <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
            {else}

            <div class="col-12 mt-4 body-box-cuestionario-platform">
              <div class="row">
                <div class="col-12 text-start">
                  <button id="button_display_content_test_{$content->id}" onclick="showClassResponsesAssessment({$content->id})" type="button" style="position: relative; top: -7px;">
                  <div id="loading_responses_assessment_{$content->id}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  Ver resultados <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/if}


          </div>


          <div style="display: none;" id="view_questions_{$c}" class="col-12">
            <div class="row">
              {$i = 1}
              {foreach $content->pregunta as $question}
              <div class="col-12 mb-5 pregunta_{$c}">

                <div class="mt-2" style="display: inline-flex;">
                {if $content->clase != 'formativo'}
                  <h3>Pregunta {$i}:</h3> <p style="position: relative;top: 14px;left: 12px;font-size: 20px;"> ({$question->puntaje} pts.)</p>
                {else}
                  <h3>Pregunta {$i}</h3>
                {/if}
                </div>

                <p>{$question->pregunta}</p>

                <strong class="mt-2"><p>Alternativas</p></strong>
                
                  {foreach $question->alternativas as $alternative}

                    <div class="form-check mt-4 box_response_cues_{$question->id}" id="label_alternative_{$alternative->id}">
                        <input class="form-check-input" type="radio" name="response_cues_{$question->id}" value="{$alternative->id}" id="response_cues_{$question->id}">
                        <label class="form-check-label">
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
                <button id="button_send_response_cues_{$c}" onclick="response_form_test({$c} , {$content->id} , {$id_curso}, {$progress->total_items});" class="button_send_response_cues" type="button">
                  <div id="loading_response_cuestionary_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  Enviar
                </button>
              </div>

            </div>

          </div>

        </div>

        <div class="col-12" id="assessment_{$content->id}"></div>
        
      </div>

      </div>
      
      <div class="class-12"></div>
    </div>


    <div class="toast-container position-fixed bottom-0 end-0 p-2">
      <div id="liveToast_{$content->id}" class="toast toast-test" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div id="close_toast_{$content->id}" class="toast-header" style="display: none;">
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body text-center">
          <div id="startValuesAndTargetExample">
            <h1 class="values"></h1>
          </div>
        </div>
      </div>
    </div>



    {/if}

    {if $content->tipo == 'foro'}

    <div class="row justify-content-center">
      <div class="col-12"></div>
      <div class="col-12 col-md-8">

      <div style="display: none" id="show_foro_{$c++}">
        <div><h2>{$content->nombre}</h2></div>

        <div class="col-12 mb-5">
          <p>Este foro está restringido a los alumnos del curso: <strong>{$curso->nombre}</strong>.</p>
        </div>

        <div class="col-12 shadow question-default-foro-box">
          <div class="row">
            <div class="col-2">
              <div class="row justify-content-md-center">
                <div class="icono-sinapsis-box">
                  <img src="{$icono}" alt="">
                </div>
              </div>
            </div>
            <div class="col-10">
              {$content->descripcion}
            </div>
          </div>
        </div>




        <div class="col-12 mt-5 box-ql-editor">
          <p>Acá puedes crear una nueva pregunta para el {$content->nombre}</p>
          
          <div id="new_question_foro_{$c}"></div>

          <div class="row">
            <div class="col-12 text-end mt-2">

            <button id="buttonSaveQuestion" onclick="saveQuestionForo({$content->id} , {$id_usuario} , '{$nombre_usuario}' , {$c})" rows="3" type="button">
              <div id="loading_question_foro_{$c}" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              Enviar
            </button>

            </div>
          </div>
        </div>


        <div id="new_question_{$c}"></div>


        
          {foreach $content->preguntas_foros as $pregunta}
          <div class="box-question-response col-12 border">
            <div class="row">
              <div class="col-12 mb-1">

                <div class="row">
                  <div class="col-12 col-sm-3 col-md-2 col-xl-1 text-end">
                    <i style="font-size: 45px; color: #445AFF;" class="fa-solid fa-circle-user"></i>
                  </div>
                  <div class="col-12 col-sm-9 col-md-10 col-xl-11 pt-1">
                    <p style="font-weight: bold; color: #445AFF; font-size: 18px; ">{$pregunta->nombre_usuario}</p>
                    <p style="font-size: 11px; color: #445AFF;"><i style="margin-right: 7px;" class="fa-regular fa-calendar-days"></i> {$pregunta->createdAt|date_format:"%d-%m-%Y"}</p>
                  </div>
                </div>

              </div>

              <div class="col-12 mb-4">
                <p class="h5" style="padding: 10px">{$pregunta->entrada}</p>
              </div>
            </div>

              {foreach $pregunta->respuestas_foros as $respuesta}
                <hr>
                <div class="col-12 mb-4">

                  <div class="row">
                    <div class="col-12 col-sm-3 col-md-2 col-xl-1 text-end">
                      <i style="font-size: 40px; color: #445AFF;" class="fa-solid fa-circle-user"></i>
                    </div>
                    <div class="col-12 col-sm-9 col-md-10 col-xl-11">
                      <p style="font-size: 17px; color: #445AFF; font-weight: bold;">
                        {$respuesta->nombre_usuario} 
                      </p>
                      <p style="font-size: 10px; color: #445AFF;">
                        {$respuesta->createdAt|date_format:"%d-%m-%Y"}
                      </p>
                      <p style="margin-top: 10px;">{$respuesta->entrada}</p>
                    </div>
                  </div>
                  
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


    <!--//////////////////////////////////////// FORMULARIOS ////////////////////////////////////////////////-->

    {if $content->tipo == 'formulario'}

    <div class="row justify-content-center">
    <div class="col-12"></div>
    <div class="col-12 col-md-8">

      <div style="display: none" id="show_formulario_{$c++}">
    
        <div><h2>{$content->nombre}</h2></div>

        <div><p class="content-description">{$content->texto}</p></div>

        <div class="breadcrumbs">
          <div class="row">
            <div class="col-8 col-md-10 align-self-center">
              <p>{$curso->nombre} > {$content->nombre}</p>
            </div>
            <div class="col-4 col-md-2 align-self-center" id="progress_breadcrumbs_{$c}">
                {if $content->done == true}
                  <div class="etiqueta_estado_completado text-center"><p>COMPLETADO</p></div>
                {else}
                <div class="etiqueta_estado_progreso text-center"><p>EN PROGRESO</p></div>
                {/if}
            </div>
          </div>
        </div>

        {if $content->done != true}
        <div class="col-12 mt-2">
          <!-- CONTENIDO -->

            <div class="formulario_textarea_{$content->id}">
              {foreach $content->pregunta_formularios as $pregunta}
                  {if $pregunta->tipo == 'textarea'}
                    <div class="mt-3">
                      <p>{$pregunta->pregunta}</p>
                      <textarea id_pregunta="{$pregunta->id}" id="respuesta_formulario_pregunta_{$pregunta->id}" rows="4" class="form-control"></textarea>
                      <div id="error_textarea_{$pregunta->id}"></div>
                    </div>
                  {/if}
              {/foreach}
            </div>


            <div class="formulario_input_text_{$content->id}">
              {foreach $content->pregunta_formularios as $pregunta}
                {if $pregunta->tipo == 'input'}
                  <div class="mt-3">
                    <p>{$pregunta->pregunta}</p>
                    <input id_pregunta="{$pregunta->id}" id="respuesta_input_text_{$pregunta->id}" type="text" class="form-control">
                    <div id="error_input_{$pregunta->id}"></div>
                  </div>
                {/if}
              {/foreach}
            </div>

          <div class="col-12 text-end mt-4">
            <button style="display: inline-flex;" onclick="procesar_respuestas_formulario({$c} , {$content->id} , {$id_curso} , {$progress->total_items})" type="button">
                <div id="loading_formulario_button_{$content->id}" style="margin-top: 5px; margin-right: 10px;width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                Enviar
            </button>
          </div>

        </div>
        {else}
        <div class="col-12 mt-2">
          <p>Respuestas enviadas.</p>
        </div>
        {/if}
       
        
      </div>
        
    </div>
    <div class="class-12"></div>
    </div>


    {/if}

   <!--//////////////////////////////////////// FORMULARIOS ////////////////////////////////////////////////-->

 <!--//////////////////////////////////////// ENCUESTA////////////////////////////////////////////////-->

    {if $content->tipo == 'encuesta'}

    <div class="row justify-content-center">
      <div class="col-12"></div>
      <div class="col-12 col-md-8">

    <!-- Botón para iniciar la encuesta -->
    <button id="btn_iniciar_encuesta_{$content->id}" class="btn btn-primary">
      Iniciar Encuesta
    </button>

    <!-- Formulario de encuesta (oculto inicialmente) -->
    <div style="display: none" id="formulario_encuesta_{$content->id}">
      <div>
        <h2>{$content->nombre}</h2>
        <p class="content-description">{$content->texto}</p>
      </div>

      {$i = 1}
      {foreach $content->encuesta_pregunta as $question}
        <div class="col-12 mt-5 mb-5 pregunta_formulario{$c}">
          <p>{$question->pregunta}</p>

          {foreach $question->encuesta_alternativas as $alternative}
            <div class="form-check mt-4 box_response_cues_{$question->id}" id="label_alternative_{$alternative->id}">
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

      <!-- Botón para enviar respuestas -->
      <div class="col-12">
        <button style="display: inline-flex;" 
                onclick="procesar_respuestas_encuesta({$c}, {$content->id}, {$id_curso}, {$progress->total_items})" 
                type="button">
          <div id="loading_encuesta_button_{$content->id}" 
               style="margin-top: 5px; margin-right: 10px;width: 1rem; height: 1rem; display: none;" 
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
 <!--//////////////////////////////////////// ENCUESTA////////////////////////////////////////////////-->


  {/foreach}

</div>

{/if}
{else}


  <div class="box-pronto col-12 mt-5 text-center">
    <img src="{$logo}" alt="" >
    <br><br><br>
    <h2>Pronto estará disponible el contenido del curso</h2>
    <h3>Estamos trabajando para asegurarnos de que el material proporcionado sea de la más alta calidad y utilidad para tu formación profesional.</h3>
    <br><br>
    <a href="/cursos"> <button type="button">Ir a cursos</button></a>
  </div>


{/if}
