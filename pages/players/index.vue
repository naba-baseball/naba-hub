<script lang="ts" setup>
import type { Player } from ".prisma/client";
const { data } = await useLazyFetch("/api/players", {
  key: "players",
  default() {
    return {
      data: [] as Player[],
      total: 0,
    };
  },
  query: {
    take: 500,
  }
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
        <td>
          Position
        </td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data.data" class="hover">
        <td>
          {{ row.last_name }}
        </td>
        <td>{{ row.first_name }}</td>
        <td>{{ row.team?.name }}</td>
        <td>
          {{ row.position }}
        </td>
        <td>
          <NuxtLink class="link" :to="`/players/${row.player_id}`"> View </NuxtLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>
