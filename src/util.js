import { PlayerTypes } from "./types";

export function getActivePlayer(gameTurns) {
  let activePlayer = PlayerTypes.X;
  if (gameTurns.length > 0 && gameTurns[0].player === activePlayer) {
    activePlayer = PlayerTypes.O;
  }
  return activePlayer;
}

export const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
