const textHeaders = "lastname, firstname, team_name, position".split(
  ", ",
).reduce(
  (map, str) => {
    map[str] = createTextHeader(str);
    return map;
  },
  {},
);

const numberHeaders =
  "year, g, gs, ip, tc, po, a, e, dp, tp, pb, sb attempts, cs, plays, plays_base, roe, opp_0, made_0, opp_1, made_1, opp_2, made_2, opp_3, made_3, opp_4, made_4, opp_5, made_5"
    .split(", ").reduce(
      (map, str) => {
        map[str] = createNumberHeader(str);
        return map;
      },
      {},
    );

numberHeaders.year.sort = "desc";

export const useFieldingColumns = () => ({ ...textHeaders, ...numberHeaders });
