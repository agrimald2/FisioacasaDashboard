<template>
  <FisioterapeutasLayout>
    <Header :title="title" :subtitle="subtitle" />
    <div v-if="status == 0" class="row">
      <div class="col-12 col-md-4">
        <div class="card mb-4 mb-xl-0 orange-border">
          <div class="card-body text-center">
            <Validate />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <AppointmentInfo />
      </div>
    </div>
    <div v-else class="col-12">
      <AppointmentInfo />
    </div>

    <SeeHistory />
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from '@/layouts/Fisioterapeutas';
import Header from '@/modules/UI/DashboardHeaders.vue';
import Validate from '@/modules/Fisioterapeutas/Dashboard/Appointments/Details/ValidateAppointment.vue';
import AppointmentInfo from '@/modules/Fisioterapeutas/Dashboard/Appointments/Details/AppointmentInfo.vue';
import SeeHistory from '@/modules/Fisioterapeutas/Dashboard/Appointments/Details/SeeHistory.vue';

export default {
  name: 'AppointmentDetail',

  components: {
    FisioterapeutasLayout,
    Header,
    Validate,
    AppointmentInfo,
    SeeHistory,
  },

  data() {
    return {
      title: 'DETALLES DE LA CITA',
      subtitle: 'Encontrarás toda la información referente',
      mainIndication: '',
      // 0 -> Not Validated
      // 1 -> Validated
      status: 1   ,
    };
  },
};
</script>

<style scoped>
.date {
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>