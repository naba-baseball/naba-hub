export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));
  const res = await event.context.prisma.player.findUnique({
    where: { player_id: id },
    include: {
      team: { select: { name: true } },
      player_batting: true,
      player_fielding: true,
      player_pitching: true
    },
  });
  return res;
});
