<template>
  <div class="flow">
    <Html data-theme="lofi" />
    <NuxtLoadingIndicator />
    <nav class="space-x-4 nav">
      <NuxtLink class="underline" to="/">Home</NuxtLink>
      <NuxtLink class="underline" to="/batting-stats">Batting Stats</NuxtLink>
    </nav>
    <NuxtPage class="page" />
  </div>
</template>

<style>
.nav {
  margin: auto var(--flow-space);
}
.page {
  margin: var(--flow-space);
  margin-bottom: auto;
}
</style>
