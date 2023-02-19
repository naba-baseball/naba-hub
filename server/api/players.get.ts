export default defineEventHandler(async (event) => {
  const { skip, take } = getPagination(event);
  const total = await event.context.prisma.player.count();
  setHeader(event, "x-total-count", total);
  const res = await event.context.prisma.player.findMany({
    orderBy: [{ last_name: "asc" }],
    take,
    skip,
    include: {
      team: { select: { name: true, _count: true } },
    },
  });

  return { data: res, total };
});
