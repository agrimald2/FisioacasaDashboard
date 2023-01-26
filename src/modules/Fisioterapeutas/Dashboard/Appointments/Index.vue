<template>
  <FisioterapeutasLayout>
    <Header :title="title" :subtitle="subtitle" />
    <div class="card mb-4">
      <Filters />
    </div>
    <div class="card mb-4">
      <Appointments />
    </div>
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from '@/layouts/Fisioterapeutas';
import Filters from '@/modules/Fisioterapeutas/Dashboard/Appointments/Filters.vue';
import Appointments from '@/modules/Fisioterapeutas/Dashboard/Appointments/Appointments.vue';
import Header from '@/modules/UI/DashboardHeaders.vue';

export default {
  name: 'Schedules',

  components: {
    FisioterapeutasLayout,
    Filters,
    Appointments,
    Header,
  },

  data() {
    return {
      title: 'Gestiona tus citas',
      subtitle: 'Puedes filtrar por nombre, ubicación, estato y fechas',
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