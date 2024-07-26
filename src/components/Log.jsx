function Turn({ turn, players }) {
  const activePlayer = players.find((player) => player.symbol === turn.player);
  const row = turn.field.row;
  const col = turn.field.col;
  const selectedField = `"${row}", "${col}"`;
  const textForActivePlayer = `${activePlayer?.name} (${activePlayer?.symbol})`;
  return (
    <li>
      {textForActivePlayer} has selected field ({selectedField})
    </li>
  );
}

export default function Log({ turns, players }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        <Turn
          players={players}
          turn={turn}
          key={index + turn.field.row + turn.field.col}
        />;
      })}
    </ol>
  );
}
