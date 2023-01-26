<template>
  <div class="col-12 card mt-4 mb-4">
    <div class="row">
      <h4 class="text-center up">Jueves 19 de Enero del 2023</h4>
      <p class="text-center">LIC. RICARDO BULLON</p>
      <hr style="width: 50vw; margin-right: auto; margin-left: auto" />
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-6">
      <div class="card mt-4 mb-4 hc_container">
        <h6 class="text-center up">Evaluación Inicial</h6>
        <hr />

        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <InfoCard :title="'Ectioscopia'" :description="'55 años'" />
          </div>
          <div class="col-12 col-md-6 mb-4">
            <InfoCard :title="'Estado General'" :description="'Malo'" />
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-12 mb-4">
            <InfoCard :title="'Observación'" :description="'Persona pasa mucho tiempo sentado frente al ordenados programando fisioacasa.pe'" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="card mt-4 mb-4 hc_container">
        <h6 class="text-center up">Enfermedad Actual</h6>
        <hr />

        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <InfoCard :title="'Tiempo Enfermedad'" :description="'2 meses'" />
          </div>
          <div class="col-12 col-md-6 mb-4">
            <InfoCard :title="'Forma de Inicio'" :description="'Brusco'" />
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-12 mb-4">
            <InfoCard :title="'Anamnesis'" :description="'Persona pasa mucho tiempo sentado frente al ordenados programando fisioacasa.pe'" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-4">
      <div class="card mt-4 mb-4 hc_container">
        <h6 class="text-center up">Situación Inicial</h6>
        <hr />
        <InfoCard :title="'¿Cómo lo encontraste?'" :description="'Persona pasa mucho tiempo sentado frente al ordenados programando fisioacasa.pe'" />
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card mt-4 mb-4 hc_container">
        <h6 class="text-center up">Lo que se hizo</h6>
        <hr />
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card mt-4 mb-4 hc_container">
        <h6 class="text-center up">Situación Final</h6>
        <hr />
        <InfoCard :title="'¿Cómo dejas al paciente?'" :description="'Persona pasa mucho tiempo sentado frente al ordenados programando fisioacasa.pe'" />
      </div>
    </div>
  </div>
</template>
<script>
import InfoCard from '@/modules/Fisioterapeutas/Dashboard/Appointments/Details/InfoCards.vue';

export default {
  components: {
    InfoCard,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.up {
  text-transform: uppercase;
}
</style>