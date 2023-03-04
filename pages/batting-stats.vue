<script setup>
import { useRouteQuery } from "@vueuse/router";
const stats = ref([]);
const { data } = await useAsyncData(() =>
  queryContent("stats")
    .where({ _id: "content:stats:player_batting_stats.csv" })
    .without([
      "player ID",
      "league_name",
      "vorp",
      "team_abbr",
      "league_abbr",
      "league_name",
      "league_level_id",
      "bbrefid",
      "bbrefminorid",
      "OOTP pID",
      "team ID",
    ])
    .findOne()
);
syncRef(data, stats, {
  direction: "ltr",
  transform: {
    ltr: (left) => left.body,
  },
});
const cols = Object.values(useBattingColumns());
const gridApi = shallowRef();
const columnApi = shallowRef();

const sizeGrid = () => {
  columnApi.value.autoSizeAllColumns();
};

const handleGridReady = (params) => {
  gridApi.value = params.api;
  columnApi.value = params.columnApi;
  sizeGrid();
};

const searchQuery = useRouteQuery("search", "");

watch(searchQuery, () => {
  gridApi.value?.setQuickFilter(searchQuery.value);
});
</script>

<template>
  <div class="flow-layout">
    <BaseGridSearch v-model="searchQuery" />
    <BaseGrid :column-defs="cols" :row-data="stats" @grid-ready="handleGridReady" />
  </div>
</template>
