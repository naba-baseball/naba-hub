<template>
  <section class="flow-layout">
    <h1 class="text-3xl font-bold">NABA Hub</h1>
    <div class="base-grid">
      <div class="card card-bordered">
        <div class="card-title">Batting Stats</div>
        <p class="card-body">
          Search batting stats for all players across all years of the league
        </p>
        <div class="card-actions">
          <NuxtLink to="/batting-stats/" class="btn btn-primary">View</NuxtLink>
        </div>
      </div>
      <div class="card card-bordered">
        <div class="card-title">Fielding Stats</div>
        <p class="card-body">
          Search fielding stats for all players across all years of the league
        </p>
        <div class="card-actions">
          <NuxtLink to="/fielding-stats/" class="btn btn-primary"
            >View</NuxtLink
          >
        </div>
      </div>
      <div class="card card-bordered">
        <div class="card-title">Pitching Stats</div>
        <p class="card-body">
          Search pitching stats for all players across all years of the league
        </p>
        <div class="card-actions">
          <NuxtLink to="/pitching-stats/" class="btn btn-primary"
            >View</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>