import React, { useState } from "react";
import { PlayerTypes } from "../types";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ handleFieldClick, gameTurns }) {
  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { field, player } = turn;
    const { row, col } = field;

    gameBoard[row][col] = player;
  }

  /** @type {[PlayerType[][], React.Dispatch<React.SetStateAction<PlayerType[][]>>]} */
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function changeTurn() {
  //   setTurn((prevTurn) =>
  //     prevTurn === PlayerTypes.X ? PlayerTypes.O : PlayerTypes.X
  //   );
  // }

  // /**
  //  * for every function that interacts with the game board, we use row and col index
  //  * @param {number} rowIndex
  //  * @param {number} colIndex
  //  */
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevBoard) => {
  //     const updatedBoard = prevBoard.map((row) => [...row]);
  //     const localField = updatedBoard[rowIndex][colIndex];

  //     updatedBoard[rowIndex][colIndex] =
  //       localField === PlayerTypes.EMPTY ? PlayerTypes.X : PlayerTypes.EMPTY;

  //     return updatedBoard;
  //   });

  //   changeTurn();
  // }

  // function handleSelectCircle(rowIndex, colIndex) {
  //   setGameBoard((prevBoard) => {
  //     const updatedBoard = prevBoard.map((row) => [...row]);
  //     const localField = updatedBoard[rowIndex][colIndex];

  //     updatedBoard[rowIndex][colIndex] =
  //       localField === PlayerTypes.EMPTY ? PlayerTypes.O : PlayerTypes.EMPTY;

  //     return updatedBoard;
  //   });

  //   changeTurn();
  // }

  // function handleBoardFieldClick(rowIndex, colIndex) {
  //   if (gameBoard[rowIndex][colIndex] !== PlayerTypes.EMPTY) {
  //     return;
  //   }
  //   if (turn === PlayerTypes.X) {
  //     handleSelectSquare(rowIndex, colIndex);
  //   } else {
  //     handleSelectCircle(rowIndex, colIndex);
  //   }
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="Field"
                  onClick={() =>
                    playerSymbol === PlayerTypes.EMPTY &&
                    handleFieldClick(rowIndex, colIndex)
                  }
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
