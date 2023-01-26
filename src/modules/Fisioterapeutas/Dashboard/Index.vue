<template>
  <FisioterapeutasLayout>
    <div class="row" v-if="status == 2">
      <!-- Stadistics-->
      <Stadistics />
      <!-- Appointments-->
      <div class="row my-4">
        <PendingAppointments />
        <PastAppointments />
      </div>
      <!-- News -->
      <div class="row my-4">
        <h4>Novedades y Consejos</h4>
        <News />
      </div>
    </div>

    <div class="row" v-else-if="status == 0" style="--bs-gutter-x: 0.75rem">
      <h5 style="text-align: center">Por favor, <i>completa tus datos</i> para proceder al siguiente paso</h5>
      <hr class="hr-orange" />
      <EditProfile />
    </div>

    <div class="row" v-else-if="status == 1" style="--bs-gutter-x: 0.75rem">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="jumbotron text-center">
              <h1 class="display-4">¡Muchas gracias!</h1>
              <p class="lead">Tu información ha sido recibida y será validada.</p>
              <hr class="my-4" />
              <h1><i class="fa-solid fa-clock" style="color: #ed6c14"></i></h1>
              <h5 class="mt-2 mb-4">Pronto recibirás un mensaje de confirmación y podrás seguir con lo siguiente pasos.</h5>
              <a class="btn btn-primary btn-lg bg-orange" href="/" role="button">CONTACTO</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-else-if="status == 3" style="--bs-gutter-x: 0.75rem">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="jumbotron text-center">
              <h1 class="display-4">Lo sentimos :/</h1>
              <p class="lead">No cuenta con el perfil necesario para ser parte de unestro equipo</p>
              <hr class="my-4" />
              <h1><i class="fa-solid fa-clock" style="color: #ed6c14"></i></h1>
              <h5 class="mt-2 mb-4">Por favor, revisa los documentos o subidos o ponte en contacto con nosotros si necesitas ayuda</h5>
              <a class="btn btn-primary btn-lg bg-orange" href="/" role="button">CONTACTO</a>
              <a class="btn btn-primary btn-lg bg-blue profile" href="/" role="button">MI PERFIL</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from '@/layouts/Fisioterapeutas';
import Stadistics from '@/modules/Fisioterapeutas/Dashboard/Dashboard/Stadistics.vue';
import PendingAppointments from '@/modules/Fisioterapeutas/Dashboard/Dashboard/PendingAppointments.vue';
import PastAppointments from '@/modules/Fisioterapeutas/Dashboard/Dashboard/PastAppointments.vue';
import News from '@/modules/Fisioterapeutas/Dashboard/Dashboard/News.vue';
import EditProfile from '@/modules/Fisioterapeutas/Dashboard/Profile/Edit.vue';

export default {
  name: 'Dashboard',

  components: {
    FisioterapeutasLayout,
    Stadistics,
    PastAppointments,
    PendingAppointments,
    News,
    EditProfile,
  },

  data() {
    return {
      /*
      PreRegister       -> 0
      DocumentsUploaded -> 1 
      Aproved           -> 2
      Denegal           -> 3
      */
      status: 2,
    };
  },
};
</script>

<style scoped>
.profile {
  margin-left: 2rem;
}
@media (max-width: 721px) {
  .profile {
    margin-left: 0rem;
  }
}
</style>