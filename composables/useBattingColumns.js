const battingTextHeadersRaw = "lastname, firstname, team_name";
const battingTextHeaders = battingTextHeadersRaw.split(", ").reduce(
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
battingTextHeaders.split_id = splitIdCol;
const battingNumberHeadersRaw =
  "year, g, gs, pa, ab, h, 2b, 3b, hr, rbi, r, sb, cs, bb, hp, k, sh, sf, gdp, ibb, ci, pitches seen";
const battingNumberHeaders = battingNumberHeadersRaw.split(", ").reduce(
  (map, str) => {
    map[str] = createNumberHeader(str);
    return map;
  },
  {},
);

battingNumberHeaders.year.sort = "desc";

export const useBattingColumns = () =>
  useState("battingColumns", () => {
    return { ...battingTextHeaders, ...battingNumberHeaders };
  });
