import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import GameBoard from "./components/GameBoard";
import { fieldTypes } from "./types";
import PlayerInfo from "./components/PlayerInfo";

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

  /** @type {[FieldType, React.Dispatch<React.SetStateAction<FieldType>>]} */
  const [turn, setTurn] = useState(fieldTypes.X);

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
              symbol={fieldTypes.X}
              isPlayerActive={turn === fieldTypes.X}
            />
            <PlayerInfo
              name={"Jeca"}
              symbol={fieldTypes.O}
              isPlayerActive={turn === fieldTypes.O}
            />
          </ol>
          <GameBoard setTurn={setTurn} turn={turn} />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
