<script setup>
const emit = defineEmits(['update:model-value'])
function reload() {
  location.reload();
}
function close(){
    emit('update:model-value', false)
}
</script>
<template>
  <div class="flex-col inline-flex">
    <div class="alert flex-col sm:flex-row">
      <div>
        <div>
          <h3 class="font-bold">Update Available!</h3>
          <div class="text-sm">Refresh or click here to see new stuff</div>
        </div>
      </div>
      <div class="flex-none">
        <button @click="reload" class="btn btn-sm">Update</button>
        <button @click="close" class="btn btn-outline btn-sm">Later</button>
      </div>
    </div>
  </div>
</template>

<style></style>
