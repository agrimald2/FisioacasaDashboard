<template>
  <Header :title="title" :subtitle="subtitle" />

  <Indications :mainIndication="mainIndication" :subIndication="subIndication" />
  <div class="col-12 col-md-8">
    <div class="card mb-2 mb-xl-0">
      <div class="card-body text-center">
        <div class="row">
          <div class="col-12 mt-2">
            <div class="row center">
              <label class="mt-2">UBICACIÓN</label>
              <div class="col-12 mt-2">
                <select id="distric" class="form-select" aria-label="Default select example">
                  <option selected>Elige una ubicación</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="row">
                <label class="mt-2">DÍAS DE LA SEMANA</label>
                <div class="col-12 mt-1" style="text-align: center; display: flex; justify-content: center">
                  <div class="row center">
                    <DaySelect />
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-4">
                <label class="mt-2">HORA DE INICIO</label>
                <div class="col-12 mt-1" style="text-align: center; display: flex; justify-content: center">
                  <div class="row center">
                    <select id="start" class="form-select" v-model="selectedHour">
                      <option selected>INICIO</option>
                      <option v-for="hour in hours" :value="hour" :key="hour">{{ hour }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-4">
                <label class="mt-2">HORA FINAL</label>
                <div class="col-12 mt-1" style="text-align: center; display: flex; justify-content: center">
                  <div class="row center">
                    <select id="end" class="form-select" aria-label="Default select example">
                      <option selected>FINAL</option>
                      <option v-for="hour in hours" :value="hour" :key="hour">{{ hour }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <button @click="saveLocation" class="btn bg-orange">Añadir Bloques</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import ChatGPT from '@/modules/Fisioterapeutas/Dashboard/Schedules/ChatGPT.vue';
import DaySelect from '@/modules/Fisioterapeutas/Dashboard/Schedules/DaySelect.vue';
import Header from '@/modules/UI/DashboardHeaders.vue';
import Indications from '@/modules/UI/DashboardIndications.vue';

export default {
  components: {
    DaySelect,
    //  ChatGPT,
    Header,
    Indications
  },
  data() {
    return {
      selectedHour: '',
      hours: Array.from({ length: 19 }, (_, i) => `${i + 5}:00`),
      title: 'Crea tu Horario',
      subtitle: 'Por Ubicación - Día - Hora',
      mainIndication: 'Por favor elige tus bloques disponibles en la semana, por día, hora de inicio y hora de finalización.',
      subIndication: 'Puedes agregar distintos horarios en distintas ubicaciones'
    };
  },
};
</script>
<style scoped>
#start {
  width: 150px;
}
#end {
  width: 150px;
}
</style>