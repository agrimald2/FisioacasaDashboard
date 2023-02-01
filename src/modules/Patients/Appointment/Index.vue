<template>
  <PatientLayout>
    <Header :title="'Agenda tu cita'" :subtitle="'Selecciona tu Fisioterapeuta, Día y Hora'" />

    <Indications :mainIndication="''" :subIndication="'B'" />
    <PastFisioQuestion v-if="step == 0" />
    <LocationSelect v-else-if="step == 1" />
    <CalendarDaySelection />
  </PatientLayout>
</template>
<script>
import PatientLayout from '@/layouts/Patient';
import Header from '@/modules/UI/DashboardHeaders.vue';
import Indications from '@/modules/UI/DashboardIndications.vue';
import PastFisioQuestion from './PastFisioQuestion.vue';
import LocationSelect from './LocationSelect.vue';
import CalendarDaySelection from './CalendarDaySelection.vue';

export default {
  components: {
    PatientLayout,
    Header,
    PastFisioQuestion,
    Indications,
    LocationSelect,
    CalendarDaySelection,
  },
  data() {
    return {
      /*STEPS
    0 -> QUESTION ¿QUIERES AGENDARTE CON ALGUNO NUEVAMENTE?
    1 -> LOCATION - UBICACIÓN
    2 -> 
    */
      step: 1,
    };
  },
};
</script>