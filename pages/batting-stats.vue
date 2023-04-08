<script setup>
const stats = ref([])
const { data } = await useLazyAsyncData(() => queryContent('stats/player_batting_stats').findOne())

syncRef(data, stats, {
  direction: 'ltr',
  transform: {
    ltr: left => left?.body,
  },
})
const cols = Object.values(getBattingColumns())
</script>

<template>
  <div class="flow-layout">
    <StatGrid :cols="cols" :stats="stats" />
  </div>
</template>
