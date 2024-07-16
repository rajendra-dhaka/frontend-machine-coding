export const drawBoard = (boardSize) => {
  return Array.from({ length: boardSize }, () => Array(boardSize).fill(""));
};

export const checkWinner = (board) => {
  const size = board.length;

  // Check rows
  for (let i = 0; i < size; i++) {
    if (board[i][0] && board[i].every((value) => value === board[i][0])) {
      return board[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < size; i++) {
    if (board[0][i]) {
      let isColumnSame = true;
      for (let j = 1; j < size; j++) {
        if (board[j][i] !== board[0][i]) {
          isColumnSame = false;
          break;
        }
      }
      if (isColumnSame) {
        return board[0][i];
      }
    }
  }

  // Check main diagonal
  if (board[0][0]) {
    let isMainDiagonalSame = true;
    for (let i = 1; i < size; i++) {
      if (board[i][i] !== board[0][0]) {
        isMainDiagonalSame = false;
        break;
      }
    }
    if (isMainDiagonalSame) {
      return board[0][0];
    }
  }

  // Check anti-diagonal
  if (board[0][size - 1]) {
    let isAntiDiagonalSame = true;
    for (let i = 1; i < size; i++) {
      if (board[i][size - 1 - i] !== board[0][size - 1]) {
        isAntiDiagonalSame = false;
        break;
      }
    }
    if (isAntiDiagonalSame) {
      return board[0][size - 1];
    }
  }

  return null;
};

// export const checkWinner = (board) => {
//   const size = board.length;
//   const lines = [];

//   // Rows and columns
//   for (let i = 0; i < size; i++) {
//     lines.push(board[i]); // rows
//     lines.push(board.map((row) => row[i])); // columns
//   }

//   // Diagonals
//   lines.push(board.map((row, i) => row[i])); // main diagonal
//   lines.push(board.map((row, i) => row[size - 1 - i])); // anti-diagonal

//   for (const line of lines) {
//     if (line.every((cell) => cell && cell === line[0])) {
//       return line[0];
//     }
//   }

//   return null;
// };
