<div class="row mt-5 mb-5">
    <div class="col-9">
        <h1 class="title-course-free">{$curso->nombre}</h1>
    </div>
    <div class="col-12 d-inline-flex">
        <?php echo do_shortcode('[shortcodecreatetransactionbutton text_button="Me quiero inscribir"]'); ?>
        <h3 class="title-price">$ {$curso->precio|number_format:0:',':'.'}</h3>
    </div>
</div>