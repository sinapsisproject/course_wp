<?php
/* Smarty version 4.4.1, created on 2024-03-13 06:11:00
  from 'C:\wamp64\www\sinapsis\wp-content\plugins\course_wp\public\partials\course\instructor.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.4.1',
  'unifunc' => 'content_65f1437472fb26_07712727',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '36cd24576d6f5ef43fb1affc1e797c4977b3e31d' => 
    array (
      0 => 'C:\\wamp64\\www\\sinapsis\\wp-content\\plugins\\course_wp\\public\\partials\\course\\instructor.tpl',
      1 => 1710310254,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f1437472fb26_07712727 (Smarty_Internal_Template $_smarty_tpl) {
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
