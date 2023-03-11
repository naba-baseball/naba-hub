<script setup>
const { data } = await useAsyncData(() =>
  queryContent("stats").where({ title: "Metadata" }).findOne()
);
</script>
<template>
  <div class="text-secondary" v-if="data">
    <span class="">Last Updated: </span> <span class=""> {{ data.updated }} </span>
  </div>
</template>
