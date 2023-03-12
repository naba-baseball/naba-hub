<script setup>
const emit = defineEmits(['update:model-value'])
function reload() {
  location.reload()
}
function close() {
  emit('update:model-value', false)
}
</script>

<template>
  <div class="card card-bordered lg:(inline-flex flex-row gap)">
    <div>
      <h3 class="card-title">
        Update Available!
      </h3>
      <p>
        Click update to see new stuff
      </p>
    </div>
    <div class="space-x">
      <button class="btn btn-primary" @click="reload">
        Update
      </button>
      <button class="btn btn-secondary" @click="close">
        Later
      </button>
    </div>
  </div>
</template>

<style></style>
