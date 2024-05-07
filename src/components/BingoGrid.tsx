"use client";
import { useEffect, useMemo, useState } from "react";

const BingoGrid = ({
  disabled = true,
  bingo,
}: {
  disabled?: boolean;
  bingo: string[];
}) => {
  const [bingoInput, setBingoInput] = useState(bingo);
  const gridSize = useMemo(
    () =>
      Math.ceil(Math.sqrt(bingoInput.length)) < 2
        ? 2
        : Math.ceil(Math.sqrt(bingoInput.length)),
    [bingoInput.length],
  );

  const gridCols = ["grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-5"];
  const gridRows = ["grid-rows-2", "grid-rows-3", "grid-rows-4", "grid-rows-5"];

  useEffect(() => {
    setBingoInput(bingo);
  }, [bingo]);

  return (
    <div
      className={`grid ${gridCols[gridSize - 2]} ${gridRows[gridSize - 2]} gap-2`}
    >
      {Array(gridSize * gridSize)
        .fill(null)
        .map((_, i) => (
          <Box
            key={i}
            text={bingoInput[i]}
            disabled={disabled}
            isChecked={false}
          />
        ))}
    </div>
  );
};
export default BingoGrid;

const Box = (props: {
  text: string | undefined;
  disabled: boolean;
  isChecked: boolean;
}) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const checkedStyle = isChecked ? "bg-green-400" : "bg-red-400";

  const toggle = () => setIsChecked((prev) => !prev);

  return (
    <div
      onClick={!props.disabled ? toggle : undefined}
      className={
        "flex aspect-square max-h-full cursor-pointer items-center justify-center border-2 border-black " +
        checkedStyle
      }
    >
      {props.text}
    </div>
  );
};
