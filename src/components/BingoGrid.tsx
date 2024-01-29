"use client";
import { useAtom } from "jotai";
import { useMemo, useState } from "react";
import { bingoInputAtom } from "~/store";

const BingoGrid = () => {
  const [bingoInput] = useAtom(bingoInputAtom);
  const gridSize = useMemo(
    () =>
      Math.ceil(Math.sqrt(bingoInput.length)) < 3
        ? 3
        : Math.ceil(Math.sqrt(bingoInput.length)),
    [bingoInput.length],
  );

  return (
    <div className="flex flex-col gap-2">
      {Array(gridSize)
        .fill(null)
        .map((_, i) => (
          <Row
            key={i}
            rowNumber={i}
            gridSize={gridSize}
            bingoInput={bingoInput}
          />
        ))}
    </div>
  );
};
export default BingoGrid;

const Row = (props: {
  rowNumber: number;
  gridSize: number;
  bingoInput: string[];
}) => {
  return (
    <div className="flex gap-2">
      {Array(props.gridSize)
        .fill(null)
        .map((_, i) => (
          <Box
            key={i}
            text={props.bingoInput[props.rowNumber * props.gridSize + i]}
            isChecked={false}
          />
        ))}
    </div>
  );
};

const Box = (props: { text: string | undefined; isChecked: boolean }) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const checkedStyle = isChecked ? "bg-green-400" : "bg-red-400";

  return (
    <div
      onClick={() => setIsChecked((prev) => !prev)}
      className={
        "flex h-32 w-32 cursor-pointer items-center justify-center border-2 border-black " +
        checkedStyle
      }
    >
      {props.text}
    </div>
  );
};
