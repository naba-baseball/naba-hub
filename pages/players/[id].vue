<script lang="ts" setup>
import { useRouteParams } from "@vueuse/router";
const id = Number(useRouteParams("id").value);
const { data } = await useLazyFetch(`/api/players/${id}`);
</script>
<template>
  <div>
    <h1>
      {{ data?.first_name }}
    </h1>
    <h2>
      position: {{ data?.position }}
    </h2>
    <ul>
      overall
      <li>
        {{ data?.player_batting?.batting_ratings_overall_strikeouts }}
      </li>
      <li>
        {{ data?.player_batting?.batting_ratings_overall_babip }}
      </li>
      <li>
        {{ data?.player_batting?.batting_ratings_overall_contact }}
      </li>
      <li>
        {{ data?.player_batting?.batting_ratings_overall_eye }}
      </li>
      <li>
        {{ data?.player_batting?.batting_ratings_overall_gap }}
      </li>
      <li>
        {{ data?.player_batting?.batting_ratings_overall_power }}
      </li>
    </ul>
  </div>
</template>
