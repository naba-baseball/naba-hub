<template>
  <section class="flow">
    <h1 class="text-3xl font-bold">NABA Hub</h1>
    <div class="card-grid">
      <div class="card max-w-md items-center flow card-bordered">
        <div class="card-title">Batting Stats</div>
        <p class="card-body">
          Search batting stats for all players across all years of the league
        </p>
        <div class="card-actions">
          <NuxtLink to="/batting-stats/" class="btn btn-primary">View</NuxtLink>
        </div>
      </div>
      <div class="card max-w-md items-center flow card-bordered">
        <div class="card-title">Fielding Stats</div>
        <p class="card-body">
          Search fielding stats all players across all years of the league
        </p>
        <div class="card-actions">
          <NuxtLink to="/fielding-stats/" class="btn btn-primary"
            >View</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
