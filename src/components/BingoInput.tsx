"use client";
import { useAtom } from "jotai";
import { bingoInputAtom } from "~/store";
import { Textarea } from "~/components/ui/textarea";

const BingoInput = () => {
  const [, setBingoInput] = useAtom(bingoInputAtom);
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const splitInput = e.target.value.split("\n").filter((x) => x);
    setBingoInput(splitInput);
  };

  return <Textarea onChange={handleInput} />;
};

export default BingoInput;
