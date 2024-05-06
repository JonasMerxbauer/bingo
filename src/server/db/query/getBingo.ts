import { cache } from "react";
import { db } from "~/server/db";

export const getBingo = cache(async (link: string) => {
  const bingo = await db.query.bingos.findFirst({
    where: (bingos, { eq }) => eq(bingos.link, link),
  });
  return bingo;
});
