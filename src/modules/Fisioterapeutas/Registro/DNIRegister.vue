<template>
  <GuestLayout>
    <div class="row pre_container">
      <div class="row center mb-3">
        <img src="../../../assets/images/logoHorizontalWhite.png" alt="" />
      </div>
      <div class="row center">
        <div class="row register_container center">
          <div class="row">
            <h6 style="text-align: center" class="mt-1 mb-2">Ingresa tu DNI</h6>
          </div>
          <div class="row">
            <input class="form-control" type="tel" placeholder="DNI" aria-label="default input example" />
            <button class="btn btn-next mt-3">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>

<script>
import GuestLayout from '@/layouts/Guest';

export default {
  name: 'Dashboard',

  components: {
    GuestLayout,
  },
};
</script>

<style scoped>
.pre_container {
  --bs-gutter-x: 0rem !important;
}
body {
  overflow-x: hidden;
}
img {
  width: 80%;
}
.register_container {
  height: 100%;
  width: 30vh;
  border: 1px solid grey;
  border-radius: 5%;
  background-color: whitesmoke;
}
.btn-next {
  background-color: #ed6c14;
  color: white;
}
</style>