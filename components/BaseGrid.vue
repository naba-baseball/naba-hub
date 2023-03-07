<script setup>
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.min.css";

const classes = computed(() => (useDarkTheme().value ? "ag-theme-alpine-dark" : "ag-theme-alpine"));

const props = defineProps({
  ...AgGridVue.props,
});
const defaultColumn = {
  resizable: true,
  sortable: true,
};
</script>
<template>
  <ClientOnly v-if="AgGridVue">
    <AgGridVue
      v-bind="props"
      :class="`${classes} h-[700px] absolute left-0 w-full`"
      :default-col-def="defaultColumn"
      style="--ag-font-family: inherit"
    />
  </ClientOnly>
</template>
