<template>
  <div class="row center no-pd" style="margin-left: -0.45rem;">
    <h5 class="text-center">Información Académica</h5>
    <div class="row center no-pd no-row">
      <div class="row register_container center no-pd">
        <div class="col-12 right_side">
          <div class="row">
            <div class="col-12 mt-2">
              <label for="distric">GRADO</label>
              <select id="distric" class="form-select" aria-label="Default select example">
                <option selected>Elegir Grado</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-12 mt-2">
              <label for="distric">UNIVERSIDAD</label>
              <select id="distric" class="form-select" aria-label="Default select example">
                <option selected>Elegir Universidad</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-12 mt-2">
              <label for="dni">AÑO DE EGRESO</label>
              <input class="form-control" id="dni" type="tel" placeholder="2012" aria-label="default input example" />
            </div>
            <div class="col-12 mt-2">
              <label for="distric">ESPECIALIDAD</label>
              <select id="distric" class="form-select" aria-label="Default select example">
                <option selected>Elegir Especialidad</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-12 mt-2">
              <label for="dni">REGISTRO DE ESPECIALIDAD</label>
              <input class="form-control" id="dni" type="text" placeholder="REGISTRO DE ESPECIALIDAD" aria-label="default input example" />
            </div>
          </div>
          <div class="row mt-2">
            <button class="btn btn-next mt-3 bg-blue" style="background">Agregar Nuevo Grado</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .right_side{
    padding: 1rem;
  }
</style>