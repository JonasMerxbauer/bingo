"use client";

import { useState } from "react";
import BingoForm from "~/components/BingoForm";
import BingoGrid from "~/components/BingoGrid";

export default function HomePage() {
  const [bingoInput, setBingoInput] = useState([""]);

  return (
    <main className="flex w-full flex-col-reverse items-center justify-center gap-16 lg:flex-row lg:items-start">
      <BingoForm setBingoInput={setBingoInput} />
      <BingoGrid bingo={bingoInput} />
    </main>
  );
}
