export default defineEventHandler(async (event) => {
  const { skip, take } = getPagination(event);
  const total = await event.context.prisma.player.count();
  const res = await event.context.prisma.player.findMany({
    orderBy: [{ last_name: "asc" }],
    take,
    skip,
    select: {
      player_id: true,
      first_name: true,
      last_name: true,
      position: true,
      team: true,
      player_batting: true,
      player_fielding: true,
      player_pitching: true,
      players_career_batting_stats: true,
      players_career_pitching_stats: true,
      players_career_fielding_stats: true,
    },
  });
  return { data: res, total };
});
