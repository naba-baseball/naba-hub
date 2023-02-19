export default defineEventHandler(async (event) => {
  const res = await event.context.prisma.players.findMany({
    orderBy: [{ last_name: "asc" }],
    take: 25,
  });
  setResponseHeader(event, 'x-total-count', 25)
  return res;
});
