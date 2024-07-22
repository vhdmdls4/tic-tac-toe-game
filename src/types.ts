/**
 * @typedef {"X" | "O" | null} PlayerType
 */

/** @enum {PlayerType} */
export const PlayerTypes = {
  X: "X",
  O: "O",
  EMPTY: null,
};

/**
 * @typedef {"X" | "O" | null} PlayerTypes
 */

/**
 * Represents a single square on the game board.
 * @typedef {{row: number, col: number, player: typeof PlayerTypes}} GameBoardSquare
 */

/**
 * Represents the entire game board as an array of GameBoardSquare objects.
 * @typedef {GameBoardSquare[]} GameBoard
 */

/** @type {GameBoard} */
// export const GameBoardType = [{
//   row: Number,
//   col: Number,
//   player: typeof PlayerTypes
// }];