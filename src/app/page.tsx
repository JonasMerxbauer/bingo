import BingoGrid from "~/components/BingoGrid";
import BingoInput from "~/components/BingoInput";

export default function HomePage() {
  return (
    <main className="flex">
      <BingoInput />
      <BingoGrid />
    </main>
  );
}
