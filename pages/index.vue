<template>
  <section class="flow-layout">
    <h1 class="text-3xl font-bold">NABA Hub</h1>
    <div class="grid-row gap-flow md:grid-cols-3">
      <ACard class="p-flow">
        <div class="flow-layout flow-sm">
          <ATypography
            class="mb-flow"
            title="Batting Stats"
            subtitle="Search batting stats for all players across all years of the league"
          />
          <NuxtLink to="/batting-stats">
            <ABtn> View </ABtn>
          </NuxtLink>
        </div>
      </ACard>
      <ACard class="p-flow">
        <div class="flow-layout flow-sm">
          <ATypography
            class="mb-flow"
            title="Fielding Stats"
            subtitle="Search fielding stats for all players across all years of the league"
          />
          <NuxtLink to="/fielding-stats">
            <ABtn> View </ABtn>
          </NuxtLink>
        </div> </ACard
      ><ACard class="p-flow">
        <div class="flow-layout flow-sm">
          <ATypography
            class="mb-flow"
            title="Pitching Stats"
            subtitle="Search pitching stats for all players across all years of the league"
          />
          <NuxtLink to="/pitching-stats">
            <ABtn> View </ABtn>
          </NuxtLink>
        </div>
      </ACard>
    </div>
  </section>
</template>
