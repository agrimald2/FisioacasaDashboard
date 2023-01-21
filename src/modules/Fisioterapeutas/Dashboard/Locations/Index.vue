<template>
  <FisioterapeutasLayout>
    <div class="row">
      <CreateLocations />
    </div>
    <div class="row">
      <SeeLocations />
    </div>
    <div class="row">
      <ChatGPT />
    </div>
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from '@/layouts/Fisioterapeutas';
import CreateLocations from '@/modules/Fisioterapeutas/Dashboard/Locations/CreateLocation.vue';
import SeeLocations from '@/modules/Fisioterapeutas/Dashboard/Locations/SeeLocation.vue';
import ChatGPT from '@/modules/Fisioterapeutas/Dashboard/Schedules/ChatGPT.vue';

export default {
  name: 'Schedules',

  components: {
    FisioterapeutasLayout,
    CreateLocations,
    SeeLocations,
    ChatGPT,
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