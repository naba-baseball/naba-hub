<template>
  <section class="flow-layout">
    <h1 class="text-3xl font-bold">NABA Hub</h1>
    <div class="grid-row grid-cols-3">
      <ACard>
        <div class="a-card-body a-card-spacer">
          <ATypography
            title="Batting Stats"
            subtitle="Search batting stats for all players across all years of the league"
          />
          <NuxtLink to="/batting-stats">
            <ABtn>
              View
            </ABtn>
          </NuxtLink>
        </div>
      </ACard>
    </div>
  </section>
</template>
