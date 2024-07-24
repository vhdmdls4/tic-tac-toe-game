import { useMemo, useState } from "react";
import { getActivePlayer, initialGameBoard } from "../util";
import { PlayerTypes } from "../types";
import { WINNING_COMBINATIONS } from "./WinningCombinations";

export default function useGameBoardInfo() {
  const [gameBoardInfo, setGameBoardInfo] = useState([]);

  // let gameBoard = initialGameBoard;

  // if (gameBoardInfo.length > 0) {
  //   for (const turn of gameBoardInfo) {
  //     const { field, player } = turn;
  //     const { row, col } = field;

  //     gameBoard[row][col] = player;
  //   }
  // }

  // const activePlayer = getActivePlayer(gameBoardInfo);

  // reduce with initialGameBoard as the firstValue
  const updateGameBoard = (gameBoardInfo) => {
    return gameBoardInfo.reduce((gameBoard, turn) => {
      const {
        field: { row, col },
        player,
      } = turn;
      const newGameBoard = [...gameBoard];
      newGameBoard[row] = [...newGameBoard[row]];
      newGameBoard[row][col] = player;
      return newGameBoard;
    }, initialGameBoard);
  };

  const gameBoard = updateGameBoard(gameBoardInfo);

  const activePlayer = getActivePlayer(gameBoardInfo);

  const playerX = {
    name: "Plato",
    symbol: PlayerTypes.X,
    isPlayerActive: activePlayer === PlayerTypes.X,
  };

  const playerO = {
    name: "Jeca",
    symbol: PlayerTypes.O,
    isPlayerActive: activePlayer === PlayerTypes.O,
  };

  console.log(gameBoardInfo);

  let winner, endGame;

  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;
    const [firstRow, firstCol] = [first.row, first.column];
    const [secondRow, secondCol] = [second.row, second.column];
    const [thirdRow, thirdCol] = [third.row, third.column];

    const firstField = gameBoard[firstRow]?.[firstCol];
    const secondField = gameBoard[secondRow]?.[secondCol];
    const thirdField = gameBoard[thirdRow]?.[thirdCol];

    if (firstField && firstField === secondField && firstField === thirdField) {
      winner = firstField === PlayerTypes.X ? playerX : playerO;
      endGame = true;
    }

    gameBoardInfo.length === 9 && !winner && (endGame = true);
  }

  function handleFieldClick(rowIndex, colIndex) {
    setGameBoardInfo((prevBoard) => {
      const updatedBoard = [
        {
          field: {
            row: rowIndex,
            col: colIndex,
          },
          player: getActivePlayer(prevBoard),
        },
        ...prevBoard,
      ];
      return updatedBoard;
    });
  }

  function resetGame() {
    winner = undefined;
    endGame = false;
    setGameBoardInfo([]);
  }

  return {
    gameBoardInfo,
    activePlayer,
    playerO,
    winner,
    endGame,
    playerX,
    gameBoard,
    resetGame,
    handleFieldClick,
  };
}
