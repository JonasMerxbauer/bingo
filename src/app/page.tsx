import BingoForm from "~/components/BingoForm";
import BingoGrid from "~/components/BingoGrid";

export default function HomePage() {
  return (
    <main className="flex">
      <BingoForm />
      <BingoGrid />
    </main>
  );
}
