const textHeadersRaw = 'lastname, firstname, team_name'
const textHeaders = textHeadersRaw.split(', ').reduce((map, str) => {
  map[str] = createTextHeader(str)
  return map
}, {})
const splitIdCol = {
  headerName: 'Split',
  field: 'split_id',
  filter: 'agTextColumnfilter',
}
textHeaders.split_id = splitIdCol
const numberHeadersRaw
  = 'year, g, gs, pa, ab, h, 2b, 3b, hr, rbi, r, sb, cs, bb, hp, k, sh, sf, gdp, ibb, ci, pitches seen'
const numberHeaders = numberHeadersRaw.split(', ').reduce((map, str) => {
  map[str] = createNumberHeader(str)
  return map
}, {})

numberHeaders.year.sort = 'desc'

const computedHeaders = {
  avg: {
    field: 'AVG',
    filter: 'agNumberColumnFilter',
    valueGetter: ({ data }) => battingAverage(data.h, data.ab),
    valueFormatter: ({ value }) => formatPercentage(value),
  },
  obp: {
    field: 'OBP',
    filter: 'agNumberColumnFilter',
    valueGetter: ({ data }) => onBasePercentage(data.h, data.bb, data.hp, data.ab, data.sf),
    valueFormatter: ({ value }) => formatPercentage(value),
  },
  slg: {
    field: 'SLG',
    filter: 'agNumberColumnFilter',
    valueGetter: ({ data }) => {
      return sluggingPercentage(
        data.h - data['2b'] - data['3b'] - data.hr,
        data['2b'],
        data['3b'],
        data.hr,
        data.ab,
      )
    },
    valueFormatter: ({ value }) => formatPercentage(value),
  },
  ops: {
    field: 'OPS',
    filter: 'agNumberColumnFilter',
    valueGetter: ({ data }) => {
      return onBasePlusSlugging(
        onBasePercentage(data.h, data.bb, data.hp, data.ab, data.sf),
        sluggingPercentage(
          data.h - data['2b'] - data['3b'] - data.hr,
          data['2b'],
          data['3b'],
          data.hr,
          data.ab,
        ),
      )
    },
    valueFormatter: ({ value }) => formatPercentage(value),
  },
}

export const useBattingColumns = () => ({ ...textHeaders, ...computedHeaders, ...numberHeaders })
