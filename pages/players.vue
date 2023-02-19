<script lang="ts" setup>
const { data } = await useLazyFetch("/api/players");
</script>

<template>
  Hello!
  <table>
    <thead>
      <tr>
        <td>Last Name</td>
        <td>First Name</td>
        <td>Team</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <td>
          {{ row.last_name }}
        </td>
        <td>{{ row.first_name }}</td>
        <td>{{ row.team_id }}</td>
      </tr>
    </tbody>
  </table>
</template>
