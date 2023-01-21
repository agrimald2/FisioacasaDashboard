<template>
  <Header :title="title" :subtitle="subtitle" />

  <div class="col-12 card">
    <div class="card mb-2 mb-xl-0">
      <div class="card-body row">
        <div class="col-6 col-md-2">
          <div class="btn bg-orange">Casa 1</div>
        </div>
        <div class="col-6 col-md-2">
          <div class="btn bg-orange">Casa 2</div>
        </div>
        <div class="col-6 col-md-2">
          <div class="btn bg-orange">Casa 3</div>
        </div>
        <div class="col-6 col-md-2">
          <div class="btn bg-orange">Casa 4</div>
        </div>
        <div class="col-6 col-md-2">
          <div class="btn bg-orange">Casa 5</div>
        </div>
        <div class="col-6 col-md-2">
          <div class="btn bg-orange">Casa 6</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/modules/UI/DashboardHeaders.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      title: 'Ver Ubicaciones',
      subtitle: 'Puedes eliminar una ubicación haciendo click en ella',
    };
  },
};
</script>