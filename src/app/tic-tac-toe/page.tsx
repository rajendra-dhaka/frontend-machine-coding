"use client";

import { TicTacToeBoard } from "@/components";
import { checkWinner } from "@/utils";
import React, { useState } from "react";

const Page = () => {
  const [boardSize, setBoardSize] = useState(3);
  const [board, setBoard] = useState(
    Array.from({ length: boardSize }, () => Array(boardSize).fill(""))
  );
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  //   const handleCellClick = (rowIdx: number, colIdx: number) => {
  //     if (board[rowIdx][colIdx] || winner) {
  //       return;
  //     }
  //     const deepCopy = board.map((row) => [...row]);
  //     deepCopy[rowIdx][colIdx] = player;
  //     setBoard(deepCopy);
  //     const gameWinner = checkWinner(deepCopy);
  //     if (gameWinner) {
  //       setWinner(gameWinner);
  //     } else {
  //       setPlayer((prev) => (prev === "X" ? "O" : "X"));
  //     }
  //   };

  const handleCellClick = (rowIdx: number, colIdx: number) => {
    if (board[rowIdx][colIdx] || winner) return;

    const updatedBoard = board.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIdx && cIdx === colIdx ? player : cell
      )
    );

    setBoard(updatedBoard);
    const gameWinner = checkWinner(updatedBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  const handleReset = () => {
    setBoard(
      Array.from({ length: boardSize }, () =>
        Array.from({ length: boardSize }, () => "")
      )
    );
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <TicTacToeBoard board={board} onCellClick={handleCellClick} />
        {winner ? (
          <div>Winner is: {winner}</div>
        ) : (
          <div>Turn of player: {player}</div>
        )}
        <button
          onClick={handleReset}
          className="cursor-pointer bg-neutral-700 hover:bg-neutral-600 text-white py-1 px-4 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Page;
