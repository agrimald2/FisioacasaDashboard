<template>
  <Header :title="title" :subtitle="subtitle" />
</template>
<script>
import Header from '@/modules/UI/DashboardHeaders.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      title: 'Crea tus paquetes',
      subtitle: 'Pronto podrás crear paquetes de sesiones con precios especiales para fidelizar a tus clientes',
    };
  },
};
</script>