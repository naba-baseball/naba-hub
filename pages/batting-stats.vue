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
  transform: {
    ltr: (left) => left.body,
  },
});
const defaultColumn = {
  resizable: true,
  sortable: true,
};
const battingCols = useBattingColumns();

const gridApi = ref();
const columnApi = ref();

const sizeGrid = () => {
  columnApi.value.autoSizeAllColumns();
};

const handleGridReady = (params) => {
  gridApi.value = params.api;
  columnApi.value = params.columnApi;
  sizeGrid();
};

const router = useRouter();
const query = reactive({
  search: useRoute().query.search || "",
});
watch(query, (query) => {
  //we don't wanna manipulate the route its technically not cached by the sw so won't work offline
  if (!useOnline().value) {
    router.replace({query: undefined})
    return;
  }
  router.replace({ query: { search: query.search } });
});
function search() {
  gridApi.value.setQuickFilter(query.search);
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
          v-model="query.search"
          @input="search"
        />
      </div>
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
