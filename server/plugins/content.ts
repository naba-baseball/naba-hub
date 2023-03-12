export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._type === 'csv') {
      // convert split_id
      file.body = file.body
        .map((row) => {
          if (row.split_id) {
            const splitIdMap = {
              1: 'Overall',
              2: 'vs L',
              3: 'vs R',
              21: 'Playoffs',
            }
            return { ...row, split_id: splitIdMap[row.split_id] }
          }
          if (row.position) {
            const positionMap = {
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
            return { ...row, position: positionMap[row.position] }
          }
          return row
        })
        .map((row) => {
          // parse numbers
          Object.entries(row).forEach(([key, value]) => {
            const num = parseFloat(value)
            if (!Number.isNaN(num))
              row[key] = num
          })
          return row
        })
    }
  })
})
