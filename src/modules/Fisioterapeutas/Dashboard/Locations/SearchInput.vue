<template>
  <div>
    <div class="form-group">
      <div class="row">
        <div class="col-12 col-md-6">
          <label for="search-input">NOMBRE DE LA UBICACIÓN</label>
          <input id="search-input" v-model="search" type="text" class="form-control" placeholder="Nombre" />
        </div>
        <div class="col-12 col-md-6">
          <label for="search-input">DIRECCIÓN DE LA UBICACIÓN</label>
          <input id="search-input" v-model="search" type="text" class="form-control" placeholder="Ingresa una ubicación" />
        </div>
      </div>
    </div>
    <div ref="map" class="map"></div>
    <button @click="saveLocation" class="btn bg-orange">Agregar Ubicación</button>
  </div>
</template>

<script>
export default {};
</script>
