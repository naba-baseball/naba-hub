<script setup>
const showNotification = ref(false);
if (useRuntimeConfig().public.NODE_ENV === "production") {
  onMounted(async () => {
    if ("serviceWorker" in navigator) {
      const { Workbox } = await import("workbox-window");
      const workbox = new Workbox("/sw.js");
      workbox.addEventListener("installed", (event) => {
        // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
        if (event.isUpdate) {
          // whatever logic you want to use to notify the user that they need to refresh the page.
          showNotification.value = true;
          //trigerUpdate
        }
      });
      workbox.register();
    }
  });
}
</script>

<template>
  <div class="flow bg-base-100 mx">
    <Html data-theme="lofi" />
    <Title> NABA Hub </Title>
    <NuxtLoadingIndicator />
    <nav class="space-x">
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
        to="/fielding-stats/"
        >Fielding Stats</NuxtLink
      >
      <NuxtLink
        class="hover:underline"
        active-class="underline font-bold"
        to="/players/"
        >Players</NuxtLink
      >
      <NuxtLink
        class="hover:underline"
        active-class="underline font-bold"
        to="/changelog/"
        >Changelog</NuxtLink
      >
      <a href="https://github.com/Twitch0125/naba-hub">Github</a>
    </nav>
    <UpdateNotification
      v-if="showNotification"
      @update:model-value="showNotification = $event"
    />
    <NuxtPage />
  </div>
</template>
