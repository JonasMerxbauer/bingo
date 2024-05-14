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
      className={
        "grid h-[16rem] w-[16rem] gap-2 sm:h-[30rem] sm:w-[30rem] lg:h-[44rem] lg:w-[44rem]" +
        ` ${gridCols[gridSize - 2]} ${gridRows[gridSize - 2]}`
      }
    >
      {Array(gridSize * gridSize)
        .fill(null)
        .map((_, i) => (
          <Box key={i} text={bingo[i]} disabled={disabled} />
        ))}
    </div>
  );
};
export default BingoGrid;

const Box = (props: { text: string | undefined; disabled: boolean }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkedStyle = isChecked
    ? " bg-green-600 cursor-pointer"
    : " bg-red-600 cursor-pointer";
  const disabledStyle = props.disabled ? " bg-background border-4" : "";

  const style = props.disabled ? disabledStyle : checkedStyle;

  const toggle = () => setIsChecked((prev) => !prev);

  return (
    <div
      onClick={!props.disabled ? toggle : undefined}
      className={
        "box-border flex aspect-square max-h-full items-center justify-center rounded-xl p-4" +
        style
      }
    >
      <p className="line-clamp-5 text-ellipsis break-words break-all text-center text-xl font-bold sm:text-2xl lg:text-4xl lg:leading-tight">
        {props.text}
      </p>
    </div>
  );
};
