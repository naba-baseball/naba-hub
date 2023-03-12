<script lang="ts" setup>
import { AgGridVue } from 'ag-grid-vue3' // the AG Grid Vue Component
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
const props = defineProps({
  ...AgGridVue.props,
})
const emit = defineEmits(['gridReady'])
const compactWidth = 80
const normalWidth = 120
const compact = isTableCompact()
const fullWidth = isTableFullWidth()
const gridApi = shallowRef()
const columnApi = shallowRef()
defineExpose({ gridApi, columnApi })
const defaultColumn = ref({
  resizable: true,
  sortable: true,
  minWidth: compact.value ? compactWidth : normalWidth,
})
watch(
  [compact, fullWidth],
  ([compactVal]) => {
    if (compactVal)
      defaultColumn.value.minWidth = compactWidth

    else
      defaultColumn.value.minWidth = normalWidth
  },
  { flush: 'post' },
)

function handleGridReady(params) {
  gridApi.value = params.api
  columnApi.value = params.columnApi
  emit('gridReady', params)
}
const classes = computed(() => {
  return {
    'compact': compact.value,
    'full-width w-full absolute left-0': fullWidth.value,
  }
})
</script>

<template>
  <ClientOnly v-if="AgGridVue">
    <AgGridVue
      class="ag-theme-alpine h-[700px] border-primary rounded overflow-hidden [&_.ag-root-wrapper]:border-none"
      :class="classes"
      v-bind="{
        ...props,
        defaultColDef: defaultColumn,
        onGridReady: handleGridReady,
        suppressColumnVirtualisation: true,
      }"
    />
  </ClientOnly>
</template>

<style>
.ag-theme-alpine {
  --ag-even-row-background-color: var(--bg-surface);
  --ag-odd-row-background-color: var(--bg-surface);
  --ag-header-background-color: var(--bg-surface);
  --ag-border-color: var(--border-primary);
  --ag-secondary-border-color: var(--border-primary);
}
.ag-theme-alpine .ag-header-cell-text {
  text-transform: uppercase;
}
.ag-theme-alpine.compact {
  --ag-font-family: inherit;
  --ag-grid-size: 3px;
  /* --ag-row-height: 20px; */
  /* --ag-list-item-height: 14px;
  --ag-row-height: 14px */
}
</style>
