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
      team: {
        select: { name: true },
      },
    },
  });
  return {data: res, total}
});
