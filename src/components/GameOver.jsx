export default function GameOver({ winner, resetGame }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner.name} won!</p> : <p>It's a draw!</p>}
      <button onClick={resetGame}>New Game</button>
    </div>
  );
}
