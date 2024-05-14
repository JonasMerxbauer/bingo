import "server-only";
import { unstable_cache } from "next/cache";
import { db } from "~/server/db";

export const getBingo = unstable_cache(
  async (link: string) => {
    const bingo = await db.query.bingos.findFirst({
      where: (bingos, { eq }) => eq(bingos.link, link),
    });
    return bingo;
  },
  ["get_bingo"],
  {
    tags: ["get_bingo"],
  },
);
