import React from "react";
import PlayerInfo from "./PlayerInfo";

export default function ({ activePlayer }) {
  return (
    <ol id="players">
      <PlayerInfo name={"Plato"} symbol={"X"} />
      <PlayerInfo name={"Jeca"} symbol={"O"} />
    </ol>
  );
}
