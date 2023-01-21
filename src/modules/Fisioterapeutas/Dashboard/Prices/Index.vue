<template>
  <FisioterapeutasLayout>
    <div class="row">
      <CreateMainPrice />
    </div>
    <div class="row">
      <Packages />
    </div>
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from '@/layouts/Fisioterapeutas';
import CreateMainPrice from '@/modules/Fisioterapeutas/Dashboard/Prices/CreateMainPrice.vue';
import Packages from '@/modules/Fisioterapeutas/Dashboard/Prices/Packages.vue';

export default {
  name: 'Schedules',

  components: {
    FisioterapeutasLayout,
    CreateMainPrice,
    Packages,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>