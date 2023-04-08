<script setup>
const stats = ref([])
const { data } = await useAsyncData(() =>
  queryContent('stats/player_batting_stats')
    .without([
      'player ID',
      'league_name',
      'vorp',
      'team_abbr',
      'league_abbr',
      'league_name',
      'league_level_id',
      'bbrefid',
      'bbrefminorid',
      'OOTP pID',
      'team ID',
    ])
    .findOne(),
)
syncRef(data, stats, {
  direction: 'ltr',
  transform: {
    ltr: left => left.body,
  },
})
const cols = Object.values(getBattingColumns())
</script>

<template>
  <div class="flow-layout">
    <StatGrid :cols="cols" :stats="stats" />
  </div>
</template>
