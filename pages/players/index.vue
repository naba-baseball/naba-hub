<script lang="ts" setup>
const { data } = useNuxtData("players");
await useLazyFetch("/api/players", {
  key: "players",
});
</script>

<template>
  <h1 class="text-3xl font-bold">Players {{ data.total }}</h1>
  <table class="table">
    <thead>
      <tr>
        <td>Last Name</td>
        <td>First Name</td>
        <td>Team</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data.data" class="hover">
        <td>
          {{ row.last_name }}
        </td>
        <td>{{ row.first_name }}</td>
        <td>{{ row.team?.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
