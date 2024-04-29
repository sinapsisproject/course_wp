<div class="row justify-content-center">

    <div class="col-7">

    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-5 pt-2">
            <img src="{$curso->instructor->foto}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-7">
            <div class="card-body">
                <h5 class="card-title mb-3">{$curso->instructor->nombre}</h5>
                <strong><p class="card-text mb-3">{$curso->instructor->especialidad}</p></strong>
                <p class="card-text">{$curso->instructor->descripcion}</p>
            </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center">
        <button type="button" class="btn mt-4">Más sobre {$curso->instructor->nombre} <i style="margin-left: 10px;" class="fa-solid fa-arrow-right"></i></button>
    </div>

    </div>

</div>