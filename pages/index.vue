<script setup>
const cards = [
  { title: "Batting Stats", body: "View batting stats", to: "/batting-stats" },
  { title: "Fielding Stats", body: "View fielding stats", to: "/fielding-stats" },
  { title: "Pitching Stats", body: "View pitching stats", to: "/pitching-stats" },
];
</script>

<template>
  <section class="flow-layout">
    <h1 class="text-3xl font-bold">NABA Hub</h1>
    <div>
      <h2 class="text-2xl font-medium">Stat Viewers</h2>
      <p class="text-secondary">
        View stats across all years of the league for Batting, Fielding, and Pitching
      </p>
    </div>
    <div class="base-grid">
      <div class="card card-bordered" v-for="card in cards">
        <div class="card-title">{{ card.title }}</div>
        <p>{{ card.body }}</p>
        <div class="card-actions">
          <NuxtLink :to="card.to" class="btn btn-primary"> View </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
