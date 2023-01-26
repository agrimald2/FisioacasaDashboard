// Import Modules
const dashboard = () => import('@/modules/Dashboard');
const users = () => import('@/modules/Users');
const fisioterapeutasDNIRegister = () => import('@/modules/Fisioterapeutas/Registro/DNIRegister.vue');
const fisioterapeutasPreRegister = () => import('@/modules/Fisioterapeutas/Registro/PreRegister.vue');
const fisioterapeutasDashboard = () => import('@/modules/Fisioterapeutas/Dashboard/Index.vue');
const fisioterapeutasProfile= () => import('@/modules/Fisioterapeutas/Dashboard/Profile/Index.vue');
const fisioterapeutasSchedules = () => import('@/modules/Fisioterapeutas/Dashboard/Schedules/Index.vue');
const fisioterapeutasLocations = () => import('@/modules/Fisioterapeutas/Dashboard/Locations/Index.vue');
const fisioterapeutasPrices = () => import('@/modules/Fisioterapeutas/Dashboard/Prices/Index.vue');
const fisioterapeutasAppointments= () => import('@/modules/Fisioterapeutas/Dashboard/Appointments/Index.vue');
const fisioterapeutasAppointmentDetails= () => import('@/modules/Fisioterapeutas/Dashboard/Appointments/Details/Index.vue');


// Export
export default [
  // Dashboard
  {
    path: '/admin/dashboard',
    component: dashboard,
    name: 'admin.dashboard',
    meta: {
      // auth: true,
      breadCrumb: [{ name: 'Dashboard', link: 'admin.dashboard' }],
    },
  },

  // Users
  {
    path: '/admin/users',
    component: users,
    name: 'admin.users',
    meta: {
      // auth: true,
      breadCrumb: [{ name: 'Users', link: 'admin.users' }],
    },
  },

  // Fisioterapeutas
  {
    path: '/fisio/registerDNI',
    component: fisioterapeutasDNIRegister,
    name: 'fisio.registerDNI',
  },
  {
    path: '/fisio/preRegister',
    component: fisioterapeutasPreRegister,
    name: 'fisio.preRegister',
  },
  {
    path: '/fisio/dashboard',
    component: fisioterapeutasDashboard,
    name: 'fisio.dashboard',
  },
  {
    path: '/fisio/profile',
    component: fisioterapeutasProfile,
    name: 'fisio.profile',
  },
  {
    path: '/fisio/schedules',
    component: fisioterapeutasSchedules,
    name: 'fisio.schedules',
  },
  {
    path: '/fisio/locations',
    component: fisioterapeutasLocations,
    name: 'fisio.locations',
  },
  {
    path: '/fisio/prices',
    component: fisioterapeutasPrices,
    name: 'fisio.prices',
  },
  {
    path: '/fisio/patients',
    component: fisioterapeutasPrices,
    name: 'fisio.patients',
  },
  {
    path: '/fisio/appointments',
    component: fisioterapeutasAppointments,
    name: 'fisio.appointments',
  },
  {
    path: '/fisio/appointments/1',
    component: fisioterapeutasAppointmentDetails,
    name: 'fisio.appointments.details',
  },

];
