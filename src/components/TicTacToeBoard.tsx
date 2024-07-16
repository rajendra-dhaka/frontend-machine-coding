import React from "react";

const TicTacToeBoard = ({
  board,
  onCellClick,
}: {
  board: string[][];
  onCellClick: (rowIdx: number, colIdx: number) => void;
}): JSX.Element => {
  return (
    <div
      className="grid gap-1 max-w-fit"
      style={{
        gridTemplateColumns: `repeat(${board.length || 3}, minmax(0, 1fr))`,
      }}
    >
      {/*After creating these arrays of <div> elements, flatMap flattens them into a single array of <div> elements.*/}
      {/*The use of flatMap was simply a way to flatten the nested arrays, but it isn't strictly necessary.*/}
      {board.flatMap((row, rowIdx) => {
        return row.map((cell, colIdx) => (
          <div
            key={`${rowIdx}-${colIdx}`}
            className="h-20 w-20  cursor-pointer border-2 border-neutral-400 flex items-center justify-center text-lg font-semibold"
            onClick={() => onCellClick(rowIdx, colIdx)}
          >
            {cell}
          </div>
        ));
      })}
    </div>
  );
};

export default TicTacToeBoard;
