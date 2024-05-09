"use client";
import { useMemo, useState } from "react";

const BingoGrid = ({
  disabled = true,
  bingo,
}: {
  disabled?: boolean;
  bingo: string[];
}) => {
  const gridSize = useMemo(
    () =>
      Math.ceil(Math.sqrt(bingo.length)) < 2
        ? 2
        : Math.ceil(Math.sqrt(bingo.length)) > 5
          ? 5
          : Math.ceil(Math.sqrt(bingo.length)),
    [bingo.length],
  );

  const gridCols = ["grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-5"];
  const gridRows = ["grid-rows-2", "grid-rows-3", "grid-rows-4", "grid-rows-5"];
  return (
    <div
      className={`grid ${gridCols[gridSize - 2]} ${gridRows[gridSize - 2]} gap-1`}
    >
      {Array(gridSize * gridSize)
        .fill(null)
        .map((_, i) => (
          <Box key={i} text={bingo[i]} disabled={disabled} isChecked={false} />
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
