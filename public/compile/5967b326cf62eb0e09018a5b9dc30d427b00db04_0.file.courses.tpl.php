<?php
/* Smarty version 4.4.1, created on 2024-03-19 04:24:31
  from 'C:\wamp64\www\sinapsis\wp-content\plugins\course_wp\public\partials\courses.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.4.1',
  'unifunc' => 'content_65f9137f2e1991_22897174',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5967b326cf62eb0e09018a5b9dc30d427b00db04' => 
    array (
      0 => 'C:\\wamp64\\www\\sinapsis\\wp-content\\plugins\\course_wp\\public\\partials\\courses.tpl',
      1 => 1710822267,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f9137f2e1991_22897174 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="container">

    <div class="row">


    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['cursos']->value, 'curso');
$_smarty_tpl->tpl_vars['curso']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['curso']->value) {
$_smarty_tpl->tpl_vars['curso']->do_else = false;
?>

        <div class="col col-md-6 col-xl-4">

        <div class="card">
            <div class="box-img-courses">
                <div class="img-courses" style="background-image: url(<?php echo $_smarty_tpl->tpl_vars['curso']->value->imagen;?>
);"></div>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <p><i class="fa-solid fa-users"></i> + <?php echo $_smarty_tpl->tpl_vars['curso']->value->estudiantes;?>
 Estudiantes</p>
                    </div>
                    <div class="col-6">
                        <p><i class="fa-regular fa-clock"></i> <?php echo $_smarty_tpl->tpl_vars['curso']->value->duracion;?>
</p>
                    </div>
                </div>
                
                <h5 class="card-title mb-3"><?php echo $_smarty_tpl->tpl_vars['curso']->value->nombre;?>
</h5>
                <p class="card-text"><?php echo $_smarty_tpl->tpl_vars['curso']->value->descripcion_corta;?>
</p>
                <a href="/curso/?curso=<?php echo $_smarty_tpl->tpl_vars['curso']->value->id;?>
"><button style="width: 100%;" type="button" class="more-info-course btn btn-primary">Más información  <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button></a>
            </div>
        </div>

        </div>

    <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>

      
    </div>

</div><?php }
}
