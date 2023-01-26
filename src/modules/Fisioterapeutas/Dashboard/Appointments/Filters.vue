<template>
  <div class="row">
    <div class="form-group col-12 col-md-4">
      <label for="search">NOMBRE</label>
      <input type="text" v-model="search" class="form-control" id="search" placeholder="NOMBRE PACIENTE" />
    </div>
    <div class="form-group col-6 col-md-2">
      <label for="location">UBICACION</label>
      <select v-model="location" class="form-control" id="location">
        <option value="">Todas</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
      </select>
    </div>
    <div class="form-group col-6 col-md-2">
      <label for="status">ESTADO</label>
      <select v-model="status" class="form-control" id="status">
        <option value="">Todos</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
    <div class="col-6 col-md-2">
      <div class="form-group">
        <label for="date-range">INICIO</label>
        <input type="date" v-model="dateRange" class="form-control" id="date-range" ref="dateRangePicker" />
      </div>
    </div>
    <div class="col-6 col-md-2">
      <div class="form-group">
        <label for="date-range">FIN</label>
        <input type="date" v-model="dateRange" class="form-control" id="date-range" ref="dateRangePicker" />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="btn bg-blue" style="color:white">
        FILTRAR
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

export default defineComponent({
  setup() {
    const search = ref('');
    const location = ref('');
    const status = ref('');
    const dateRange = ref('');
    onMounted(() => {
      flatpickr('#date-range', { mode: 'range', dateFormat: 'Y-m-d' }, (selectedDates) => {
        dateRange.value = selectedDates;
      });
    });
    return {
      search,
      location,
      status,
      dateRange,
    };
  },
});
</script>
