<template>
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">{{title}}</p>
            <h6 class="font-weight-bolder mb-0">{{description}}</h6>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ['title', 'description'],
}
</script>