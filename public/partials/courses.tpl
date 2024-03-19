<div class="container">

    <div class="row">


    {foreach $cursos as $curso}

        <div class="col col-md-6 col-xl-4">

        <div class="card">
            <div class="box-img-courses">
                <div class="img-courses" style="background-image: url({$curso->imagen});"></div>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <p><i class="fa-solid fa-users"></i> + {$curso->estudiantes} Estudiantes</p>
                    </div>
                    <div class="col-6">
                        <p><i class="fa-regular fa-clock"></i> {$curso->duracion}</p>
                    </div>
                </div>
                
                <h5 class="card-title mb-3">{$curso->nombre}</h5>
                <p class="card-text">{$curso->descripcion_corta}</p>
                <button class="more-info-course btn btn-primary">Más información  <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>

        </div>

    {/foreach}

      
    </div>

</div>