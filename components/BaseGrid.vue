<script setup>
import { AgGridVue } from 'ag-grid-vue3' // the AG Grid Vue Component
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const props = defineProps({
  ...AgGridVue.props,
})
const defaultColumn = {
  resizable: true,
  sortable: true,
  width: 90,
}
const gridApi = shallowRef()
const columnApi = shallowRef()

const sizeGrid = () => {
  // columnApi.value.autoSizeAllColumns();
}
function handleGridReady(params) {
  gridApi.value = params.api
  columnApi.value = params.columnApi
  sizeGrid()
}
const isCompact = ref(false)
const isFullWidth = ref(false)
const classes = computed(() => {
  return {
    'compact': isCompact.value,
    'full-width': isFullWidth.value,
  }
})
</script>

<template>
  <ClientOnly v-if="AgGridVue">
    <AgGridVue
      v-bind="props"
      class="ag-theme-alpine h-[700px] border-primary rounded overflow-hidden  [&_.ag-root-wrapper]:border-none"
      :class="classes"
      :default-col-def="defaultColumn"
      @grid-ready="handleGridReady"
    />
  </ClientOnly>
</template>

<style>
.ag-theme-alpine.compact {
  --ag-font-family: inherit;
  --ag-grid-size: 3px;
  /* --ag-row-height: 20px; */
  /* --ag-list-item-height: 14px;
  --ag-row-height: 14px */
}
</style>
