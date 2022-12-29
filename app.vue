<template>
  <div>
    <Html data-theme="lofi" />
    <NuxtLoadingIndicator />
    <nav class="space-x-2">
      <NuxtLink class="underline" to="/">Home</NuxtLink>
      <NuxtLink class="underline" to="/stats">Stats</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
