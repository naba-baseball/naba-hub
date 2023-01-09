<script setup>
import { AgGridVue } from "@ag-grid-community/vue3"; // the AG Grid Vue Component

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
    />
  </ClientOnly>
</template>
