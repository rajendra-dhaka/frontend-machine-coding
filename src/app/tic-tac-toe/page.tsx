"use client";

import { ReactConfetti, TicTacToeBoard } from "@/components";
import { checkWinner, drawBoard } from "@/utils";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [boardSize, setBoardSize] = useState(3);
  const [board, setBoard] = useState(drawBoard(boardSize));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const showConfetti = winner && <ReactConfetti />;

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

  useEffect(() => {
    setBoard(drawBoard(boardSize));
  }, [boardSize]);

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
        {/* Below is select option for row and col */}

        <div>
          <label htmlFor="size">SIZE:</label>
          <select
            name="size"
            id="size"
            value={boardSize}
            onChange={(e) => setBoardSize((prev) => +e.target.value)}
          >
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
      </div>
      {showConfetti}
    </div>
  );
};

export default Page;
