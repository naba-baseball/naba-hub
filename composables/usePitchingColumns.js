const textHeaders = "lastname, firstname, team_name".split(", ").reduce((map, str) => {
  map[str] = createTextHeader(str);
  return map;
}, {});
const splitIdCol = {
  headerName: "Split",
  field: "split_id",
  filter: "agTextColumnfilter",
};
textHeaders.split_id = splitIdCol;
const numberHeaders =
  "year, g, gs, w, l, s, ip, ha, r, er, bb, hp, k, bf, ab, 1b, 2b, 3b, hr, tb, sh, sf, ci, iw, bk, wp, dp, qs, svopp, blownsv, reliefapp, cg, sho, holds, sb, cs, gb, fb, pitches, runsupport"
    .split(", ")
    .reduce((map, str) => {
      map[str] = createNumberHeader(str);
      return map;
    }, {});

numberHeaders.year.sort = "desc";

const computedHeaders = {
  era: {
    field: "ERA",
    filter: "agNumberColumnFilter",
    valueGetter: ({ data }) => earnedRunAverage(data.er, data.ip),
    valueFormatter: ({ value }) => value.toFixed(2),
  },
};

export const usePitchingColumns = () => ({ ...textHeaders, ...computedHeaders, ...numberHeaders });
