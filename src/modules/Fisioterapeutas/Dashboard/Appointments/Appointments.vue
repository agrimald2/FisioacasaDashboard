<template>
  <div class="card-body px-0 pt-0 pb-2">
    <div class="table-responsive p-0">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Paciente</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Dirección</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fecha y Hora</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Precio</th>
            <th class="text-secondary opacity-7"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="appointment in appointments" :key="appointment.id">
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{ appointment.patient.name }}</h6>
                  <p class="text-xs text-secondary mb-0">{{ appointment.patient.phone }}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">{{ appointment.location.distric }}</p>
              <p class="text-xs text-secondary mb-0">{{ appointment.location.addres }}</p>
            </td>
            <td class="align-middle text-center text-sm">
              <span v-if="appointment.status == 1" class="badge badge-sm bg-gradient-success">Confirmada</span>
              <span v-else-if="appointment.status == 2" class="badge badge-sm bg-gradient-success">Cancelada</span>
              <span v-else-if="appointment.status == 3" class="badge badge-sm bg-gradient-success">Atendida</span>
            </td>
            <td class="align-middle text-center">
              <h6 class="text-secondary text-xs font-weight-bold date">{{ appointment.date }} a las {{ appointment.schedule.startTime }}</h6>
            </td>
            <td class="align-middle text-center">
              <h6 class="text-secondary text-xs font-weight-bold date">S/150</h6>
            </td>
            <td class="align-middle">
              <button class="btn bg-orange">VER</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      appointments: [
        {
          id: '1',
          patient: {
            name: 'Alonso Grimaldo',
            phone: '934094501',
          },
          location: {
            distric: 'Surco',
            addres: 'Madre Selva 121',
          },
          status: 1,
          date: '23/01',
          weekday: 'Lunes',
          schedule: {
            location: 'CASA 1',
            startTime: '10:00',
            endTime: '11:00',
          },
          price: '150',
        },
        {
          id: '2',
          patient: {
            name: 'Sebastian Soto',
            phone: '945781234',
          },
          location: {
            distric: 'San Borja',
            addres: 'Jr. Tasso 469',
          },
          status: 1,
          date: '24/01',
          weekday: 'Martes',
          schedule: {
            location: 'CASA 1',
            startTime: '10:00',
            endTime: '11:00',
          },
          price: '170',
        },
      ],
    };
  },
};
</script>