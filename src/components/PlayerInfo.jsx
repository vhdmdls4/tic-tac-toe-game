import React, { useState } from "react";

// interface PlayerProps {
//   name: string;
//   symbol: string;
// }

export default function PlayerInfo({
  name,
  symbol,
  isPlayerActive,
  setPlayer,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleClick() {
    //updating state based on last state should be called with a arrow fcuntion
    setIsEditing((prevValue) => !prevValue);
    setPlayer((prevValue) => ({
      ...prevValue,
      name: playerName,
    }));
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setPlayerName(value);
  }

  let editableName = (
    <span className="player-name">
      {playerName} ({symbol})
    </span>
  );

  if (isEditing) {
    editableName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleInputChange}
      />
    );
  }

  return (
    <li className={isPlayerActive ? "active" : ""}>
      <span className="player">{editableName}</span>
      <button title="Save/Edit Button" onClick={handleClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
