"use server";

import { getRandomString } from "~/lib/utils";
import { db } from "../db";
import { bingos } from "../db/schema";
import { redirect } from "next/navigation";

export async function createBingo(formData: FormData) {
  const randomLink = getRandomString(5);

  await db.insert(bingos).values({
    value: JSON.stringify(formData.get("bingo")),
    link: randomLink,
  });

  redirect(randomLink);
}
