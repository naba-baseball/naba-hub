export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._type === 'csv') {
      file.body = file.body
        .map(mapSplitId)
        .map(mapPosition)
        .map(mapNumbers)
    }
  })
})

function mapSplitId(row: { split_id?: string }) {
  if (row.split_id) {
    const splitIdMap: Record<string, string> = {
      1: 'Overall',
      2: 'vs L',
      3: 'vs R',
      21: 'Playoffs',
    }
    row.split_id = splitIdMap[row.split_id]
  }
  return row
}
function mapPosition(row: { position: string }) {
  if (row.position) {
    const positionMap: Record<string, string> = {
      1: 'pitcher',
      2: 'catcher',
      3: 'first base',
      4: 'second base',
      5: 'third base',
      6: 'shortstop',
      7: 'left field',
      8: 'center field',
      9: 'right field',
    }
    row.position = positionMap[row.position]
  }
  return row
}
function mapNumbers(row: Record<string, string | number>): Record<string, string | number> {
  // parse numbers
  Object.entries(row).forEach(([key, value]) => {
    const num = Number(value)
    if (!Number.isNaN(num))
      row[key] = num
  })
  return row
}
