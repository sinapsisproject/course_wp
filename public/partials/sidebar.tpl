
<div class="row header-bar sticky-top" style="background: white;">
  <div class="col-4">
    <img src="{$logo}" alt="" >
  </div>
  <div  class="col-4 mt-3">
    <a class="link-leccion-direction" href="">Lección anterior</a>
  </div>
  <div  class="col-4 mt-3">
  <a class="link-leccion-direction" href="">Lección siguiente</a>
  </div>
</div>


<div class="sidebar" id="sidebar">

  <div class="row">
    <div class="col-12 box-title-course">
      <div class="icon-course-title"><i class="fa-solid fa-file"></i></div>
      <div><h3 onclick="showClass('show_main')" class="title-course">{$curso->nombre}</h3></div>
    </div>
  </div>


  <div class="row">
  {$i = 0}
  {foreach $sidebar_menu as $button}
  
    {if $button->tipo == 'modulo'}
      <div class="col-12 button-sideba-modulo">
        <p class="text-sidebar-modulo">{$button->nombre}</p>
      </div>
    {else}
      {if $button->tipo == 'video'}
      <div class="col-12 button-sidebar">
        <div class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
        <div><p onclick="showClass('show_video_{$i++}')" class="text-sidebar">{$button->nombre}</p></div>
      </div>
      {/if}
      {if $button->tipo == 'apunte'}
      <div class="col-12 button-sidebar">
        <div class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        <div><p onclick="showClass('show_apunte_{$i++}')" class="text-sidebar">{$button->nombre}</p></div>
      </div>
      {/if}
      {if $button->tipo == 'texto'}
      <div class="col-12 button-sidebar">
        <div class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        <div><p onclick="showClass('show_texto_{$i++}')" class="text-sidebar">{$button->nombre}</p></div>
      </div>
      {/if}
      {if $button->tipo == 'cuestionario'}
      <div class="col-12 button-sidebar">
        <div class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        <div><p onclick="showClass('show_cuestionario_{$i++}')" class="text-sidebar">{$button->nombre}</p></div>
      </div>
      {/if}
      {if $button->tipo == 'foro'}
      <div class="col-12 button-sidebar">
        <div class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        <div><p onclick="showClass('show_foro_{$i++}')" class="text-sidebar">{$button->nombre}</p></div>
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
                <button onclick="showClassQuestions('show_questions_{$c}')" type="button" style="position: relative; top: -7px;">Iniciar</button>
              </div>
            </div>
          </div>

          <div style="display: none;" id="show_questions_{$c}" class="col-12">
            <div class="row mt-5">

              {$i = 1}
              {foreach $content->pregunta as $question}
              <div class="col-12 mb-5">
                
                <strong class="mt-5"><p>Pregunta {$i}:</p></strong>
                <p>{$question->pregunta}</p>

                <strong class="mt-2"><p>Alternativas</p></strong>
                {foreach $question->alternativas as $alternative}

                  <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="response_cues_{$question->id}" id="response_cues_{$question->id}">
                    <label class="form-check-label">
                      {$alternative->alternativa}
                    </label>
                  </div>

                {/foreach}

                <p style="display: none;">{$i++}</p> 
              </div>
              <hr>
              {/foreach}


              <div class="box-button_send_response_cues col-12">
                <button class="button_send_response_cues" type="button">Enviar</button>
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