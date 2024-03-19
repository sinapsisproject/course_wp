<?php
/* Smarty version 4.4.1, created on 2024-03-14 03:34:22
  from 'C:\wamp64\www\sinapsis\wp-content\plugins\course_wp\public\partials\content_course.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.4.1',
  'unifunc' => 'content_65f2703e6c0e94_97582180',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '813c64fb6c66b4a240af7956422240c21a3b109a' => 
    array (
      0 => 'C:\\wamp64\\www\\sinapsis\\wp-content\\plugins\\course_wp\\public\\partials\\content_course.tpl',
      1 => 1710387254,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f2703e6c0e94_97582180 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="row justify-content-center mt-5">
    <div class="blue-box-content-course col-10">
        <h3>Contenido del curso</h3>
        <p>Revisa lo que aprenderas durante el curso y las distintas unidades de contenidos:</p>
        <a href="<?php echo $_smarty_tpl->tpl_vars['curso']->value->link_programa;?>
" style="border-width: 0px;" target="_blank" class="button-download-content-complete mt-3" type="button">Descarga el contenido completo <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></a>
    </div>

    <div class="content-course-data col-9 mb-3 pb-3 shadow">
        <?php $_smarty_tpl->_assignInScope('c', 0);?>
        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['content']->value, 'data');
$_smarty_tpl->tpl_vars['data']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['data']->value) {
$_smarty_tpl->tpl_vars['data']->do_else = false;
?>
        <p style="display : none;"><?php echo $_smarty_tpl->tpl_vars['c']->value++;?>
</p>
        <div class="content-course-data-item shadow">
                <div class="accordion " id="accordion_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
">
                
                        <div class="col-12 ">
                            <div class="row pb-2">

                                <div class="accordion-header col-10">
                                    <p class="text-title-header-accordeon"><?php echo $_smarty_tpl->tpl_vars['data']->value->nombre;?>
</p>
                                </div>
                                <div class="col-2 text-center">
                                    <i data-bs-toggle="collapse" data-bs-target="#collapseOne_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" aria-expanded="true" aria-controls="collapseOne" class="fa-solid fa-plus button-show-accordeon-course"></i>
                                </div>

                            </div>
                        </div>
                    
                        
                        <div id="collapseOne_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
" class="accordion-collapse collapse col-12" data-bs-parent="#accordion_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
">
                            <div class="accordion-body">
                                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['data']->value->contenido, 'contenido');
$_smarty_tpl->tpl_vars['contenido']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['contenido']->value) {
$_smarty_tpl->tpl_vars['contenido']->do_else = false;
?>
                                <p class="text-accordeon-body"><i style="margin-right: 10px; color: #445AFF;" class="fa-solid fa-circle-arrow-right"></i> <?php echo $_smarty_tpl->tpl_vars['contenido']->value->nombre;?>
</p>
                                <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                            </div>
                        </div>
                       
                </div>
            </div>
        <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
        
    </div>
</div>



<?php }
}
