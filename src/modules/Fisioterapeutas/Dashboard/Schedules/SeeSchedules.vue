<template>
  <Header :title="title" :subtitle="subtitle" />
  <div class="col-12 card mt-4 mb-4">
    <div class="row">
      <DaySchedule v-for="day in schedule" :key="day.weekday" :day="day.weekday" :schedules="day.schedules" :headerColor="'#00699e'" />
    </div>
  </div>
</template>
<script>
import Header from '@/modules/UI/DashboardHeaders.vue';
import DaySchedule from '@/modules/Fisioterapeutas/Dashboard/Schedules/DaySchedule.vue';

export default {
  components: {
    Header,
    DaySchedule,
  },
  data() {
    return {
      schedule2: [
        { weekday: 'Lunes', schedules: this.getRandomSchedules() },
        { weekday: 'Martes', schedules: this.getRandomSchedules() },
        { weekday: 'Miercoles', schedules: this.getRandomSchedules() },
        { weekday: 'Jueves', schedules: this.getRandomSchedules() },
        { weekday: 'Viernes', schedules: this.getRandomSchedules() },
        { weekday: 'Sabado', schedules: this.getRandomSchedules() },
        { weekday: 'Domingo', schedules: this.getRandomSchedules() },
      ],

      //This is  anschedule Example
      schedule: [
        {
          weekday: 'Lunes',
          schedules: [
            { id: '1', location: 'CASA 1', startTime: '10:00', endTime: '11:00' },
            { id: '2', location: 'CASA 1', startTime: '12:00', endTime: '13:00' },
            { id: '3', location: 'OFICINA 2', startTime: '15:00', endTime: '16:00' },
          ],
        },
        {
          weekday: 'Martes',
          schedules: [{ id: '1', location: 'OFICINA 2', startTime: '15:00', endTime: '16:00' }],
        },
        {
          weekday: 'Miercoles',
          schedules: [
            { id: '1', location: 'CASA 1', startTime: '10:00', endTime: '11:00' },
            { id: '2', location: 'CASA 1', startTime: '12:00', endTime: '13:00' },
          ],
        },
        {
          weekday: 'Jueves',
          schedules: [
            { id: '1', location: 'CASA 1', startTime: '10:00', endTime: '11:00' },
            { id: '2', location: 'CASA 1', startTime: '12:00', endTime: '13:00' },
            { id: '3', location: 'CASA 1', startTime: '14:00', endTime: '15:00' },
            { id: '3', location: 'CASA 1', startTime: '16:00', endTime: '17:00' },

          ],
        },
        {
          weekday: 'Viernes',
          schedules: [
            { id: '1', location: 'CASA 1', startTime: '10:00', endTime: '11:00' },
            { id: '2', location: 'CASA 1', startTime: '12:00', endTime: '13:00' },
            { id: '3', location: 'OFICINA 2', startTime: '15:00', endTime: '16:00' },
          ],
        },
        {
          weekday: 'Sabado',
          schedules: [{ id: '2', location: 'CASA 1', startTime: '12:00', endTime: '13:00' }],
        },
        {
          weekday: 'Domingo',
          schedules: [],
        },
      ],

      title: 'Horario semanal',
      subtitle: 'Haz click sobre un bloque para eliminarlo',
    };
  },
  methods: {
    getRandomSchedules() {
      // Generate an array of random schedules
      let schedules = [];
      for (let i = 0; i < 3; i++) {
        let startHour = Math.floor(Math.random() * 24);
        let startMinute = Math.floor(Math.random() * 60);
        let endHour = Math.floor(Math.random() * 24);
        let endMinute = Math.floor(Math.random() * 60);
        schedules.push({ id: `${i}`, startTime: `${startHour}:${startMinute}`, endTime: `${endHour}:${endMinute}` });
      }
      return schedules;
    },
  },
};
</script>
<style scoped>
</style>