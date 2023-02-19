<script lang="ts" setup>
import { useRouteParams } from "@vueuse/router";
const id = Number(useRouteParams("id").value);
const { data } = await useLazyFetch(`/api/players/${id}`, {
  pick: ["first_name", "team"],
});
</script>
<template>
  <h1>Player: {{ data?.first_name }}</h1>
  <h2>Team: {{ data?.team?.name }}</h2>
</template>
