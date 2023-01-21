<template>
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-left ms-3" id="sidenav-main">
    <div class="sidenav-header">
      <i
        class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="navbar-brand m-0 text-center" href="#">
        <img
          src="https://www.tsensor.online/wp-content/uploads/2020/04/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png"
          alt=""
        />
        <span class="ms-1 font-weight-bold">Ricardo Bullon </span>
      </a>
    </div>
    <hr class="horizontal dark mt-0" />
    <div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/fisio/dashboard">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'fisio.appointments' }">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Citas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'fisio.patients' }">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Citas</span>
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Mi perfil</h6>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/profile">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Mi Perfil</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/schedules">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Horarios</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/prices">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Precios</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/locations">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Ubicaciones</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidenav-footer mx-3 mt-3 pt-3">
      <div class="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
        <div class="full-background" :style="{ backgroundImage: 'url(\'' + require('@/assets/images/white-curved.jpeg') + '\')' }"></div>
        <div class="card-body text-left p-3 w-100">
          <a href="#" target="_blank" class="btn btn-white btn-sm w-100 mb-2">Funciona</a>
          <a href="#" target="_blank" class="btn btn-white btn-sm w-100 mb-2">Quiénes Somos?</a>
          <a href="#" target="_blank" class="btn btn-white btn-sm w-100 mb-2">T&C</a>
          <a href="#" target="_blank" class="btn btn-white btn-sm w-100 mb-2">Contacto</a>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
import AppConfig from '@/config/app.js';

export default {
  name: 'Sidenav',

  data() {
    return {
      appName: AppConfig.APP_NAME,
    };
  },
};
</script>

<style scoped>
@media (max-width: 721px) {
  .sidenav {
    display: none !important;
  }
}
</style>