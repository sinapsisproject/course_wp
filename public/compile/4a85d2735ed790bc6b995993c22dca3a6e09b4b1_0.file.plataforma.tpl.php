<?php
/* Smarty version 4.4.1, created on 2024-03-19 03:56:42
  from '/home2/sinapsi6/public_html/wp-content/plugins/course_wp/public/partials/course/plataforma.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.4.1',
  'unifunc' => 'content_65f90cfa663460_15179297',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '4a85d2735ed790bc6b995993c22dca3a6e09b4b1' => 
    array (
      0 => '/home2/sinapsi6/public_html/wp-content/plugins/course_wp/public/partials/course/plataforma.tpl',
      1 => 1710815417,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f90cfa663460_15179297 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="row justify-content-center">

    <div class="link_descarga_programa-box col-8 shadow mt-4 mb-5">
        <div class="row">
            <div class="col-10">
                <a href="<?php echo $_smarty_tpl->tpl_vars['curso']->value->link_programa;?>
" target="_blank"><span style="margin-left: 10px; color: black;">Descarga el programa completo del curso</span></a>
            </div>
            <div class="col-2 text-end">
                <i class="fa-solid fa-file-arrow-down"></i>
            </div>
        </div>
    </div>

    <div class="row justify-content-center box-button-register-pay">
        <div class="col-6 text-center">
            <p>Este contenido está reservado para los alumnos registrados</p>
            <button type="button">Comprar curso <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button>
            <button type="button">Registrate <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>

    <div class="box-course-for-user-register row justify-content-center">
        <div class="col-12 text-center mb-5">
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['content']->value, 'data');
$_smarty_tpl->tpl_vars['data']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['data']->value) {
$_smarty_tpl->tpl_vars['data']->do_else = false;
?>
                <a style="margin: 30px" href=""><?php echo $_smarty_tpl->tpl_vars['data']->value->nombre;?>
</a>
            <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
        </div>

        <div class="content-course-data-user-register col-9 mb-3 pb-3 shadow">

            <div class="col-12 text-center mt-4">
                <button type="button">Materiales</button>
                <button type="button">Evaluación</button>
            </div>


            <?php $_smarty_tpl->_assignInScope('c', 0);?>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['content']->value[0]->contenido, 'data');
$_smarty_tpl->tpl_vars['data']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['data']->value) {
$_smarty_tpl->tpl_vars['data']->do_else = false;
?>
            
            <p style="display: none;"><?php echo $_smarty_tpl->tpl_vars['c']->value++;?>
</p>
                <div class="content-course-data-item shadow">
                    
                    <div class="accordion " id="accordion_<?php echo $_smarty_tpl->tpl_vars['c']->value;?>
">
                    
                            <div class="col-12 ">
                                <div class="row pb-2">

                                    <div class="accordion-header col-10">
                                        <p class="text-title-header-accordeon-user-register"><?php echo $_smarty_tpl->tpl_vars['data']->value->nombre;?>
</p>
                                    </div>
                                    <div class="col-2 text-center">
                                        <i class="fa-solid fa-file button-show-accordeon-course-user-register"></i>
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
                
            <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
            
        </div>

    </div>

</div><?php }
}
