<script setup>
import { AgGridVue } from "@ag-grid-community/vue3"; // the AG Grid Vue Component
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
  transform: { ltr: (left) => left.body },
});
const defaultColumn = {
  resizable: true,
  sortable: true,
  filter: true,
};
const splitIdMap = {
  1: "Overall",
  2: "vs L",
  3: "vs R",
  21: "Playoffs",
};
const battingCols = useBattingColumns();
battingCols.value.split_id.valueFormatter = (params) =>
  splitIdMap[params.value];

const gridApi = ref();
const columnApi = ref();

const sizeGrid = () => {
  columnApi.value.autoSizeAllColumns();
};
const setFilters = () => {
  const splitIdInstance = gridApi.value.getFilterInstance("split_id");
  splitIdInstance.setModel({
    type: "equals",
    filter: "1",
  });
  gridApi.value.onFilterChanged();
};

const handleGridReady = (params) => {
  gridApi.value = params.api;
  columnApi.value = params.columnApi;
  setFilters();
  sizeGrid();
};

const searchValue = ref();
function search() {
  gridApi.value.setQuickFilter(searchValue.value);
}
</script>

<template>
  <div class="flow">
    <div>
      <div class="form-control max-w-md inline-block">
        <label class="label" for="search">
          <span class="label-text">Search</span>
        </label>
        <input
          class="input input-bordered"
          id="search"
          name="search"
          type="text"
          placeholder="Search player name, team, etc"
          v-model="searchValue"
          @input="search"
        />
      </div>
      <span class="ml-4">
        <b>Split Id: </b>
        <span>1 = Overall, 2 = Vs L, 3 = Vs R, 21 = Playoffs</span>
      </span>
      <span class="ml-4">
        <StatsDateUploaded class="inline" />
      </span>
    </div>
    <ClientOnly>
      <AgGridVue
        class="ag-theme-alpine h-[700px]"
        :default-col-def="defaultColumn"
        :column-defs="Object.values(battingCols)"
        :row-data="stats"
        @grid-ready="handleGridReady"
      />
    </ClientOnly>
  </div>
</template>
