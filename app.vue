<template>
  <div class="flow">
    <Html data-theme="lofi" />
    <NuxtLoadingIndicator />
    <nav class="space-x-4 nav">
      <NuxtLink
        class="hover:underline"
        active-class="underline font-bold"
        to="/"
        >Home</NuxtLink
      >
      <NuxtLink
        class="hover:underline"
        active-class="underline font-bold"
        to="/batting-stats/"
        >Batting Stats</NuxtLink
      >
      <NuxtLink
        class="hover:underline"
        active-class="underline font-bold"
        to="/changelog/"
        >Changelog</NuxtLink
      >
      <a href="https://github.com/Twitch0125/naba-hub">Github</a>
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
