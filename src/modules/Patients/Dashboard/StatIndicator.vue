<template>
  <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">
                {{ Indicator }}
              </p>
              <h5 class="font-weight-bolder mb-0">
                {{ Symbol }}  {{ Qty }}
                <span class="text-success text-sm font-weight-bolder">
                    
                </span>
              </h5>
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
              <i class="far fa-money-bill-alt text-lg opacity-10 text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Indicator: { type: String, required: true },
    Symbol: { type: String, required: true },
    Qty: { type: String, required: true },
  },
};
</script>