import GameBoard from "./components/GameBoard";
import { PlayerTypes } from "./types";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";
import useGameBoardInfo from "./components/useGameBoardInfo";
import GameOver from "./components/GameOver";

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

  const {
    gameBoardInfo,
    activePlayer,
    playerO,
    playerX,
    handleFieldClick,
    resetGame,
    gameBoard,
    winner,
    endGame,
  } = useGameBoardInfo();

  return (
    <>
      <header>
        <img src="game-logo.png" alt="Jogo da velha desenhado à mão" />
        <h1 aria-label="Título da página 'Jogo da velha em React'">
          Jogo da velha
        </h1>
      </header>
      <main>
        <div id="game-container">
          {/* <Scoreboard activePlayer={turn} /> */}
          <ol id="players" className="highlight-player">
            <PlayerInfo {...playerX} />
            <PlayerInfo
              name={"Jeca"}
              symbol={PlayerTypes.O}
              isPlayerActive={activePlayer === PlayerTypes.O}
            />
          </ol>
          {endGame && <GameOver resetGame={resetGame} winner={winner} />}
          <GameBoard
            handleFieldClick={handleFieldClick}
            gameTurns={gameBoard}
          />
        </div>
        <Log turns={gameBoardInfo} players={[playerX, playerO]} />
      </main>
      <footer></footer>
    </>
  );
}
