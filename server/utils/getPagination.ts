import type { H3Event } from "h3";
export default function getPagination(event: H3Event) {
  const query = getQuery(event) || { take: 25, skip: 0 };
  const take = Number(query.take || query.limit || 25);
  const skip = Number(query.skip || query.offset as string || 0);
  return { take, skip };
}
