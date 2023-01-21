<template>
  <div class="row no-pd">
    <div class="col-md-4 col-12">
      <Photo />
    </div>
    <div class="col-md-8 col-12 personal_right">
      <Personal />
    </div>

    <div class="col-md-6 col-12 info_container personal_right">
      <Academic />
    </div>
    <div class="col-md-6 col-12 info_container personal_right">
      <Documentation />
    </div>

    <div class="row mt-2">
      <button class="btn btn-next mt-3">Enviar para revisión</button>
    </div>
  </div>
</template>
<script>
import Personal from '@/modules/Fisioterapeutas/Dashboard/Profile/PersonalInfo.vue';
import Photo from '@/modules/Fisioterapeutas/Dashboard/Profile/Photo.vue';
import Academic from '@/modules/Fisioterapeutas/Dashboard/Profile/AcademicInfo.vue';
import Documentation from '@/modules/Fisioterapeutas/Dashboard/Profile/DocumentationInfo.vue';

export default {
  name: 'Profile',

  components: {
    Personal,
    Photo,
    Academic,
    Documentation,
  },

  data() {
    return {};
  },
};
</script>
<style scoped>
.extra_info {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.info_container {
  padding: 1rem;
}
.pborder {
  border: 1px solid black;
}
.personal_right {
  padding-left: 2.5rem;
}

@media (max-width: 721px) {
  .personal_right {
    padding-right: 0rem;
  }
  .no-pd {
    padding-right: 0;
  }
}
</style>