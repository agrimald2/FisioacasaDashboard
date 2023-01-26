<template>
  <Header :title="title" :subtitle="subtitle" />
  <Indications :mainIndication="mainIndication" :subIndication="subIndication" />

  <div class="col-12 col-md-8">
    <div class="card mb-2 mb-xl-0">
      <div class="card-body text-center">
        <SearchInput />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/modules/UI/DashboardHeaders.vue';
import SearchInput from '@/modules/Fisioterapeutas/Dashboard/Locations/SearchInput.vue';
import Indications from '@/modules/UI/DashboardIndications.vue';

export default {
  components: {
    Header,
    SearchInput,
    Indications,
  },
  data() {
    return {
      title: 'Agrega Ubicaciones',
      subtitle: 'Busca la dirección exacta en Google Maps',
      mainIndication: 'Agrega tus ubicaciones más frecuentes',
      subIndication:
        'Elige las zonas dónde quisieras ofrecer tus servicios en un radio de hasta 7KM. Ejemplo: Tu domicilio, Centro de trabajo, etc.',
    };
  },
};
</script>