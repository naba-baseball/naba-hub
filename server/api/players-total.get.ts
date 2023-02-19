export default defineEventHandler(async (event) => {
  const total = await event.context.prisma.player.count();
  return total;
});
