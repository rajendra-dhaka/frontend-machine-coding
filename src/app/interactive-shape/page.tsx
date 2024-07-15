"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Page = () => {
  const [gridSize, setGridSize] = useState({ row: 3, col: 3 });

  /*This initializes the grid state as a 3x3 array filled with false, only once when the component mounts*/
  const [grid, setGrid] = useState(
    Array.from({ length: gridSize.row }, () =>
      Array.from({ length: gridSize.col }, () => false)
    )
  );

  /*holds an array of coordinates [rowIdx, colIdx] representing clicked cells*/
  const queue = useRef<[number, number][]>([]);

  /*holds an array of timer IDs, which are used to keep track of the timeouts.*/
  const timerId = useRef<number[]>([]);
  const handleCellClick = useCallback(
    (rowIdx: number, colIdx: number, flag: boolean) => {
      /*If there are pending timeouts and we're trying to activate a cell (flag is true), it returns early.*/
      if (timerId.current.length > 0 && flag) {
        return;
      }
      /*If the cell is already active and we're trying to activate it again, it returns early.*/
      if (grid[rowIdx][colIdx] && flag) {
        return;
      }
      setGrid((prev) => {
        const gridDeepCopy = prev.map((row) => [...row]);
        gridDeepCopy[rowIdx][colIdx] = flag;
        /*If we're activating a cell and it's not already in the queue, it adds the cell to the queue.*/
        if (
          flag &&
          !queue.current.some(([r, c]) => r === rowIdx && c === colIdx)
        ) {
          queue.current.push([rowIdx, colIdx]);
        }
        return gridDeepCopy;
      });
    },
    [grid]
  );

  /* Handles the main logic that depends on the grid and handleCellClick dependencies. This runs whenever these dependencies change*/
  useEffect(() => {
    /*If the queue length is 9 (all cells are activated), it iterates over the queue and sets a timeout for each cell.*/
    if (queue.current.length === gridSize.row * gridSize.col) {
      queue.current.forEach(([rowIdx, colIdx], idx) => {
        /*Each timeout deactivates a cell (flag set to false) after a delay of 1000 * (idx + 1) milliseconds.*/
        timerId.current[idx] = window.setTimeout(() => {
          handleCellClick(rowIdx, colIdx, false);
          if (idx === timerId.current.length - 1) {
            timerId.current = [];
          }
        }, 1000 * (idx + 1));
      });
      queue.current = [];
    }
  }, [grid, handleCellClick, gridSize.row, gridSize.col]);

  /*Handles the timer cleanup logic that should only run once when the component unmounts.*/
  useEffect(() => {
    /*cleanup function returned by useEffect*/
    return () => {
      timerId.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    setGrid(
      Array.from({ length: gridSize.row }, () =>
        Array.from({ length: gridSize.col }, () => false)
      )
    );
  }, [gridSize]);

  return (
    <div className="m-4">
      <div
        className={`grid gap-1 max-w-fit`}
        style={{
          gridTemplateColumns: `repeat(${gridSize.col}, minmax(0, 1fr))`,
        }}
      >
        {grid.map((row, rowIdx) => {
          return row.map((cell, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              className={` cursor-pointer border-2 border-neutral-700 h-20 w-20 ${
                cell === true ? "bg-blue-400" : ""
              }`}
              onClick={() => handleCellClick(rowIdx, colIdx, true)}
            ></div>
          ));
        })}
      </div>
      {/* Below are select options for row and col */}
      <div className="flex items-center justify-between w-64 mt-4">
        <div>
          <label htmlFor="row">ROW</label>
          <select
            name="row"
            id="row"
            value={gridSize.row}
            onChange={(e) =>
              setGridSize((prev) => ({ ...prev, row: +e.target.value }))
            }
          >
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <div>
          <label htmlFor="col">COL</label>
          <select
            name="col"
            id="col"
            value={gridSize.col}
            onChange={(e) =>
              setGridSize((prev) => ({ ...prev, col: +e.target.value }))
            }
          >
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Page;
