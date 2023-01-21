<template>
  <div class="col-3 center" v-for="day in weekdays" :key="day">
    <div class="row">
      <label class="toggler-wrapper style-7 days_label">
        <input type="checkbox" v-model="selectedWeekdays" :value="day" @change="onChange" />
        <div class="toggler-slider mb-3">
          <div class="toggler-knob"></div>
        </div>
        <div class="row mt-4 text-center" style="text-transform: uppercase">{{ day }}</div>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},

  data() {
    return {
      selectedWeekdays: [],
      weekdays: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    };
  },
  methods: {
    onChange() {
      console.log(this.selectedWeekdays);
    },
  },
};
</script>
<style scoped>
.toggler-wrapper {
  display: block;
  width: 45px;
  height: 25px;
  cursor: pointer;
  position: relative;
}

.toggler-wrapper input[type='checkbox'] {
  display: none;
}

.toggler-wrapper input[type='checkbox']:checked + .toggler-slider {
  background-color: #ed6c14;
}

.toggler-wrapper .toggler-slider {
  background-color: #ccc;
  position: absolute;
  border-radius: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.toggler-wrapper .toggler-knob {
  position: absolute;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.toggler-wrapper.style-7 input[type='checkbox']:checked + .toggler-slider {
  background-color: white;
}

.toggler-wrapper.style-7 input[type='checkbox']:checked + .toggler-slider .toggler-knob {
  left: calc(100% - 19px - 3px);
  background-color: #ed6c14;
}

.toggler-wrapper.style-7 .toggler-slider {
  background-color: white;
  -webkit-box-shadow: 2px 4px 8px rgba(200, 200, 200, 0.5);
  box-shadow: 2px 4px 8px rgba(200, 200, 200, 0.5);
  border-radius: 5px;
}

.toggler-wrapper.style-7 .toggler-knob {
  width: calc(25px - 6px);
  height: calc(25px - 6px);
  border-radius: 5px;
  left: 3px;
  top: 3px;
  background-color: #e6e6e6;
}
.days_label {
  margin-top: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
}
.col-3 {
}
</style>