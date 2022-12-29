<script setup>
const { data } = await useAsyncData(() =>
  queryContent("stats").where({ title: "Metadata" }).findOne()
);
</script>
<template>
  <div v-if="data"><b>Last Updated: </b> {{ data.updated }}</div>
</template>
