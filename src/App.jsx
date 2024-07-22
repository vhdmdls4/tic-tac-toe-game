import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import GameBoard from "./components/GameBoard";
import { PlayerTypes } from "./types";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";

export default function App() {
  // const [formData, setFormData] = useState({
  //   feedback: "",
  //   studentName: "",
  // });

  // const { feedback, studentName } = formData;

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormData((prevValue) => ({
  //     ...prevValue,
  //     [name]: value,
  //   }));
  //   console.log(formData);
  // }

  /** @type {[PlayerType, React.Dispatch<React.SetStateAction<PlayerType>>]} */
  const [turn, setTurn] = useState(PlayerTypes.X);
  const [gameBoardInfo, setGameBoardInfo] = useState([]);

  function changeTurn() {
    setTurn((prevTurn) =>
      prevTurn === PlayerTypes.X ? PlayerTypes.O : PlayerTypes.X
    );
  }

  function handleFieldClick(rowIndex, colIndex) {
    changeTurn();
    setGameBoardInfo((prevBoard) => {
      let activeTurn =
        prevBoard[0]?.player === PlayerTypes.X ? PlayerTypes.O : PlayerTypes.X;
      const updatedBoard = [
        {
          field: {
            row: rowIndex,
            col: colIndex,
          },
          player: activeTurn,
        },
        ...prevBoard,
      ];
      return updatedBoard;
    });
  }

  return (
    <>
      <header>
        <img src="game-logo.png" alt="Jogo da velha desenhado à mão" />
        <h1>Jogo da velha</h1>
      </header>
      <main>
        Jogo da velha em React
        <div id="game-container">
          {/* <Scoreboard activePlayer={turn} /> */}
          <ol id="players" className="highlight-player">
            <PlayerInfo
              name={"Plato"}
              symbol={PlayerTypes.X}
              isPlayerActive={turn === PlayerTypes.X}
            />
            <PlayerInfo
              name={"Jeca"}
              symbol={PlayerTypes.O}
              isPlayerActive={turn === PlayerTypes.O}
            />
          </ol>
          <GameBoard
            handleFieldClick={handleFieldClick}
            gameTurns={gameBoardInfo}
          />
          <Log />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
