export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:afterParse", (file) => {
    if (file._type === "csv") {
      //convert split_id
      const splitIdMap = {
        1: "Overall",
        2: "vs L",
        3: "vs R",
        21: "Playoffs",
      };
      file.body = file.body.map((row) => {
        if (row.split_id) {
          return { ...row, split_id: splitIdMap[row.split_id] };
        }
        return row;
      }).map((row) => {
        //parse numbers
        Object.entries(row).forEach(([key, value]) => {
          let num = parseFloat(value);
          if (!Number.isNaN(num)) {
            row[key] = num;
          }
        });
        return row
      });
    }
  });
});
