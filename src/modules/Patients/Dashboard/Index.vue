<template>
  <PatientLayout>
    <h2>Bienvenido Carlos,</h2>
    <h5>Tus Indicadores</h5>
    <StatIndicator :Indicator="'Bienestar'" :Symbol="'%'" :Qty="'50'" />
    <StatIndicator :Indicator="'Bienestar'" :Symbol="'%'" :Qty="'50'" />
    <StatIndicator :Indicator="'Bienestar'" :Symbol="'%'" :Qty="'50'" />
    <StatIndicator :Indicator="'Bienestar'" :Symbol="'%'" :Qty="'50'" />

    <div class="row my-4">
      <PendingAppointments />
      <PastAppointments />
    </div>

    <Header :title="'ACCIONES'" :subtitle="'Accede rapidamente a las acciones dentro del sistema+'" />
    <Links />
  </PatientLayout>
</template>
<script>
import PatientLayout from '@/layouts/Patient';
import StatIndicator from './StatIndicator.vue';
import Links from './Links.vue';
import Header from '@/modules/UI/DashboardHeaders.vue';
import PendingAppointments from './PendingAppointments.vue';
import PastAppointments from './PastAppointments.vue';
export default {
  components: {
    PatientLayout,
    StatIndicator,
    Links,
    Header,
    PastAppointments,
    PendingAppointments
  },
};
</script>