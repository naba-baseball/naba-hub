<script setup>
import { AgGridVue } from "@ag-grid-community/vue3"; // the AG Grid Vue Component
import { ModuleRegistry } from "@ag-grid-community/core"; // @ag-grid-community/core will always be implicitly available
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
]);

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
