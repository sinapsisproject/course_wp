<?php
/* Smarty version 4.4.1, created on 2024-03-19 03:53:37
  from '/home2/sinapsi6/public_html/wp-content/plugins/course_wp/public/partials/course/video.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.4.1',
  'unifunc' => 'content_65f90c411b1ce6_91079546',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'fad12be4d96fb80c0d8e5976460718840456eaeb' => 
    array (
      0 => '/home2/sinapsi6/public_html/wp-content/plugins/course_wp/public/partials/course/video.tpl',
      1 => 1710815417,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f90c411b1ce6_91079546 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="col-12">
    <div class="ratio ratio-16x9">
    <iframe allowfullscreen src="<?php echo $_smarty_tpl->tpl_vars['curso']->value->link_video;?>
" title="<?php echo $_smarty_tpl->tpl_vars['curso']->value->nombre;?>
" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div><?php }
}
