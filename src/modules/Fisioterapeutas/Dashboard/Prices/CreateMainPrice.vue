<template>
  <Header :title="title" :subtitle="subtitle" />
  <Indications :mainIndication="mainIndication" :subIndication="subIndication" />
  <div class="col-12 col-md-8">
    <div class="card mb-2 mb-xl-0">
      <div class="card-body text-center row">
        <h5 class="text-align">Calcula tu tarifa</h5>
        <div class="row">
          <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
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
          <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">Ganancia Neta</p>
                    <h5 class="font-weight-bolder mb-0">S/. 135</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mt-4">
          <label for="search-input">MONTO A GANAR</label>
          <input id="search-input" v-model="search" type="tel" class="form-control" placeholder="S/." />
        </div>
        <div class="col-12 col-md-6 mt-4">
          <label for="search-input">PRECIO FINAL</label>
          <input id="search-input" v-model="search" type="tel" class="form-control" placeholder="S/." />
        </div>
        <h2 class="mt-2">S/.150</h2>
        <h5 class="mt-4">¿QUÉ INCLUYE ESTA TARIFA?</h5>
        <p class="list">10% De nuestra comisión</p>
        <p class="list">10% De nuestra comisión</p>
        <p class="list">10% De nuestra comisión</p>
        <button @click="saveLocation" class="btn bg-orange mt-2">GUARDA TARIFA</button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/modules/UI/DashboardHeaders.vue';
import Indications from '@/modules/UI/DashboardIndications.vue';

export default {
  components: {
    Header,
    Indications,
  },
  data() {
    return {
      title: 'Agrega tu precio',
      subtitle: 'Este será tu precio por sesión inicial',
      mainIndication: '¿CUÁNTOS QUIERES GANAR?',
      subIndication: 'La plataforma calculará el precio final para el cliente, agregando nuestras comisiones y gastos',
    };
  },
};
</script>
<style scoped>
.list {
  font-size: 1rem;
  text-align: center;
  font-style: italic;
}
label{
    font-size: 1.1rem;
}
P{
    margin-bottom: 2.5px;
}
</style>