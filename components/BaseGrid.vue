<script setup>
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const props = defineProps({
  ...AgGridVue.props,
});
const defaultColumn = {
  resizable: true,
  sortable: true,
};
</script>
<template>
  <ClientOnly>
    <AgGridVue
      v-bind="props"
      class="ag-theme-alpine h-[700px]"
      :default-col-def="defaultColumn"
      style="--ag-font-family: inherit"
    />
  </ClientOnly>
</template>
