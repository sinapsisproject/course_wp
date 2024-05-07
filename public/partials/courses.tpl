<div class="container">

    <div class="row mb-5">
        <div class="col-12">

            <div class="row justify-content-start">
                <div class="col-md-6">
                    <div class="input-group search-box">
                        <input disabled type="text" class="form-control input-placeholder-right" placeholder=" Buscar título, palabra clave..." aria-label="Buscar" aria-describedby="basic-addon2">
                        <button disabled type="button"><i class="fas fa-search"></i> Buscar</button>
                    </div>
                </div>
            </div>

        </div>
    </div>



    <div class="row">

    {foreach $cursos as $curso}

        <div class="col-12 col-md-6 col-xl-4 mb-4">

        <div class="card">
            <div class="box-img-courses">
                <div class="img-courses" style="background-image: url({$curso->imagen});"></div>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <p class="text-course-data"><i class="fa-solid fa-users"></i> + {$curso->estudiantes} Estudiantes</p>
                    </div>
                    <div class="col-6">
                        <p class="text-course-data"><i class="fa-regular fa-clock"></i> {$curso->duracion}</p>
                    </div>
                </div>
                
                <h5 class="card-title mb-3">{$curso->nombre}</h5>
                <p class="card-text">{$curso->descripcion_corta}</p>
                <a href="/curso/?curso={$curso->id}"><button style="width: 100%;" type="button" class="more-info-course btn btn-primary">Más información  <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button></a>
            </div>
        </div>

        </div>

    {/foreach}

      
    </div>

</div>