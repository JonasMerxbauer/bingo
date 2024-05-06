import { getBingo } from "~/server/db/query/getBingo";

export const revalidate = 3600 * 24;

export default async function BingoPage({
  params,
}: {
  params: { bingo: string };
}) {
  const data = await getBingo(params.bingo);
  return <div>{data?.value}</div>;
}
