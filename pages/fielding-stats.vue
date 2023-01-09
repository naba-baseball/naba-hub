<script setup>
import { useRouteQuery } from "@vueuse/router";
const stats = ref([]);
const { data } = await useAsyncData(() =>
  queryContent("stats")
    .where({ _id: "content:stats:player_fielding_stats.csv" })
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
const fieldingCols = useFieldingColumns();
const gridApi = ref();
const columnApi = ref();

const sizeGrid = () => {
  columnApi.value.autoSizeAllColumns();
};

const searchQuery = useRouteQuery("search", "");

const handleGridReady = (params) => {
  gridApi.value = params.api;
  columnApi.value = params.columnApi;
  sizeGrid();
  syncSearchToQuery();
};
function syncSearchToQuery() {
  gridApi.value.setQuickFilter(searchQuery.value);
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
          v-model="searchQuery"
          @input="syncSearchToQuery"
        />
      </div>
      <span class="ml-4">
        <StatsDateUploaded class="inline" />
      </span>
    </div>
    <BaseGrid
      :column-defs="Object.values(fieldingCols)"
      :row-data="stats"
      @grid-ready="handleGridReady"
    />
  </div>
</template>
