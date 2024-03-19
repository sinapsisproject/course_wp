<?php
/* Smarty version 4.4.1, created on 2024-03-13 05:45:28
  from 'C:\wamp64\www\sinapsis\wp-content\plugins\course_wp\public\partials\course\video.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.4.1',
  'unifunc' => 'content_65f13d78c648f0_64573637',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3436234995a5081990bf21402f2d0f35d2961328' => 
    array (
      0 => 'C:\\wamp64\\www\\sinapsis\\wp-content\\plugins\\course_wp\\public\\partials\\course\\video.tpl',
      1 => 1710308601,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f13d78c648f0_64573637 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="col-12">
    <div class="ratio ratio-16x9">
    <iframe allowfullscreen src="<?php echo $_smarty_tpl->tpl_vars['curso']->value->link_video;?>
" title="<?php echo $_smarty_tpl->tpl_vars['curso']->value->nombre;?>
" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div><?php }
}
