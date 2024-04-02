<?php
/* Smarty version 4.4.1, created on 2024-03-19 03:55:29
  from '/home2/sinapsi6/public_html/wp-content/plugins/course_wp/public/partials/course/instructor.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.4.1',
  'unifunc' => 'content_65f90cb1e3a120_01061465',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'f1971cc1a001119f26bfc4542378315acd45a065' => 
    array (
      0 => '/home2/sinapsi6/public_html/wp-content/plugins/course_wp/public/partials/course/instructor.tpl',
      1 => 1710815417,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f90cb1e3a120_01061465 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="row justify-content-center">

    <div class="col-6">

    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-5 pt-2">
            <img src="<?php echo $_smarty_tpl->tpl_vars['curso']->value->instructor->foto;?>
" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-7">
            <div class="card-body">
                <h5 class="card-title mb-3"><?php echo $_smarty_tpl->tpl_vars['curso']->value->instructor->nombre;?>
</h5>
                <strong><p class="card-text mb-3"><?php echo $_smarty_tpl->tpl_vars['curso']->value->instructor->especialidad;?>
</p></strong>
                <p class="card-text"><?php echo $_smarty_tpl->tpl_vars['curso']->value->instructor->descripcion;?>
</p>
            </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center">
        <button type="button" class="btn mt-4">Más sobre <?php echo $_smarty_tpl->tpl_vars['curso']->value->instructor->nombre;?>
 <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button>
    </div>

    </div>

</div><?php }
}
