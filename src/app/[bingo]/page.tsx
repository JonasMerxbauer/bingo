import { z } from "zod";
import BingoGrid from "~/components/BingoGrid";
import { getBingo } from "~/server/db/query/getBingo";

export default async function BingoPage({
  params,
}: {
  params: { bingo: string };
}) {
  const data = await getBingo(params.bingo);

  if (!data?.value) {
    throw new Error("Bingo not found");
  }

  const value = z.string().parse(JSON.parse(data.value));
  const bingo = value.split("\r\n");

  if (!Array.isArray(bingo)) {
    return <div>Invalid bingo</div>;
  }

  return <BingoGrid disabled={false} bingo={bingo} />;
}
