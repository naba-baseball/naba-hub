<script setup>
const showNotification = ref(false)
if (useRuntimeConfig().public.NODE_ENV === 'production') {
  onMounted(async () => {
    if ('serviceWorker' in navigator) {
      const { Workbox } = await import('workbox-window')
      const workbox = new Workbox('/sw.js')
      workbox.addEventListener('installed', (event) => {
        // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
        if (event.isUpdate) {
          // whatever logic you want to use to notify the user that they need to refresh the page.
          showNotification.value = true
          // trigerUpdate
        }
      })
      workbox.register()
    }
  })
}

function handleError(err) {
  console.error(err)
}

const links = [
  { text: 'Home', to: '/' },
  { text: 'Batting Stats', to: '/batting-stats/' },
  { text: 'Fielding Stats', to: '/fielding-stats/' },
  { text: 'Pitching Stats', to: '/pitching-stats/' },
  { text: 'Changelog', to: '/changelog/' },
  { text: 'NABA Dump', to: 'https://naba-dump.pages.dev' },
  { text: 'Github', to: 'https://github.com/Twitch0125/naba-hub' },
]
</script>

<template>
  <div
    class="flow-layout mx-auto px flow-sm lg:flow max-w-screen-lg font-sans"
  >
    <Html class="bg-base h-screen" />
    <Title> NABA Hub </Title>
    <NuxtLoadingIndicator />
    <nav class="space-x [&>a:not([aria-current=page])]:text-secondary">
      <NuxtLink v-for="link in links" :key="link.to" class="hover:underline" active-class="font-bold" :to="link.to">
        {{ link.text }}
      </NuxtLink>
    </nav>
    <UpdateNotification v-if="showNotification" @update:model-value="showNotification = $event" />
    <NuxtErrorBoundary @error="handleError">
      <NuxtPage />
      <template #error="{ error }">
        <div>
          <p>Oops, something went wrong:</p>
          <pre>
            {{ error }}
          </pre>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
