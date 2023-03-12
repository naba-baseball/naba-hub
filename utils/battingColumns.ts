const textHeadersRaw = 'lastname, firstname, team_name'
const textHeaders = textHeadersRaw.split(', ').reduce((map, str) => {
  map[str] = createTextHeader(str)
  return map
}, {})
const splitIdCol = {
  ...createTextHeader('split_id'),
  headerName: 'Split',
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
    ...createNumberHeader('AVG'),
    valueGetter: ({ data }) => battingAverage(data.h, data.ab),
    valueFormatter: ({ value }) => formatPercentage(value),
  },
  obp: {
    ...createNumberHeader('OBP'),
    valueGetter: ({ data }) => onBasePercentage(data.h, data.bb, data.hp, data.ab, data.sf),
    valueFormatter: ({ value }) => formatPercentage(value),
  },
  slg: {
    ...createNumberHeader('SLG'),
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
    ...createNumberHeader('OPS'),
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

export const getBattingColumns = () => ({ ...textHeaders, ...computedHeaders, ...numberHeaders })
