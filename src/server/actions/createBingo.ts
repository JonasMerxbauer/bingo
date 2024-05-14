"use server";

import { getRandomString } from "~/lib/utils";
import { db } from "../db";
import { bingos } from "../db/schema";
import { redirect } from "next/navigation";
import { getBingo } from "../db/query/getBingo";
import { revalidateTag } from "next/cache";

export async function createBingo(formData: FormData) {
  let randomLink = getRandomString(5);

  let bingo = await getBingo(randomLink);

  while (bingo) {
    randomLink = getRandomString(5);
    bingo = await getBingo(randomLink);
    revalidateTag("get_bingo");
  }

  revalidateTag("get_bingo");

  await db.insert(bingos).values({
    value: JSON.stringify(formData.get("bingo")),
    link: randomLink,
  });

  redirect(randomLink);
}
