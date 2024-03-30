<?php
/* Smarty version 4.4.1, created on 2024-03-29 23:42:10
  from 'C:\wamp64\www\sinapsis\wp-content\plugins\course_wp\public\partials\sidebar.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.4.1',
  'unifunc' => 'content_660751d24b3274_30376974',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '6dd8ea4b8e37beaad4825bebf3f5395a9a8389c7' => 
    array (
      0 => 'C:\\wamp64\\www\\sinapsis\\wp-content\\plugins\\course_wp\\public\\partials\\sidebar.tpl',
      1 => 1711656862,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_660751d24b3274_30376974 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="row header-bar sticky-top" style="background: white;">
  <div class="col-4">
    <img src="<?php echo $_smarty_tpl->tpl_vars['logo']->value;?>
" alt="" >
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
      <div><h3 onclick="showClass(-1 , 'show_main')" class="title-course"><?php echo $_smarty_tpl->tpl_vars['curso']->value->nombre;?>
</h3></div>
    </div>
  </div>


  <div class="row sidebar-row">
  <?php $_smarty_tpl->_assignInScope('i', 0);?>
  <?php $_smarty_tpl->_assignInScope('count_item', 0);?>
  <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['sidebar_menu']->value, 'button');
$_smarty_tpl->tpl_vars['button']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['button']->value) {
$_smarty_tpl->tpl_vars['button']->do_else = false;
?>

    <?php if ($_smarty_tpl->tpl_vars['button']->value->tipo == 'modulo') {?>
      <div class="col-12 button-sideba-modulo">
        <p class="text-sidebar-modulo"><?php echo $_smarty_tpl->tpl_vars['button']->value->nombre;?>
</p>
      </div>
    <?php } else { ?>

      <?php $_smarty_tpl->_assignInScope('count_item', $_smarty_tpl->tpl_vars['count_item']->value+1);?>

      <?php if ($_smarty_tpl->tpl_vars['button']->value->tipo == 'video') {?>
      <div class="col-12 button-sidebar">
        <?php if ($_smarty_tpl->tpl_vars['button']->value->done == true) {?>
          <div id="box_icon_check_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
        <?php } else { ?>
          <div id="box_icon_not_check_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        <?php }?>
        <div><p id="link_video_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="text-sidebar" onclick="showClass(<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
 , 'show_video_<?php echo $_smarty_tpl->tpl_vars['i']->value++;?>
')" ><?php echo $_smarty_tpl->tpl_vars['button']->value->nombre;?>
</p></div>
      </div>
      <?php }?>
      <?php if ($_smarty_tpl->tpl_vars['button']->value->tipo == 'apunte') {?>
      <div class="col-12 button-sidebar">
        <?php if ($_smarty_tpl->tpl_vars['button']->value->done == true) {?>
          <div id="box_icon_check_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
        <?php } else { ?>
          <div id="box_icon_not_check_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        <?php }?>
        <div><p id="link_apunte_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="text-sidebar" onclick="showClass(<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
 , 'show_apunte_<?php echo $_smarty_tpl->tpl_vars['i']->value++;?>
')" ><?php echo $_smarty_tpl->tpl_vars['button']->value->nombre;?>
</p></div>
      </div>
      <?php }?>
      <?php if ($_smarty_tpl->tpl_vars['button']->value->tipo == 'texto') {?>
      <div class="col-12 button-sidebar">
        <?php if ($_smarty_tpl->tpl_vars['button']->value->done == true) {?>
          <div id="box_icon_check_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
        <?php } else { ?>
          <div id="box_icon_not_check_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        <?php }?>
        <div><p id="link_texto_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="text-sidebar" onclick="showClass(<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
 , 'show_texto_<?php echo $_smarty_tpl->tpl_vars['i']->value++;?>
')"><?php echo $_smarty_tpl->tpl_vars['button']->value->nombre;?>
</p></div>
      </div>
      <?php }?>
      <?php if ($_smarty_tpl->tpl_vars['button']->value->tipo == 'cuestionario') {?>
      <div class="col-12 button-sidebar">
        <?php if ($_smarty_tpl->tpl_vars['button']->value->done == true) {?>
          <div id="box_icon_check_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="icon-check"><i class="fa-solid fa-circle-check"></i></div>
        <?php } else { ?>
          <div id="box_icon_not_check_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="icon-check"><i class="icon-leccion-check fa-regular fa-circle"></i></div>
        <?php }?>
        <div><p id="link_cuestionario_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="text-sidebar" onclick="showClass(<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
 , 'show_cuestionario_<?php echo $_smarty_tpl->tpl_vars['i']->value++;?>
')"><?php echo $_smarty_tpl->tpl_vars['button']->value->nombre;?>
</p></div>
      </div>
      <?php }?>
      <?php if ($_smarty_tpl->tpl_vars['button']->value->tipo == 'foro') {?>
      <div class="col-12 button-sidebar">
        
        <div id="box_icon_not_check_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="icon-check"><i class="fa-solid fa-comment"></i></div>
       
        <div><p id="link_foro_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="text-sidebar" onclick="showClass(<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
, 'show_foro_<?php echo $_smarty_tpl->tpl_vars['i']->value++;?>
')"><?php echo $_smarty_tpl->tpl_vars['button']->value->nombre;?>
</p></div>
      </div>
      <?php }?>
    <?php }?>
    
  <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
  </div>

</div>


<div class="contenido" id="contenido">

  <button class="openbtn" id="openbtn">☰ <i class="bi bi-check-circle-fill"></i></button>

  <div class="row justify-content-center">
    <div class="col-12"></div>
    <div class="col-8">
      <div style="display: block;" id="show_main">

      <div><h2><?php echo $_smarty_tpl->tpl_vars['curso']->value->nombre;?>
</h2></div>

      <div class="row">
        <div class="col-12">
          <div class="row mb-4">
            <div class="col-6">
              <a class="button-programa-platform" target="_blank" href="<?php echo $_smarty_tpl->tpl_vars['curso']->value->link_programa;?>
" type="button">Programa del curso</a>
            </div>
            <div class="col-6 text-end">
              <a class="button-programa-platform" target="_blank" type="button">Foro del curso</a>
            </div>
          </div>
         
        </div>
        <div class="col-12">
            <p class="content-description"><?php echo $_smarty_tpl->tpl_vars['curso']->value->descripcion;?>
</p>
        </div>
        <div class="col-12">
          <div class="ratio ratio-16x9">
            <iframe allowfullscreen src="<?php echo $_smarty_tpl->tpl_vars['curso']->value->link_video;?>
" title="<?php echo $_smarty_tpl->tpl_vars['curso']->value->nombre;?>
" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      

      </div>
    </div>
    <div class="col-12"></div>
  </div>

  




  
  <?php $_smarty_tpl->_assignInScope('c', 0);?>
  <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['sidebar_menu']->value, 'content');
$_smarty_tpl->tpl_vars['content']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['content']->value) {
$_smarty_tpl->tpl_vars['content']->do_else = false;
?>
  
    <?php if ($_smarty_tpl->tpl_vars['content']->value->tipo == 'video') {?>

    <div class="row justify-content-center">
    <div class="col-12"></div>
    <div class="col-8">

      <div style="display: none" id="show_video_<?php echo $_smarty_tpl->tpl_vars['c']->value++;?>
">
    
        <div><h2><?php echo $_smarty_tpl->tpl_vars['content']->value->nombre;?>
</h2></div>

        <div><p class="content-description"><?php echo $_smarty_tpl->tpl_vars['content']->value->descripcion;?>
</p></div>

        <div class="col-12">
          <div class="ratio ratio-16x9">
            <iframe allowfullscreen src="<?php echo $_smarty_tpl->tpl_vars['content']->value->link_video;?>
" title="<?php echo $_smarty_tpl->tpl_vars['content']->value->nombre;?>
" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <?php if ($_smarty_tpl->tpl_vars['content']->value->done == true) {?>
        <?php $_smarty_tpl->_assignInScope('displaydelete', 'block');?>
        <?php $_smarty_tpl->_assignInScope('displayregister', 'none');?>
        <?php } else { ?>
        <?php $_smarty_tpl->_assignInScope('displaydelete', 'none');?>
        <?php $_smarty_tpl->_assignInScope('displayregister', 'block');?>
        <?php }?>

          <div id="box_delete_select_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" class="col-12 mt-4 text-end" style="display : <?php echo $_smarty_tpl->tpl_vars['displaydelete']->value;?>
">
            <button id="delete_item_button_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" onclick="progressItemDelete(<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
 , <?php echo $_smarty_tpl->tpl_vars['content']->value->id;?>
 , '<?php echo $_smarty_tpl->tpl_vars['content']->value->tipo;?>
' , <?php echo $_smarty_tpl->tpl_vars['id_curso']->value;?>
)"  type="button">
            <div id="loading_delete_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Quitar como realizado
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        

          <div id="box_register_select_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" class="col-12 mt-4 text-end" style="display : <?php echo $_smarty_tpl->tpl_vars['displayregister']->value;?>
">
            <button id="next_item_button_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" onclick="progressItemRegister(<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
 , <?php echo $_smarty_tpl->tpl_vars['content']->value->id;?>
 , '<?php echo $_smarty_tpl->tpl_vars['content']->value->tipo;?>
' , <?php echo $_smarty_tpl->tpl_vars['id_curso']->value;?>
)"  type="button">
            <div id="loading_next_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
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


    <?php }?>

    <?php if ($_smarty_tpl->tpl_vars['content']->value->tipo == 'apunte') {?>

    <div class="row justify-content-center">
    <div class="col-12"></div>
    <div class="col-8">
      <div style="display: none" id="show_apunte_<?php echo $_smarty_tpl->tpl_vars['c']->value++;?>
">
        <div><h2><?php echo $_smarty_tpl->tpl_vars['content']->value->nombre;?>
</h2></div>

        <div><p class="content-description"><?php echo $_smarty_tpl->tpl_vars['content']->value->descripcion;?>
</p></div>

        
        <a class="btn btn-primary button-big-screen mb-2 mt-3" target="_blank" href="<?php echo $_smarty_tpl->tpl_vars['content']->value->link_apunte;?>
" role="button">Pantalla completa</a>

        <div class="col-12">
            <div class="ratio ratio-16x9">
              <iframe allowfullscreen src="<?php echo $_smarty_tpl->tpl_vars['content']->value->link_apunte;?>
" title="<?php echo $_smarty_tpl->tpl_vars['content']->value->nombre;?>
" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <?php if ($_smarty_tpl->tpl_vars['content']->value->done == true) {?>
        <?php $_smarty_tpl->_assignInScope('displaydelete', 'block');?>
        <?php $_smarty_tpl->_assignInScope('displayregister', 'none');?>
        <?php } else { ?>
        <?php $_smarty_tpl->_assignInScope('displaydelete', 'none');?>
        <?php $_smarty_tpl->_assignInScope('displayregister', 'block');?>
        <?php }?>

          <div id="box_delete_select_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" class="col-12 mt-4 text-end" style="display : <?php echo $_smarty_tpl->tpl_vars['displaydelete']->value;?>
">
            <button id="delete_item_button_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" onclick="progressItemDelete(<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
 , <?php echo $_smarty_tpl->tpl_vars['content']->value->id;?>
 , '<?php echo $_smarty_tpl->tpl_vars['content']->value->tipo;?>
' , <?php echo $_smarty_tpl->tpl_vars['id_curso']->value;?>
)"  type="button">
            <div id="loading_delete_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Quitar como realizado
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        

          <div id="box_register_select_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" class="col-12 mt-4 text-end" style="display : <?php echo $_smarty_tpl->tpl_vars['displayregister']->value;?>
">
            <button id="next_item_button_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" onclick="progressItemRegister(<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
 , <?php echo $_smarty_tpl->tpl_vars['content']->value->id;?>
 , '<?php echo $_smarty_tpl->tpl_vars['content']->value->tipo;?>
' , <?php echo $_smarty_tpl->tpl_vars['id_curso']->value;?>
)"  type="button">
            <div id="loading_next_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
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



    <?php }?>

    <?php if ($_smarty_tpl->tpl_vars['content']->value->tipo == 'texto') {?>

      <div class="row justify-content-center">
      <div class="col-12"></div>
      <div class="col-8">

      <div style="display: none" id="show_texto_<?php echo $_smarty_tpl->tpl_vars['c']->value++;?>
">
        <div><h2><?php echo $_smarty_tpl->tpl_vars['content']->value->nombre;?>
</h2></div>

        <div class="content-bibliografia">
          <?php echo $_smarty_tpl->tpl_vars['content']->value->texto;?>

        </div>

        <?php if ($_smarty_tpl->tpl_vars['content']->value->done == true) {?>
        <?php $_smarty_tpl->_assignInScope('displaydelete', 'block');?>
        <?php $_smarty_tpl->_assignInScope('displayregister', 'none');?>
        <?php } else { ?>
        <?php $_smarty_tpl->_assignInScope('displaydelete', 'none');?>
        <?php $_smarty_tpl->_assignInScope('displayregister', 'block');?>
        <?php }?>

          <div id="box_delete_select_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" class="col-12 mt-4 text-end" style="display : <?php echo $_smarty_tpl->tpl_vars['displaydelete']->value;?>
">
            <button id="delete_item_button_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" onclick="progressItemDelete(<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
 , <?php echo $_smarty_tpl->tpl_vars['content']->value->id;?>
 , '<?php echo $_smarty_tpl->tpl_vars['content']->value->tipo;?>
' , <?php echo $_smarty_tpl->tpl_vars['id_curso']->value;?>
)"  type="button">
            <div id="loading_delete_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Quitar como realizado
            <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        

          <div id="box_register_select_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" class="col-12 mt-4 text-end" style="display : <?php echo $_smarty_tpl->tpl_vars['displayregister']->value;?>
">
            <button id="next_item_button_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" onclick="progressItemRegister(<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
 , <?php echo $_smarty_tpl->tpl_vars['content']->value->id;?>
 , '<?php echo $_smarty_tpl->tpl_vars['content']->value->tipo;?>
' , <?php echo $_smarty_tpl->tpl_vars['id_curso']->value;?>
)"  type="button">
            <div id="loading_next_item_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
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
      
    <?php }?>


    <?php if ($_smarty_tpl->tpl_vars['content']->value->tipo == 'cuestionario') {?>

    <div class="row justify-content-center">
      <div class="col-12"></div>
      <div class="col-8">

      <div style="display: none" id="show_cuestionario_<?php echo $_smarty_tpl->tpl_vars['c']->value++;?>
">

        <div><h2><?php echo $_smarty_tpl->tpl_vars['content']->value->nombre;?>
</h2></div>

        <div class="row">
          <p><?php echo $_smarty_tpl->tpl_vars['content']->value->descripcion;?>
</p>
        </div>

        <div class="row box-cuestionario-platform">
          <div class="col-12 head-box-cuestionario-platform">
              <h3>Contenido de la lección</h3>
          </div>
          <div class="col-12 mt-4 body-box-cuestionario-platform">
            <div class="row">
              <div class="col-10">
                <p>Iniciar <?php echo $_smarty_tpl->tpl_vars['content']->value->nombre;?>
</p>
              </div>
              <div class="col-2 text-end">
                <button onclick="showClassQuestions('show_questions_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
' , <?php echo $_smarty_tpl->tpl_vars['c']->value;?>
 , <?php echo $_smarty_tpl->tpl_vars['content']->value->id;?>
 , <?php echo $_smarty_tpl->tpl_vars['content']->value->tiempo;?>
)" type="button" style="position: relative; top: -7px;">Iniciar</button>
              </div>
            </div>
          </div>

          <div style="display: none;" id="show_questions_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" class="col-12">
            <div class="row mt-5">

              <?php $_smarty_tpl->_assignInScope('i', 1);?>
              <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['content']->value->pregunta, 'question');
$_smarty_tpl->tpl_vars['question']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['question']->value) {
$_smarty_tpl->tpl_vars['question']->do_else = false;
?>
              <div class="col-12 mb-5 pregunta_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
">
                
                <strong class="mt-5"><p>Pregunta <?php echo $_smarty_tpl->tpl_vars['i']->value;?>
:</p></strong>
                <p><?php echo $_smarty_tpl->tpl_vars['question']->value->pregunta;?>
</p>

                <strong class="mt-2"><p>Alternativas</p></strong>
                
                  <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['question']->value->alternativas, 'alternative');
$_smarty_tpl->tpl_vars['alternative']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['alternative']->value) {
$_smarty_tpl->tpl_vars['alternative']->do_else = false;
?>

                    <div class="form-check mt-4">
                      <input class="form-check-input" type="radio" name="response_cues_<?php echo $_smarty_tpl->tpl_vars['question']->value->id;?>
" value="<?php echo $_smarty_tpl->tpl_vars['alternative']->value->id;?>
" id="response_cues_<?php echo $_smarty_tpl->tpl_vars['question']->value->id;?>
">
                      <label id="label_alternative_<?php echo $_smarty_tpl->tpl_vars['alternative']->value->id;?>
" class="form-check-label">
                        <?php echo $_smarty_tpl->tpl_vars['alternative']->value->alternativa;?>

                      </label>
                    </div>

                  <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>

                  <div id="justificacion-block_<?php echo $_smarty_tpl->tpl_vars['question']->value->id;?>
" class="col-12 mt-5" style="display: none;">
                    <h4>Justificación</h4>
                    <div class="box-justified-question shadow">
                     <div id="box-justified-question_<?php echo $_smarty_tpl->tpl_vars['question']->value->id;?>
"></div>
                    </div>
                  </div>
                

                <p style="display: none;"><?php echo $_smarty_tpl->tpl_vars['i']->value++;?>
</p> 
              </div>
              <hr>
              <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>


              <div class="box-button_send_response_cues col-12">
                <button id="button_send_response_cues_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" onclick="response_form_test(<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
 , <?php echo $_smarty_tpl->tpl_vars['content']->value->id;?>
);" class="button_send_response_cues" type="button">
                  <div id="loading_response_cuestionary_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
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

    <?php }?>

    <?php if ($_smarty_tpl->tpl_vars['content']->value->tipo == 'foro') {?>

    <div class="row justify-content-center">
      <div class="col-12"></div>
      <div class="col-8">

      <div style="display: none" id="show_foro_<?php echo $_smarty_tpl->tpl_vars['c']->value++;?>
">
        <div><h2><?php echo $_smarty_tpl->tpl_vars['content']->value->nombre;?>
</h2></div>

        <div class="col-12 mb-5">
          <p><?php echo $_smarty_tpl->tpl_vars['content']->value->descripcion;?>
</p>
        </div>

        <div class="col-12 head-box-cuestionario-platform">
          <h3>Debate</h3>
        </div>

        <div class="col-12 mt-5">
          <p>Acá puedes crear una nueva pregunta para el <?php echo $_smarty_tpl->tpl_vars['content']->value->nombre;?>
</p>
          <div class="input-group">
            <textarea id="new_question_foro_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" class="form-control"></textarea>
            <button id="buttonSaveQuestion" onclick="saveQuestionForo(<?php echo $_smarty_tpl->tpl_vars['content']->value->id;?>
 , <?php echo $_smarty_tpl->tpl_vars['id_usuario']->value;?>
 , '<?php echo $_smarty_tpl->tpl_vars['nombre_usuario']->value;?>
' , <?php echo $_smarty_tpl->tpl_vars['c']->value;?>
)" rows="3" type="button">
          
            <div id="loading_question_foro_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            
            Enviar
            </button>
          </div>
        </div>


        <div id="new_question_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
"></div>


        
          <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['content']->value->preguntas_foros, 'pregunta');
$_smarty_tpl->tpl_vars['pregunta']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['pregunta']->value) {
$_smarty_tpl->tpl_vars['pregunta']->do_else = false;
?>
          <div class="box-question-response col-12 border">
              <div class="col-12 mb-4">
                <p style="margin: 0px;"><i style="margin-right: 7px;" class="fa-solid fa-user"></i> <?php echo $_smarty_tpl->tpl_vars['pregunta']->value->nombre_usuario;?>
</p>
                <p class="h5" style="padding: 22px"><?php echo $_smarty_tpl->tpl_vars['pregunta']->value->entrada;?>
</p>
              </div>

              <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['pregunta']->value->respuestas_foros, 'respuesta');
$_smarty_tpl->tpl_vars['respuesta']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['respuesta']->value) {
$_smarty_tpl->tpl_vars['respuesta']->do_else = false;
?>
                <div class="col-12">
                  <p style="margin-left: 30px; font-size: 12px; margin-bottom: 0px;"><i style="margin-right: 7px;" class="fa-solid fa-user"></i> <?php echo $_smarty_tpl->tpl_vars['respuesta']->value->nombre_usuario;?>
</p>
                  <p style="margin-left: 30px;">- <?php echo $_smarty_tpl->tpl_vars['respuesta']->value->entrada;?>
</p>
                </div>
              <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>

              <div id="new_response_foro_<?php echo $_smarty_tpl->tpl_vars['pregunta']->value->id;?>
"></div>
             
              <div class="col-12">
                <div class="input-group">
                    <textarea id="response_question_foro_<?php echo $_smarty_tpl->tpl_vars['pregunta']->value->id;?>
" rows="2" class="form-control"></textarea>
                    <button id="buttonSaveResponse" onclick="saveResponseQuestionForo(<?php echo $_smarty_tpl->tpl_vars['id_usuario']->value;?>
 , <?php echo $_smarty_tpl->tpl_vars['pregunta']->value->id;?>
 , '<?php echo $_smarty_tpl->tpl_vars['nombre_usuario']->value;?>
' , <?php echo $_smarty_tpl->tpl_vars['c']->value;?>
)" type="button">

                    <div id="loading_response_foro_<?php echo $_smarty_tpl->tpl_vars['pregunta']->value->id;?>
" style="width: 1rem; height: 1rem; display: none;" class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>

                      Enviar
                    </button>
                </div>
              </div>
            </div>
          <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
      </div>

      </div>
      <div class="class-12"></div>
    </div>


    <?php }?>

  <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>

  

  
</div><?php }
}
