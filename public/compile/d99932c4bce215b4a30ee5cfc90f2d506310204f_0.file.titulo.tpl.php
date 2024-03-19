<?php
/* Smarty version 4.4.1, created on 2024-03-13 16:42:39
  from 'C:\wamp64\www\sinapsis\wp-content\plugins\course_wp\public\partials\course\titulo.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.4.1',
  'unifunc' => 'content_65f1d77fc81c12_71510195',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd99932c4bce215b4a30ee5cfc90f2d506310204f' => 
    array (
      0 => 'C:\\wamp64\\www\\sinapsis\\wp-content\\plugins\\course_wp\\public\\partials\\course\\titulo.tpl',
      1 => 1710347864,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f1d77fc81c12_71510195 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="row mt-5 mb-5">
    <div class="col-9">
        <h1 class="title-course-free"><?php echo $_smarty_tpl->tpl_vars['curso']->value->nombre;?>
</h1>
    </div>
    <div class="col-12 d-inline-flex">
        <button type="button" class="btn">Me quiero inscribir <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button>
        <h3 class="title-price">$ <?php echo $_smarty_tpl->tpl_vars['curso']->value->precio;?>
</h3>
    </div>
</div><?php }
}
