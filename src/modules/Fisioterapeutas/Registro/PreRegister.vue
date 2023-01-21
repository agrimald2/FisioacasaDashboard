<template>
  <GuestLayout>
    <div class="row no-row center">
      <div class="row center mb-3">
        <img src="../../../assets/images/logoHorizontalWhite.png" alt="" />
      </div>
      <div class="row center no-row" style="width: 90vw">
        <div class="row pre_container center">
          <div class="row center">
            <div class="row register_container center">
              <div class="col-5 left_side"></div>
              <div class="col-12 col-md-7 right_side">
                <div class="row" style="text-align: center">
                  <h6 style="text-align: center" class="mt-1 mb-2">Datos Personales</h6>
                </div>
                <div class="row mt-2">
                  <label for="dni">DOCUMENTO DE IDENTIDAD</label>
                  <input class="form-control" id="dni" type="tel" placeholder="DNI" aria-label="default input example" />
                </div>
                <div class="row mt-2">
                  <label for="name">NOMBRE COMPLETO</label>
                  <input class="form-control" id="name" type="text" placeholder="NOMBRE COMPLETO" aria-label="default input example" />
                </div>
                <div class="row mt-2">
                  <label for="birthdate">FECHA DE NACIMIENTO</label>
                  <input id="birthdate" class="form-control" type="date" />
                </div>
                <div class="row mt-2">
                  <label for="startDate">SEXO</label>
                  <div class="row center">
                    <div class="wrapper">
                      <input type="radio" name="select" id="option-1" checked />
                      <input type="radio" name="select" id="option-2" />
                      <label for="option-1" class="option option-1">
                        <div class="dot"></div>
                        <span>Masculino</span>
                      </label>
                      <label for="option-2" class="option option-2">
                        <div class="dot"></div>
                        <span>Femenino</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row mt-2">
                  <label for="phone">WHATSAPP (Número Peruano)</label>
                  <input class="form-control" id="phone" type="tel" placeholder="CELULAR" aria-label="default input example" />
                </div>
                <div class="row mt-2">
                  <label for="email">EMAIL</label>
                  <input class="form-control" id="email" type="tel" placeholder="CORREO ELECTRÓNICO" aria-label="default input example" />
                </div>
                <div class="row mt-2">
                  <button class="btn btn-next mt-3">Siguiente</button>
                </div>
              </div>
            </div>
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
.left_side {
  height: 77vh;
  background-size: cover;
  background-image: url('../../../assets/images/fisioterapeuta.png');
  border-radius: 10px;
}
.right_side {
  padding: 1rem 2.5rem;
}
.pre_container {
  --bs-gutter-x: 0rem !important;
}
body {
  overflow-x: hidden;
}
img {
  width: 30%;
}
.register_container {
  height: 100%;
  width: 90vh;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: whitesmoke;
  text-align: center;
  padding-left: 0px;
}
.btn-next {
  background-color: #ed6c14;
  color: white;
}

.wrapper {
  display: inline-flex;
  background: #fff;
  height: 50px;
  width: 200px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 2.5px;
  padding: 10px 7.5px;
  box-shadow: 2.5px 1.5px 15px rgba(0, 0, 0, 0.2);
}
.wrapper .option {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 5px;
  border-radius: 2.5px;
  cursor: pointer;
  padding: 0 5px;
  border: 1px solid lightgrey;
  transition: all 0.3s ease;
}
.wrapper .option .dot {
  height: 10px;
  width: 10px;
  background: #d9d9d9;
  border-radius: 50%;
  position: relative;
}
.wrapper .option .dot::before {
  position: absolute;
  content: '';
  top: 2px;
  left: 2px;
  width: 6px;
  height: 6px;
  background: #00699e;
  border-radius: 25%;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.3s ease;
}
input[type='radio'] {
  display: none;
}
#option-1:checked:checked ~ .option-1,
#option-2:checked:checked ~ .option-2 {
  border-color: #00699e;
  background: #00699e;
}
#option-1:checked:checked ~ .option-1 .dot,
#option-2:checked:checked ~ .option-2 .dot {
  background: #fff;
}
#option-1:checked:checked ~ .option-1 .dot::before,
#option-2:checked:checked ~ .option-2 .dot::before {
  opacity: 1;
  transform: scale(1);
}
.wrapper .option span {
  font-size: 10px;
  color: #808080;
}
#option-1:checked:checked ~ .option-1 span,
#option-2:checked:checked ~ .option-2 span {
  color: #fff;
}

.no-row {
  --bs-gutter-x: 0rem !important;
}

@media (max-width: 721px) {
  .left_side {
    display: none;
  }
  img {
    width: 70%;
  }
}
</style>