<template>
  <section class="flow">
    <h1 class="text-3xl font-bold">NABA Hub</h1>
    <div class="card-grid">
      <div class="card card-bordered | max-w-md items-center flow ">
        <div class="card-title">Batting Stats</div>
        <p class="card-body">
          Search batting stats for all players across all years of the league
        </p>
        <div class="card-actions">
          <NuxtLink to="/batting-stats/" class="btn btn-primary">View</NuxtLink>
        </div>
      </div>
      <div class="card card-bordered | max-w-md items-center flow ">
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
    </div>
  </section>
</template>

<style>
.card-grid {
  display: grid;
  gap: var(--flow-space, 2rem);
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media screen(lg) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.card {
  --flow-space: 1rem;
  padding: var(--flow-space);
}

.card-body {
  --padding-card: var(--flow-space);
}

.card-actions {
  margin-left: var(--flow-space);
  margin-right: var(--flow-space);
  margin-bottom: var(--flow-space);
}
</style>
