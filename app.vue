<script setup>
import { useStorage } from "@vueuse/core";
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

function handleError(err) {
  console.error(err);
}
const darkTheme = useDarkTheme()
</script>

<template>
  <Html :class="darkTheme ? 'dark' : ''" />
  <Title> NABA Hub </Title>
  <Body :class="darkTheme ? 'bg-dark' : ''" />
  <div class="grid lg:grid-cols-[0.5fr_1fr_0.5fr] font-sans mt-flow flow-base">
    <div></div>
    <NuxtLoadingIndicator />
    <div class="flow-layout">
      <nav class="flow-xs md:flow-sm gap-flow flex flex-col md:flex-row items-center">
        <NuxtLink class="hover:underline" active-class="underline font-bold" to="/">Home</NuxtLink>
        <NuxtLink class="hover:underline" active-class="underline font-bold" to="/batting-stats/"
          >Batting Stats</NuxtLink
        >
        <NuxtLink class="hover:underline" active-class="underline font-bold" to="/fielding-stats/"
          >Fielding Stats</NuxtLink
        >
        <NuxtLink class="hover:underline" active-class="underline font-bold" to="/pitching-stats/"
          >Pitching Stats</NuxtLink
        >
        <NuxtLink class="hover:underline" active-class="underline font-bold" to="/changelog/"
          >Changelog</NuxtLink
        >
        <a href="https://github.com/Twitch0125/naba-hub">Github</a>
        <!-- <ASwitch
          class="text-sm"
          name="theme"
          on-icon="i-bx-moon"
          off-icon="i-bx-sun"
          v-model="darkTheme"
        /> -->
      </nav>
      <UpdateNotification v-if="showNotification" @update:model-value="showNotification = $event" />
      <NuxtErrorBoundary @error="handleError">
        <NuxtPage />
        <template #error="{ error }">
          <div>
            <p>Oops, something went wrong:</p>
            <pre>
            {{ error }}
          </pre
            >
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>
