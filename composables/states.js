const battingTextHeadersRaw = "lastname, firstname, team_name";
const battingTextHeaders = battingTextHeadersRaw.split(", ").reduce(
  (map, str) => {
    const col = {
      field: str,
      filter: "agTextColumnFilter",
    };
    map[str] = col;
    return map;
  },
  {},
);
const splitIdCol = {
  headerName: 'Split',
  field: 'split_id',
  filter: 'agTextColumnfilter'
}
battingTextHeaders.split_id = splitIdCol
const battingNumberHeadersRaw =
  "year, g, gs, pa, ab, h, 2b, 3b, hr, rbi, r, sb, cs, bb, hp, k, sh, sf, gdp, ibb, ci, pitches seen";
const battingNumberHeaders = battingNumberHeadersRaw.split(", ").reduce(
  (map, str) => {
    const col = {
      field: str,
      type: "numericColumn",
      filter: "agNumberColumnFilter",
    };
    map[str] = col;
    return map;
  },
  {},
);

battingNumberHeaders.year.sort = "desc";

export const useBattingColumns = () =>
  useState("battingColumns", () => {
    return { ...battingTextHeaders, ...battingNumberHeaders };
  });
