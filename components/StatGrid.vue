<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'
const props = defineProps<{ cols: any[]; stats: any[] }>()

const grid = ref()
const searchQuery = useRouteQuery('search', '')
function handleGridReady() {
  grid.value.gridApi.setQuickFilter(searchQuery.value)
}

watch(searchQuery, () => {
  grid.value.gridApi?.setQuickFilter(searchQuery.value)
})
</script>

<template>
  <BaseGridSearch v-model="searchQuery" />
  <BaseGrid ref="grid" :column-defs="cols" :row-data="stats" @grid-ready="handleGridReady" />
</template>
