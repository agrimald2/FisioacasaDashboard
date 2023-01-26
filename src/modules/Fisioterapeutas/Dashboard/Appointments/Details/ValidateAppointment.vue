<template>
  <div>
    <div class="row">
      <h6>
        Scanea el código QR de tu paciente
      </h6>
    </div>
    <div class="row">
        <h1>
            <i class="fa-solid fa-camera"></i>
        </h1>
    </div>
    <div class="mt-4">
      <h6>Ó</h6>
      <form @submit.prevent="validateCode">
        <label for="code">INGRESO MANUAL</label>
          <input id="search-input" v-model="search" type="tel" class="form-control" placeholder="Ingresa aquí el código de cita" />
        <button  class="btn bg-orange mt-2" type="submit">Validar Cita</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: '',
    };
  },
  methods: {
    validateCode() {},
  },
  setup() {},
};
</script>

<style>
#preview {
  background: 1px solid black;
  width: 100%;
  height: 100%;
}
</style>
