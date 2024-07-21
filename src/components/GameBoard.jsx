import React, { useState } from "react";
import { fieldTypes } from "../types";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ setTurn, turn }) {
  /** @type {[FieldType[][], React.Dispatch<React.SetStateAction<FieldType[][]>>]} */
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function changeTurn() {
    setTurn((prevTurn) =>
      prevTurn === fieldTypes.X ? fieldTypes.O : fieldTypes.X
    );
  }

  /**
   * for every function that interacts with the game board, we use row and col index
   * @param {number} rowIndex
   * @param {number} colIndex
   */
  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      const updatedBoard = prevBoard.map((row) => [...row]);
      const localField = updatedBoard[rowIndex][colIndex];

      updatedBoard[rowIndex][colIndex] =
        localField === fieldTypes.EMPTY ? fieldTypes.X : fieldTypes.EMPTY;

      return updatedBoard;
    });

    changeTurn();
  }

  function handleSelectCircle(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      const updatedBoard = prevBoard.map((row) => [...row]);
      const localField = updatedBoard[rowIndex][colIndex];

      updatedBoard[rowIndex][colIndex] =
        localField === fieldTypes.EMPTY ? fieldTypes.O : fieldTypes.EMPTY;

      return updatedBoard;
    });

    changeTurn();
  }

  function handleBoardFieldClick(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] !== fieldTypes.EMPTY) {
      return;
    }
    if (turn === fieldTypes.X) {
      handleSelectSquare(rowIndex, colIndex);
    } else {
      handleSelectCircle(rowIndex, colIndex);
    }
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="Field"
                  onClick={() => handleBoardFieldClick(rowIndex, colIndex)}
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
