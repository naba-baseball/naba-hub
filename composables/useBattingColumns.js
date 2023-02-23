const textHeadersRaw = "lastname, firstname, team_name";
const textHeaders = textHeadersRaw.split(", ").reduce(
  (map, str) => {
    map[str] = createTextHeader(str);
    return map;
  },
  {},
);
const splitIdCol = {
  headerName: "Split",
  field: "split_id",
  filter: "agTextColumnfilter",
};
textHeaders.split_id = splitIdCol;
const numberHeadersRaw =
  "year, g, gs, pa, ab, h, 2b, 3b, hr, rbi, r, sb, cs, bb, hp, k, sh, sf, gdp, ibb, ci, pitches seen";
const numberHeaders = numberHeadersRaw.split(", ").reduce(
  (map, str) => {
    map[str] = createNumberHeader(str);
    return map;
  },
  {},
);

numberHeaders.year.sort = "desc";

export const useBattingColumns = () =>({ ...textHeaders, ...numberHeaders })