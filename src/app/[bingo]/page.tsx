import { db } from "~/server/db";

export default async function BingoPage({
  params,
}: {
  params: { bingo: string };
}) {
  const data = await db.query.bingos.findFirst({
    where: (bingos, { eq }) => eq(bingos.link, params.bingo),
  });

  return <div>{data?.value}</div>;
}
