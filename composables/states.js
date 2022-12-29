const battingHeadersRaw =
  "lastname, firstname, year, team_name, split_id, g, gs, pa, ab, h, 2b, 3b, hr, rbi, r, sb, cs, bb, hp, k, sh, sf, gdp, ibb, ci, pitches seen";

const pitchingHeaders = battingHeadersRaw.split(", ").reduce((map, str) => {
  const col = { field: str };
  map[str] = col;
  return map;
}, {});

pitchingHeaders.year.sort = "desc";

export const useBattingColumns = () =>
  useState("battingColumns", () => pitchingHeaders);