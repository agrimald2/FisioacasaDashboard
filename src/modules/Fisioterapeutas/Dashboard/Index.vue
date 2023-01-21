<template>
  <FisioterapeutasLayout>
    <div class="row" v-if="status == 2">
      <!-- Stadistics-->
      <Stadistics />
      <!-- Appointments-->
      <div class="row my-4">
        <PendingAppointments />
        <PastAppointments />
      </div>
      <!-- News -->
      <div class="row my-4">
        <h4>Novedades y Consejos</h4>
        <News />
      </div>
    </div>

    <div class="row" v-else-if="status == 0" style="--bs-gutter-x: 0.75rem">
      <h5 style="text-align: center">Por favor, <i>completa tus datos</i> para proceder al siguiente paso</h5>
      <hr class="hr-orange" />
      <EditProfile />
    </div>
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from '@/layouts/Fisioterapeutas';
import Stadistics from '@/modules/Fisioterapeutas/Dashboard/Dashboard/Stadistics.vue';
import PendingAppointments from '@/modules/Fisioterapeutas/Dashboard/Dashboard/PendingAppointments.vue';
import PastAppointments from '@/modules/Fisioterapeutas/Dashboard/Dashboard/PastAppointments.vue';
import News from '@/modules/Fisioterapeutas/Dashboard/Dashboard/News.vue';
import EditProfile from '@/modules/Fisioterapeutas/Dashboard/Profile/Edit.vue';

export default {
  name: 'Dashboard',

  components: {
    FisioterapeutasLayout,
    Stadistics,
    PastAppointments,
    PendingAppointments,
    News,
    EditProfile,
  },

  data() {
    return {
      /*
      PreRegister       -> 0
      DocumentsUploaded -> 1 
      Aproved           -> 2
      Denegal           -> 3
      */
      status: 0,
    };
  },
};
</script>

<style scoped>
</style>