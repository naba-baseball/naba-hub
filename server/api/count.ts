export default defineEventHandler(async () => {
  const previousCount = await useStorage("memory").getItem("count") || 0;
  await useStorage("memory").setItem("count", previousCount + 1);
  return previousCount
});
