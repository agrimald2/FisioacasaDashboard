<template>
  <div class="row center no-pd">
    <div class="row center no-pd no-row">
      <div class="row register_container center no-pd">
        <div class="col-12 right_side">
          <div class="row">
            <div class="col-12 col-md-6 mt-2">
              <label for="dni">DOCUMENTO DE IDENTIDAD</label>
              <input class="form-control" id="dni" type="tel" placeholder="DNI" aria-label="default input example" />
            </div>
            <div class="col-12 col-md-6 mt-2">
              <label for="name">NOMBRE COMPLETO</label>
              <input class="form-control" id="name" type="text" placeholder="NOMBRE COMPLETO" aria-label="default input example" />
            </div>
            <div class="col-12 col-md-6 mt-2">
              <label for="birthdate">FECHA DE NACIMIENTO</label>
              <input id="birthdate" class="form-control" type="date" />
            </div>
            <div class="col-12 col-md-6 mt-2">
              <label for="startDate">SEXO</label>
              <div class="row center">
                <div class="wrapper margin-center">
                  <input type="radio" name="select" id="option-1" checked />
                  <input type="radio" name="select" id="option-2" />
                  <label for="option-1" class="option option-1">
                    <div class="dot"></div>
                    <span>Masculino</span>
                  </label>
                  <label for="option-2" class="option option-2">
                    <div class="dot"></div>
                    <span>Femenino</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 mt-2">
              <label for="phone">WHATSAPP (Número Peruano)</label>
              <input class="form-control" id="phone" type="tel" placeholder="CELULAR" aria-label="default input example" />
            </div>
            <div class="col-12 col-md-6 mt-2">
              <label for="email">EMAIL</label>
              <input class="form-control" id="email" type="tel" placeholder="CORREO ELECTRÓNICO" aria-label="default input example" />
            </div>
            <div class="col-12 col-md-6 mt-2">
              <label for="city">CIUDAD</label>
              <select id="city" class="form-select" aria-label="Default select example">
                <option selected>CIUDAD</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-12 col-md-6 mt-2">
              <label for="distric">DISTRITO</label>
              <select id="distric" class="form-select" aria-label="Default select example">
                <option selected>Distrito</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>