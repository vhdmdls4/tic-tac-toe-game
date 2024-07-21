import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import GameBoard from "./components/GameBoard";

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

  return (
    <>
      <header>
        <img src="game-logo.png" alt="Jogo da velha desenhado à mão" />
        <h1>Jogo da velha</h1>
      </header>
      <main>
        Jogo da velha em React
        <div id="game-container">
          <Scoreboard />
          <GameBoard />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
