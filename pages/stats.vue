<script setup>
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
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
// const stats = computed(() => data.value?.[0].body);
const stats = data.value.body;
const pitchingHeadersRaw =
  "lastname, firstname, year, split_id, g, gs, pa, ab, h, 2b, 3b, hr, rbi, r, sb, cs, bb, hp, k, sh, sf, gdp, ibb, ci, pitches seen, team_name";
const defaultColumn = {
  resizable: true,
  sortable: true,
  filter: true,
};
const pitchingHeaders = ref(
  pitchingHeadersRaw.split(", ").reduce((map, str) => {
    const col = { field: str };
    map[str] = col;
    return map;
  }, {})
);
pitchingHeaders.value.year.sort = 'desc'
const splitIdMap = {
  1: "Overall",
  2: "vs L",
  3: "vs R",
  21: "Playoffs",
};
pitchingHeaders.value.split_id.valueFormatter = (params) =>
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
  console.log("params", params);
  gridApi.value = params.api;
  columnApi.value = params.columnApi;
  setFilters();
  sizeGrid();
};

const searchValue = ref()
function search(){
  gridApi.value.setQuickFilter(searchValue.value)
}
</script>

<template>
  <div>
    <div class="form-control max-w-xs">
      <label class="label" for="search">
        <span class="label-text">Search</span>
      </label>
      <input
        class="input input-bordered"
        id="search"
        name="search"
        type="text"
        v-model="searchValue"
        @input="search"
      />
    </div>
    <div class="my-2">
      <ClientOnly>
        <AgGridVue
          class="ag-theme-alpine h-[90vh]"
          :default-col-def="defaultColumn"
          :column-defs="Object.values(pitchingHeaders)"
          :row-data="stats"
          @grid-ready="handleGridReady"
        />
      </ClientOnly>
    </div>
  </div>
</template>
