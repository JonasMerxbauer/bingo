"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function BingoErrorPage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-center text-xl font-bold lg:text-3xl">
        Bingo not found
      </h2>
      <Link href="/">
        <Button>Go to homepage</Button>
      </Link>
    </div>
  );
}
