<template>
  <div class="row">
    <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Paciente</p>
              <h5 class="font-weight-bolder mb-0">ALONSO GRIMALDO</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Santiago de Surco</p>
              <h5 class="font-weight-bolder mb-0">Madre Selva 121</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Fecha y hora</p>
              <h5 class="font-weight-bolder mb-0">Lunes 23 - 14:00</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Tarifa Actual</p>
              <h5 class="font-weight-bolder mb-0">S/. 150</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-2 mt-2">
    <div class="card-body text-center row">
      <div class="row">
        <h5 class="patientName">HISTORIA CLÍNICA</h5>
        <h6>20 años - M</h6>
        <hr />
      </div>
      <div class="row">
        <div class="col-12 col-md-6 hc_label">
          <button class="btn bg-orange" type="submit">VER HISTORIAL CLINICO 18/01</button>
        </div>
        <div class="col-12 col-md-6 hc_label">
          <button class="btn bg-orange" type="submit">VER HISTORIAL CLINICO 19/01</button>
        </div>
        <div class="col-12 col-md-6 hc_label">
          <button class="btn bg-orange" type="submit">VER HISTORIAL CLINICO 20/01</button>
        </div>
        <div class="col-12 col-md-6 hc_label">
          <button class="btn bg-orange" type="submit">VER HISTORIAL CLINICO 21/01</button>
        </div>
      </div>
      <div class="row mt-2">
        <button class="btn bg-blue" type="submit" style="color: white">COMPLETAR DETALLES DE LA ATENCIÓN</button>
        <p><i>*Si no llenas tu historial clínico, la cita no será contabilizada*</i></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>
.patientName {
  text-transform: uppercase;
}
</style>