<script setup>
const { data } = await useAsyncData(() =>
  queryContent('stats').where({ title: 'Metadata' }).findOne(),
)
</script>

<template>
  <div v-if="data" class="text-secondary">
    <span class="">Last Updated: </span> <span class=""> {{ data.updated }} </span>
  </div>
</template>
