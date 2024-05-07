"use client";

import { useState } from "react";
import BingoForm from "~/components/BingoForm";
import BingoGrid from "~/components/BingoGrid";

export default function HomePage() {
  const [bingoInput, setBingoInput] = useState([""]);
  console.log(bingoInput);

  return (
    <main className="flex w-full flex-1 gap-16">
      <BingoForm setBingoInput={setBingoInput} />
      <BingoGrid bingo={bingoInput} />
    </main>
  );
}
