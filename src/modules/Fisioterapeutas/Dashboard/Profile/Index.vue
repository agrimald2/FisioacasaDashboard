<template>
  <FisioterapeutasLayout>
    <Header :title="title" :subtitle="subtitle" />
    <div class="row" style="--bs-gutter-x: 0.75rem">
      <div class="col-md-4 col-12">
        <Photo />
      </div>
      <div class="col-md-8 col-12 personal_right">
        <Personal />
        <div class="row mt-2">
          <button class="btn btn-next mt-3">GUARDAR</button>
        </div>
      </div>
    </div>
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from '@/layouts/Fisioterapeutas';
import Personal from '@/modules/Fisioterapeutas/Dashboard/Profile/PersonalInfo.vue';
import Photo from '@/modules/Fisioterapeutas/Dashboard/Profile/Photo.vue';
import Header from '@/modules/UI/DashboardHeaders.vue';

export default {
  name: 'Dashboard',

  components: {
    FisioterapeutasLayout,
    Photo,
    Personal,
    Header,
  },

  data() {
    return {
      title: 'TU PERFIL',
      subtitle: 'Acá podrás ver y editar tu información',
    };
  },
};
</script>
