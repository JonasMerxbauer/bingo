import { z } from "zod";
import BingoGrid from "~/components/BingoGrid";
import BingoLink from "~/components/BingoLink";
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

  return (
    <div className="flex flex-col items-center gap-8">
      <BingoGrid disabled={false} bingo={bingo} />
      <BingoLink />
    </div>
  );
}
