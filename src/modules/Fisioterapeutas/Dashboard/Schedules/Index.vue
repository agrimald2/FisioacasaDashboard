<template>
  <FisioterapeutasLayout>
    <div class="row">
      <CreateSchedules />
    </div>
    <div class="row">
      <SeeSchedules />
    </div>
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from '@/layouts/Fisioterapeutas';
import CreateSchedules from '@/modules/Fisioterapeutas/Dashboard/Schedules/CreateSchedules.vue';
import SeeSchedules from '@/modules/Fisioterapeutas/Dashboard/Schedules/SeeSchedules.vue';

export default {
  name: 'Schedules',

  components: {
    FisioterapeutasLayout,
    CreateSchedules,
    SeeSchedules,
  },

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    deleteItem() {
      // Add code here to delete the item from the database or data source
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
</style>